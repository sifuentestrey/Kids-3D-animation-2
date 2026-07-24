/**
 * Computer Vision Pipeline for Paper Drawing Extraction & 3D Texture Mapping
 * Includes 4-Point Perspective Warp, Contour Boundary Detection,
 * Perspective Un-Tilting, and Transparency/Chroma Filtering.
 */

declare global {
  interface Window {
    cv?: any;
  }
}

export interface ProcessPaperOptions {
  threshold?: number; // 0 to 255 background luminance cutoff
  cropPadding?: number; // padding around detected drawing boundary
  contrastBoost?: boolean; // boost marker/crayon color vibrancy
  enablePerspectiveWarp?: boolean; // auto-detect paper corners & flatten tilt
}

export interface Point2D {
  x: number;
  y: number;
}

export interface FourCorners {
  topLeft: Point2D;
  topRight: Point2D;
  bottomRight: Point2D;
  bottomLeft: Point2D;
}

/**
 * Solves 8-parameter Perspective Transform Homography Matrix
 * Maps destination canvas coordinates (u, v) back to source image coordinates (x, y)
 */
function solvePerspectiveTransform(src: FourCorners, dstWidth: number, dstHeight: number) {
  // Destination coordinates:
  // (0, 0), (dstWidth, 0), (dstWidth, dstHeight), (0, dstHeight)
  const x0 = src.topLeft.x, y0 = src.topLeft.y;
  const x1 = src.topRight.x, y1 = src.topRight.y;
  const x2 = src.bottomRight.x, y2 = src.bottomRight.y;
  const x3 = src.bottomLeft.x, y3 = src.bottomLeft.y;

  const w = dstWidth;
  const h = dstHeight;

  // Set up linear system to map (0,0)->(x0,y0), (w,0)->(x1,y1), (w,h)->(x2,y2), (0,h)->(x3,y3)
  const dx1 = x1 - x2;
  const dx2 = x3 - x2;
  const dy1 = y1 - y2;
  const dy2 = y3 - y2;

  const sx = x0 - x1 + x2 - x3;
  const sy = y0 - y1 + y2 - y3;

  const g = (sx * dy2 - dx2 * sy) / (dx1 * dy2 - dx2 * dy1);
  const h_param = (dx1 * sy - sx * dy1) / (dx1 * dy2 - dx2 * dy1);

  const a = x1 - x0 + g * x1;
  const b = x3 - x0 + h_param * x3;
  const c = x0;
  const d = y1 - y0 + g * y1;
  const e = y3 - y0 + h_param * y3;
  const f = y0;

  return (u: number, v: number): Point2D => {
    // Normalize coordinates [0..1]
    const uNorm = u / w;
    const vNorm = v / h;

    const denominator = g * uNorm + h_param * vNorm + 1;
    const x = (a * uNorm + b * vNorm + c) / denominator;
    const y = (d * uNorm + e * vNorm + f) / denominator;

    return { x, y };
  };
}

/**
 * Automatically detects paper/target boundary corners in image
 */
