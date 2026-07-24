import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

// AI Animation Assistant (Vercel serverless version of the matching route
// in server.ts, used for local dev).
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

    const { prompt, characterType, availableBones } = req.body || {};
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are a 3D Animation Assistant for kids. Given a prompt like "Make the character do a happy wave" or "Dance routine", return a JSON keyframe sequence.
The character type is "${characterType || 'robot'}".
Available bones/parts: ${(availableBones || ['head', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg', 'body']).join(', ')}.

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
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text || '{}';
    const parsedData = JSON.parse(responseText);
    return res.json({ success: true, data: parsedData });
  } catch (err: any) {
    console.error('AI Suggestion error:', err);
    return res.status(500).json({ error: err.message || 'Failed to generate AI animation' });
  }
}
