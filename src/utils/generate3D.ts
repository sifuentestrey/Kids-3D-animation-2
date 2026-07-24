/**
 * Asks the server to turn a drawing into a real 3D GLB mesh via Higgsfield.
 * Never throws - the 3D scene already shows a flat cutout the moment a
 * creature is created, so a missing key, network error, or generation
 * failure just means that flat cutout stays as-is.
 */
export async function requestGenerated3DModel(imageDataUrl: string): Promise<string | null> {
  try {
    const res = await fetch('/api/ai/generate-3d-model', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: imageDataUrl }),
    });
    const json = await res.json();
    if (json.success && typeof json.modelUrl === 'string') {
      return json.modelUrl;
    }
    return null;
  } catch {
    return null;
  }
}