export function detectPaperCorners(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
): FourCorners {
  const w = canvas.width;
  const h = canvas.height;

  // Use OpenCV.js if available on window
  if (window.cv && window.cv.Mat) {
    try {
      const cv = window.cv;
      const srcMat = cv.imread(canvas);
      const grayMat = new cv.Mat();
      cv.cvtColor(srcMat, grayMat, cv.COLOR_RGBA2GRAY);

      const blurMat = new cv.Mat();
      cv.GaussianBlur(grayMat, blurMat, new cv.Size(5, 5), 0);

      const cannyMat = new cv.Mat();
      cv.Canny(blurMat, cannyMat, 75, 200);

      const contours = new cv.MatVector();
      const hierarchy = new cv.Mat();
      cv.findContours(cannyMat, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

      let maxArea = 0;
      let bestPoly: FourCorners | null = null;

      for (let i = 0; i < contours.size(); ++i) {
        const contour = contours.get(i);
        const area = cv.contourArea(contour);
        if (area > (w * h * 0.15)) {
          const peri = cv.arcLength(contour, true);
          const approx = new cv.Mat();
          cv.approxPolyDP(contour, approx, 0.02 * peri, true);

          if (approx.rows === 4 && area > maxArea) {
            maxArea = area;
            const pts: Point2D[] = [];
            for (let r = 0; r < 4; r++) {
              pts.push({ x: approx.data32S[r * 2], y: approx.data32S[r * 2 + 1] });
            }
            // Sort corners: TL, TR, BR, BL
            pts.sort((a, b) => a.y - b.y);
            const topPts = pts.slice(0, 2).sort((a, b) => a.x - b.x);
            const bottomPts = pts.slice(2, 4).sort((a, b) => a.x - b.x);

            bestPoly = {
              topLeft: topPts[0],
              topRight: topPts[1],
              bottomRight: bottomPts[1],
              bottomLeft: bottomPts[0],
            };
          }
          approx.delete();
        }
      }

      srcMat.delete(); grayMat.delete(); blurMat.delete(); cannyMat.delete(); contours.delete(); hierarchy.delete();

      if (bestPoly) return bestPoly;
    } catch (e) {
      console.warn('OpenCV corner detection fallback to JS algorithm', e);
    }
  }

  // Pure High-Performance JS Contour & Extremes Fallback
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  let minSum = Infinity, maxSum = -Infinity;
  let minDiff = Infinity, maxDiff = -Infinity;

  let tl = { x: w * 0.05, y: h * 0.05 };
  let tr = { x: w * 0.95, y: h * 0.05 };
  let br = { x: w * 0.95, y: h * 0.95 };
  let bl = { x: w * 0.05, y: h * 0.95 };

  const sampleStep = Math.max(2, Math.floor(Math.min(w, h) / 120));

  for (let y = 0; y < h; y += sampleStep) {
    for (let x = 0; x < w; x += sampleStep) {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      // Paper edges are usually brighter than dark desk background or have distinct contrast
      if (luminance > 140) {
        const sum = x + y;
        const diff = x - y;

        if (sum < minSum) { minSum = sum; tl = { x, y }; }
        if (sum > maxSum) { maxSum = sum; br = { x, y }; }
        if (diff > maxDiff) { maxDiff = diff; tr = { x, y }; }
        if (diff < minDiff) { minDiff = diff; bl = { x, y }; }
      }
    }
  }

  return { topLeft: tl, topRight: tr, bottomRight: br, bottomLeft: bl };
}

/**
 * Processes paper photo with 4-Point Perspective Warp & Background Removal
 */
export function processPaperPhoto(
  imageSource: HTMLImageElement | HTMLCanvasElement,
  options: ProcessPaperOptions = {}
): { cutoutDataUrl: string; width: number; height: number; corners?: FourCorners } {
  const threshold = options.threshold ?? 205;
  const cropPadding = options.cropPadding ?? 12;
  const contrastBoost = options.contrastBoost ?? true;
  const enableWarp = options.enablePerspectiveWarp ?? true;

  // Step 1: Render source image to intermediate processing canvas
  const srcCanvas = document.createElement('canvas');
  srcCanvas.width = imageSource.width || 512;
  srcCanvas.height = imageSource.height || 512;
  const srcCtx = srcCanvas.getContext('2d', { willReadFrequently: true });
  if (!srcCtx) throw new Error('Failed to create source canvas context');

  srcCtx.drawImage(imageSource, 0, 0, srcCanvas.width, srcCanvas.height);

  // Step 2: Perspective Un-Warping & Flattening
  const outSize = 512;
  const warpedCanvas = document.createElement('canvas');
  warpedCanvas.width = outSize;
  warpedCanvas.height = outSize;
  const warpedCtx = warpedCanvas.getContext('2d', { willReadFrequently: true });
  if (!warpedCtx) throw new Error('Failed to create warped canvas context');

  let corners: FourCorners | undefined;

  if (enableWarp) {
    corners = detectPaperCorners(srcCanvas, srcCtx);
    const transform = solvePerspectiveTransform(corners, outSize, outSize);

    const srcImgData = srcCtx.getImageData(0, 0, srcCanvas.width, srcCanvas.height);
    const srcData = srcImgData.data;
    const dstImgData = warpedCtx.createImageData(outSize, outSize);
    const dstData = dstImgData.data;

    for (let u = 0; u < outSize; u++) {
      for (let v = 0; v < outSize; v++) {
        const srcPt = transform(u, v);
        const sx = Math.min(srcCanvas.width - 1, Math.max(0, Math.round(srcPt.x)));
        const sy = Math.min(srcCanvas.height - 1, Math.max(0, Math.round(srcPt.y)));

        const srcIdx = (sy * srcCanvas.width + sx) * 4;
        const dstIdx = (v * outSize + u) * 4;

        dstData[dstIdx] = srcData[srcIdx];
        dstData[dstIdx + 1] = srcData[srcIdx + 1];
        dstData[dstIdx + 2] = srcData[srcIdx + 2];
        dstData[dstIdx + 3] = srcData[srcIdx + 3];
      }
    }
    warpedCtx.putImageData(dstImgData, 0, 0);
  } else {
    warpedCtx.drawImage(srcCanvas, 0, 0, outSize, outSize);
  }

  // Step 3: Transparent Background Removal & Chroma Filtering
  const imgData = warpedCtx.getImageData(0, 0, outSize, outSize);
  const data = imgData.data;

  // Sample corner regions of warped canvas to determine paper background tone
  let bgR = 0, bgG = 0, bgB = 0, bgSamples = 0;
  const cornerR = Math.floor(outSize * 0.08);

  for (let y = 0; y < outSize; y += 4) {
    for (let x = 0; x < outSize; x += 4) {
      const isCorner =
        (x < cornerR && y < cornerR) ||
        (x > outSize - cornerR && y < cornerR) ||
        (x < cornerR && y > outSize - cornerR) ||
        (x > outSize - cornerR && y > outSize - cornerR);

      if (isCorner) {
        const idx = (y * outSize + x) * 4;
        bgR += data[idx];
        bgG += data[idx + 1];
        bgB += data[idx + 2];
        bgSamples++;
      }
    }
  }

  if (bgSamples > 0) {
    bgR /= bgSamples;
    bgG /= bgSamples;
    bgB /= bgSamples;
  } else {
    bgR = 240; bgG = 240; bgB = 240;
  }

  let minX = outSize, minY = outSize, maxX = 0, maxY = 0;
  let hasDrawingPixels = false;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    const distFromBg = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

    const maxColor = Math.max(r, g, b);
    const minColor = Math.min(r, g, b);
    const saturation = maxColor > 0 ? (maxColor - minColor) / maxColor : 0;

    const isBrightPaper = luminance > threshold && saturation < 0.35;
    const isBgMatch = distFromBg < (255 - threshold) * 1.3 && saturation < 0.28;

    if (isBrightPaper || isBgMatch) {
      data[i + 3] = 0; // Transparent
    } else {
      hasDrawingPixels = true;
      const x = (i / 4) % outSize;
      const y = Math.floor(i / 4 / outSize);

      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;

      if (contrastBoost) {
        data[i] = Math.min(255, Math.max(0, (data[i] - 110) * 1.25 + 110));
        data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 110) * 1.25 + 110));
        data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 110) * 1.25 + 110));
        data[i + 3] = 255;
      }
    }
  }

  warpedCtx.putImageData(imgData, 0, 0);

  // Step 4: Final Auto-Crop Tightly around drawing bounds
  if (hasDrawingPixels && maxX > minX && maxY > minY) {
    const cropX = Math.max(0, minX - cropPadding);
    const cropY = Math.max(0, minY - cropPadding);
    const cropW = Math.min(outSize - cropX, maxX - minX + cropPadding * 2);
    const cropH = Math.min(outSize - cropY, maxY - minY + cropPadding * 2);

    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = cropW;
    croppedCanvas.height = cropH;
    const croppedCtx = croppedCanvas.getContext('2d');
    if (croppedCtx) {
      croppedCtx.drawImage(
        warpedCanvas,
        cropX, cropY, cropW, cropH,
        0, 0, cropW, cropH
      );
      return {
        cutoutDataUrl: croppedCanvas.toDataURL('image/png'),
        width: cropW,
        height: cropH,
        corners,
      };
    }
  }

  return {
    cutoutDataUrl: warpedCanvas.toDataURL('image/png'),
    width: outSize,
    height: outSize,
    corners,
  };
}
