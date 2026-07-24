import type { VercelRequest, VercelResponse } from '@vercel/node';

// Higgsfield 3D mesh generation — Vercel serverless variant.
//
// The local dev version (server.ts) hosts the uploaded drawing in an
// in-memory map at /api/tmp-media/:id so Higgsfield's API can fetch it by
// URL. That approach can't work on Vercel: each serverless invocation is a
// fresh, stateless instance, so the media a POST stored would be gone by the
// time Higgsfield fetched it from a different invocation. Making this work
// on serverless needs a persistent public blob store (e.g. Vercel Blob) to
// host the drawing — not yet wired up.
//
// Until then this returns the same graceful fallback the client already
// handles, so creatures simply stay as their flat 2.5D cutout. This never
// surfaces an error to the kid using the app.
export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const hasKeys = !!process.env.HIGGSFIELD_API_KEY && !!process.env.HIGGSFIELD_API_SECRET;

  return res.status(hasKeys ? 501 : 400).json({
    error: hasKeys
      ? '3D generation is not yet supported on serverless (needs a public blob store to host the drawing for Higgsfield to fetch).'
      : 'HIGGSFIELD_API_KEY/HIGGSFIELD_API_SECRET is not configured.',
    fallback: true,
  });
}
