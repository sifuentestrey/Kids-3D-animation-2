import express from "express";
import path from "path";
import crypto from "crypto";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const HIGGSFIELD_BASE_URL = "https://platform.higgsfield.ai";
const HIGGSFIELD_3D_MODEL = "image_to_3d";
const TMP_MEDIA_TTL_MS = 10 * 60 * 1000; // 10 minutes - just long enough for Higgsfield to fetch it

// Drawings are local blobs with nowhere public to live; Higgsfield's API needs
// a fetchable image_url, so we host the upload here just long enough for one
// generation job to pull it, then it's dropped (never persisted to disk).
const tmpMediaStore = new Map<string, { buffer: Buffer; mimeType: string; expiresAt: number }>();

function putTmpMedia(buffer: Buffer, mimeType: string): string {
  const id = crypto.randomUUID();
  tmpMediaStore.set(id, { buffer, mimeType, expiresAt: Date.now() + TMP_MEDIA_TTL_MS });
  setTimeout(() => tmpMediaStore.delete(id), TMP_MEDIA_TTL_MS).unref();
  return id;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Serves a just-uploaded drawing at a short-lived public URL so an external
  // generation API (which fetches image_url itself) can reach it.
  app.get("/api/tmp-media/:id", (req, res) => {
    const entry = tmpMediaStore.get(req.params.id);
    if (!entry || entry.expiresAt < Date.now()) {
      return res.status(404).end();
    }
    res.setHeader("Content-Type", entry.mimeType);
    res.setHeader("Cache-Control", "no-store");
    res.send(entry.buffer);
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "3D Paper Drawing World" });
  });

  // Gemini Vision paper drawing analyzer
  app.post("/api/ai/analyze-paper-drawing", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: "GEMINI_API_KEY is not configured.",
          fallback: true,
        });
      }

      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: "Missing imageBase64 data" });
      }

      // Strip data url prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are an encouraging, delightful AI assistant for kids. Analyze this hand-drawn paper drawing uploaded by a child.
Return strict JSON format with:
{
  "name": "A fun cute name for the drawing (e.g. Sparky Dragon, Blobby Monster, Sir Starfish)",
  "personality": "A 1-sentence kid-friendly description of what this creature loves to do",
  "suggestedBehavior": "wander" | "bounce" | "dance" | "crazy" | "sleep",
  "soundFx": "boing" | "pop" | "march" | "fanfare" | "giggle"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            inlineData: {
              mimeType: "image/png",
              data: cleanBase64,
            },
          },
          {
            text: "Look at this child's paper drawing and create a fun name, personality, suggested behavior, and sound effect for it!",
          },
        ],
        config: {
          systemInstruction,
          responseMimeType: "application/json",
        },
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText);
      return res.json({ success: true, data: parsedData });
    } catch (err: any) {
      console.error("AI Paper Drawing Analysis error:", err);
      return res.status(500).json({ error: err.message || "Failed to analyze drawing" });
    }
  });

  // AI Animation Assistant route using Gemini API
  app.post("/api/ai/suggest-animation", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: "GEMINI_API_KEY is not configured.",
          fallback: true,
        });
      }

      const { prompt, characterType, availableBones } = req.body;
      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are a 3D Animation Assistant for kids. Given a prompt like "Make the character do a happy wave" or "Dance routine", return a JSON keyframe sequence.
The character type is "${characterType || "robot"}".
Available bones/parts: ${(availableBones || ["head", "leftArm", "rightArm", "leftLeg", "rightLeg", "body"]).join(", ")}.

