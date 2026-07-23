import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

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
