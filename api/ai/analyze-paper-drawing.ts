import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// Gemini Vision paper drawing analyzer (Vercel serverless version of the
// matching route in server.ts, used for local dev).
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(400).json({
        error: 'GEMINI_API_KEY is not configured.',
        fallback: true,
      });
    }

    const { imageBase64 } = req.body || {};
    if (!imageBase64) {
      return res.status(400).json({ error: 'Missing imageBase64 data' });
    }

    // Strip data url prefix if present
    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');

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
      model: 'gemini-2.5-flash',
      contents: [
        {
          inlineData: {
            mimeType: 'image/png',
            data: cleanBase64,
          },
        },
        {
          text: "Look at this child's paper drawing and create a fun name, personality, suggested behavior, and sound effect for it!",
        },
      ],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text || '{}';
    const parsedData = JSON.parse(responseText);
    return res.json({ success: true, data: parsedData });
  } catch (err: any) {
    console.error('AI Paper Drawing Analysis error:', err);
    return res.status(500).json({ error: err.message || 'Failed to analyze drawing' });
  }
}