Return strict JSON only (no markdown code blocks, no extra text) with the format:
{
  "title": "Short descriptive title",
  "keyframes": [
    {
      "time": 0.0,
      "pose": {
        "head": { "x": 0, "y": 0, "z": 0 },
        "leftArm": { "x": 0, "y": 0, "z": 45 },
        "rightArm": { "x": 0, "y": 0, "z": -45 },
        "leftLeg": { "x": 0, "y": 0, "z": 0 },
        "rightLeg": { "x": 0, "y": 0, "z": 0 },
        "body": { "x": 0, "y": 0, "z": 0 }
      }
    },
    ...
  ]
}
Rotations are in degrees (-180 to 180). Provide 3 to 6 keyframes spanning 0.0s to 3.0s.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
        },
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText);
      return res.json({ success: true, data: parsedData });
    } catch (err: any) {
      console.error("AI Suggestion error:", err);
      return res.status(500).json({ error: err.message || "Failed to generate AI animation" });
    }
  });

  // Turns a drawing's cutout image into a real 3D GLB mesh via Higgsfield.
  // Gated behind HIGGSFIELD_API_KEY/SECRET like the Gemini routes above -
  // the client already shows a flat 2.5D cutout immediately and only swaps
  // in the 3D model if/when this succeeds, so any failure here (missing
  // keys, network error, timeout, out of credits) is a silent no-op upgrade
  // miss, never a visible error for the kid using the app.
  app.post("/api/ai/generate-3d-model", async (req, res) => {
    try {
      const apiKey = process.env.HIGGSFIELD_API_KEY;
      const apiSecret = process.env.HIGGSFIELD_API_SECRET;
      if (!apiKey || !apiSecret) {
        return res.status(400).json({
          error: "HIGGSFIELD_API_KEY/HIGGSFIELD_API_SECRET is not configured.",
          fallback: true,
        });
      }

      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: "Missing imageBase64 data" });
      }

      const match = /^data:(image\/\w+);base64,(.+)$/.exec(imageBase64);
      const mimeType = match ? match[1] : "image/png";
      const rawBase64 = match ? match[2] : imageBase64;
      const buffer = Buffer.from(rawBase64, "base64");

      const mediaId = putTmpMedia(buffer, mimeType);
      const publicHost = `${req.protocol}://${req.get("host")}`;
      const imageUrl = `${publicHost}/api/tmp-media/${mediaId}`;

      const authHeader = `Key ${apiKey}:${apiSecret}`;

      const submitResponse = await fetch(`${HIGGSFIELD_BASE_URL}/${HIGGSFIELD_3D_MODEL}`, {
        method: "POST",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          image_url: imageUrl,
          should_texture: true,
        }),
      });

      if (!submitResponse.ok) {
        const errText = await submitResponse.text().catch(() => "");
        return res.status(502).json({
          error: `Higgsfield submit failed (${submitResponse.status}): ${errText}`,
          fallback: true,
        });
      }

      const submitData: any = await submitResponse.json();
      const requestId = submitData.request_id || submitData.id;
      if (!requestId) {
        return res.status(502).json({ error: "Higgsfield response missing request_id", fallback: true });
      }

      // Poll for completion - Meshy-style mesh generation typically takes
      // well under two minutes; give up gracefully past that.
      const pollDeadline = Date.now() + 2 * 60 * 1000;
      let modelUrl: string | null = null;
      let lastStatus = "queued";

      while (Date.now() < pollDeadline) {
        await new Promise((r) => setTimeout(r, 3000));

        const statusResponse = await fetch(`${HIGGSFIELD_BASE_URL}/requests/${requestId}/status`, {
          headers: { Authorization: authHeader, Accept: "application/json" },
        });
        if (!statusResponse.ok) continue;

        const statusData: any = await statusResponse.json();
        lastStatus = statusData.status || lastStatus;

        if (lastStatus === "completed") {
          // Response shape for the 3D model isn't fully documented, so check
          // the field names generation results commonly show up under.
          modelUrl =
            statusData.model_url ||
            statusData.glb_url ||
            statusData.result?.model_url ||
            statusData.result?.glb_url ||
            statusData.output?.url ||
            statusData.assets?.[0]?.url ||
            statusData.medias?.[0]?.url ||
            null;
          break;
        }
        if (lastStatus === "failed" || lastStatus === "nsfw") {
          break;
        }
      }

      if (!modelUrl) {
        return res.status(502).json({
          error: `3D generation did not complete (status: ${lastStatus})`,
          fallback: true,
        });
      }

      return res.json({ success: true, modelUrl });
    } catch (err: any) {
      console.error("3D model generation error:", err);
      return res.status(500).json({ error: err.message || "Failed to generate 3D model", fallback: true });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`3D Kids Animator server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
