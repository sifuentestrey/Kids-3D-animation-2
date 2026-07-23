/**
 * Utility to process uploaded paper drawings (photos of drawings on white or light paper)
 * and convert paper background pixels into transparent PNG cutouts.
 */

export interface ProcessPaperOptions {
  threshold?: number; // 0 to 255 background luminance cutoff
  chromaSensitivity?: number; // color difference sensitivity
  cropPadding?: number; // padding around detected drawing boundary
  contrastBoost?: boolean; // boost marker/crayon color vibrancy
}

export function processPaperPhoto(
  imageSource: HTMLImageElement | HTMLCanvasElement,
  options: ProcessPaperOptions = {}
): { cutoutDataUrl: string; width: number; height: number } {
  const threshold = options.threshold ?? 210;
  const cropPadding = options.cropPadding ?? 16;
  const contrastBoost = options.contrastBoost ?? true;

  // Render to processing canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');

  canvas.width = imageSource.width || 512;
  canvas.height = imageSource.height || 512;

  ctx.drawImage(imageSource, 0, 0, canvas.width, canvas.height);

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  let minX = canvas.width;
  let minY = canvas.height;
  let maxX = 0;
  let maxY = 0;
  let hasDrawingPixels = false;

  // Process pixel data: detect paper background (bright/white/light)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Calculate luminance (perceived brightness)
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    // Check if pixel belongs to paper background
    // Paper is usually high luminance and low color saturation
    const maxColor = Math.max(r, g, b);
    const minColor = Math.min(r, g, b);
    const saturation = maxColor > 0 ? (maxColor - minColor) / maxColor : 0;

    // If pixel is very bright and has low saturation, it's white/light paper!
    const isPaper = luminance > threshold && saturation < 0.25;

    if (isPaper) {
      data[i + 3] = 0; // Transparent alpha
    } else {
      hasDrawingPixels = true;
      const x = (i / 4) % canvas.width;
      const y = Math.floor(i / 4 / canvas.width);

      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      // Optional: Boost crayon/marker contrast
      if (contrastBoost) {
        data[i] = Math.min(255, Math.max(0, (data[i] - 128) * 1.15 + 128));
        data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 128) * 1.15 + 128));
        data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 128) * 1.15 + 128));
      }
    }
  }

  // Put processed alpha data back to canvas
  ctx.putImageData(imgData, 0, 0);

  // Auto-Crop tightly around drawing
  if (hasDrawingPixels && maxX > minX && maxY > minY) {
    const cropX = Math.max(0, minX - cropPadding);
    const cropY = Math.max(0, minY - cropPadding);
    const cropW = Math.min(canvas.width - cropX, maxX - minX + cropPadding * 2);
    const cropH = Math.min(canvas.height - cropY, maxY - minY + cropPadding * 2);

    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = cropW;
    croppedCanvas.height = cropH;

    const croppedCtx = croppedCanvas.getContext('2d');
    if (croppedCtx) {
      croppedCtx.drawImage(
        canvas,
        cropX,
        cropY,
        cropW,
        cropH,
        0,
        0,
        cropW,
        cropH
      );
      return {
        cutoutDataUrl: croppedCanvas.toDataURL('image/png'),
        width: cropW,
        height: cropH,
      };
    }
  }

  return {
    cutoutDataUrl: canvas.toDataURL('image/png'),
    width: canvas.width,
    height: canvas.height,
  };
}
