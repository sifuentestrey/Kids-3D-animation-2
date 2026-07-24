import React, { useRef, useState, useEffect } from 'react';
import {
  X,
  Palette,
  Eraser,
  RotateCcw,
  Sparkles,
  Wand2,
  Smile,
  Crown,
  Heart,
  Glasses,
  Star,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playFanfareSound, playPopSound, playBoingSound } from '../utils/soundEffects';
import { TEMPLATE_DEFINITIONS } from '../utils/templateDrawings';

interface DrawHeroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveDrawing: (drawingDataUrl: string, heroName: string, templateId?: string) => void;
  initialTemplateId?: string;
}

const BRUSH_SIZES = [
  { label: 'Marker 🖊️', size: 4 },
  { label: 'Crayon 🖍️', size: 10 },
  { label: 'Brush 🖌️', size: 20 },
  { label: 'Roller 🎨', size: 36 },
];

const COLORS = [
  '#ef4444', // Red
  '#f97316', // Orange
  '#eab308', // Yellow
  '#22c55e', // Green
  '#06b6d4', // Cyan
  '#3b82f6', // Blue
  '#a855f7', // Purple
  '#ec4899', // Pink
  '#78350f', // Brown
  '#1e293b', // Black
  '#ffffff', // White
];

const STICKERS = [
  { emoji: '👀', label: 'Eyes' },
  { emoji: '😁', label: 'Smile' },
  { emoji: '👑', label: 'Crown' },
  { emoji: '🕶️', label: 'Shades' },
  { emoji: '⭐', label: 'Star' },
  { emoji: '❤️', label: 'Heart' },
  { emoji: '🎀', label: 'Bow' },
];

const TEMPLATES = TEMPLATE_DEFINITIONS.map((t) => ({
  id: t.id,
  label: `${t.name.split(' ')[0]} ${t.emoji}`,
}));

export const DrawHeroModal: React.FC<DrawHeroModalProps> = ({
  isOpen,
  onClose,
  onSaveDrawing,
  initialTemplateId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#3b82f6');
  const [brushSize, setBrushSize] = useState(10);
  const [isEraser, setIsEraser] = useState(false);
  const [rainbowMode, setRainbowMode] = useState(false);
  const [heroName, setHeroName] = useState('My Doodle Hero');
  const [activeStamp, setActiveStamp] = useState<string | null>(null);
  const [currentTemplate, setCurrentTemplate] = useState<string>(initialTemplateId || 'blank');
  const [history, setHistory] = useState<ImageData[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize Canvas
  useEffect(() => {
    if (!isOpen) return;
    const targetTemplate = initialTemplateId || 'blank';
    setCurrentTemplate(targetTemplate);
    setTimeout(() => {
      clearAndDrawTemplate(targetTemplate);
    }, 50);
  }, [isOpen, initialTemplateId]);

  if (!isOpen) return null;

  const saveHistoryState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev.slice(-15), imgData]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    playPopSound();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const previousState = history[history.length - 1];
    setHistory((prev) => prev.slice(0, prev.length - 1));
    ctx.putImageData(previousState, 0, 0);
  };

  const clearAndDrawTemplate = (templateId: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    setHistory([]);

    // Fill white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const def = TEMPLATE_DEFINITIONS.find((t) => t.id === templateId) || TEMPLATE_DEFINITIONS[0];
    def.drawGuidelines(ctx, canvas.width, canvas.height);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    saveHistoryState();

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    if (activeStamp) {
      playPopSound();
      ctx.font = '64px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(activeStamp, x, y);
      setActiveStamp(null);
      return;
    }

    setIsDrawing(true);
    lastPosRef.current = { x, y };
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fillStyle = isEraser ? '#ffffff' : color;
    ctx.fill();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || activeStamp || !lastPosRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = brushSize;

    if (isEraser) {
      ctx.strokeStyle = '#ffffff';
    } else if (rainbowMode) {
      const hue = (Date.now() / 5) % 360;
      ctx.strokeStyle = `hsl(${hue}, 95%, 55%)`;
    } else {
      ctx.strokeStyle = color;
    }

    ctx.beginPath();
    ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y);
    const midX = (lastPosRef.current.x + x) / 2;
    const midY = (lastPosRef.current.y + y) / 2;
    ctx.quadraticCurveTo(lastPosRef.current.x, lastPosRef.current.y, midX, midY);
    ctx.stroke();

    lastPosRef.current = { x, y };
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    lastPosRef.current = null;
  };

  const handleFinishDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    playFanfareSound();
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });

    const dataUrl = canvas.toDataURL('image/png');
    onSaveDrawing(dataUrl, heroName || 'My Hand-Drawn Hero', currentTemplate);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl p-5 flex flex-col gap-4 relative my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-tr from-pink-500 to-purple-600 text-white rounded-2xl shadow-lg">
            <Palette className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              Draw Your Hero & Bring to 3D! 🎨✨
            </h2>
            <p className="text-xs text-slate-400">
              Draw any character, monster, or creature below — it becomes a live 3D animated hero in Kids Land!
            </p>
          </div>
        </div>

        {/* Hero Name Input & Stencils */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <span className="text-xs font-bold text-amber-400">Hero Name:</span>
            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
              placeholder="e.g. Super Doodle Monster"
              className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold text-slate-400 mr-1">Outline Stencil:</span>
            {TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => {
                  playBoingSound();
                  setCurrentTemplate(tmpl.id);
                  clearAndDrawTemplate(tmpl.id);
                }}
                className="px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold transition-all"
              >
                {tmpl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Canvas & Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Drawing Controls Panel */}
          <div className="md:col-span-4 flex flex-col gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 h-full justify-between">
            {/* Color Palette */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Pick Marker Colors:
              </label>
              <div className="grid grid-cols-6 gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setColor(c);
                      setIsEraser(false);
                      setRainbowMode(false);
                      setActiveStamp(null);
                    }}
                    style={{ backgroundColor: c }}
                    className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 shadow-md ${
                      color === c && !isEraser && !rainbowMode
                        ? 'border-white scale-110 ring-2 ring-purple-400'
                        : 'border-slate-800'
                    }`}
                  />
                ))}
              </div>

              {/* Special Rainbow Brush Button */}
              <button
                onClick={() => {
                  setRainbowMode(!rainbowMode);
                  setIsEraser(false);
                  setActiveStamp(null);
                }}
                className={`mt-1 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  rainbowMode
                    ? 'bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-white border-white shadow-lg font-black'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> Magic Rainbow Brush 🌈
              </button>
            </div>

            {/* Brush Sizes */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Brush Thickness:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {BRUSH_SIZES.map((b) => (
                  <button
                    key={b.size}
                    onClick={() => {
                      setBrushSize(b.size);
                      setIsEraser(false);
                    }}
                    className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                      brushSize === b.size && !isEraser
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stamps & Eraser */}
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Sticker Stamps (Tap to Stamp):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {STICKERS.map((st) => (
                  <button
                    key={st.label}
                    onClick={() => {
                      playPopSound();
                      setActiveStamp(activeStamp === st.emoji ? null : st.emoji);
                    }}
                    className={`w-9 h-9 text-xl rounded-xl border flex items-center justify-center transition-all ${
                      activeStamp === st.emoji
                        ? 'bg-amber-400 border-amber-200 scale-110 shadow-lg'
                        : 'bg-slate-900 border-slate-800 hover:bg-slate-800'
                    }`}
                    title={`Stamp ${st.label}`}
                  >
                    {st.emoji}
                  </button>
                ))}
              </div>
            </div>

            {/* Eraser, Undo & Clear */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={handleUndo}
                disabled={history.length === 0}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  history.length > 0
                    ? 'bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400 shadow-md cursor-pointer'
                    : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
                }`}
                title="Undo last stroke"
              >
                <RotateCcw className="w-4 h-4" /> Undo
              </button>

              <button
                onClick={() => {
                  setIsEraser(!isEraser);
                  setActiveStamp(null);
                }}
                className={`flex-1 p-2 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  isEraser
                    ? 'bg-rose-600 text-white border-rose-400 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <Eraser className="w-4 h-4" /> Eraser
              </button>

              <button
                onClick={() => {
                  playBoingSound();
                  clearAndDrawTemplate('blank');
                }}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-bold flex items-center justify-center gap-1"
                title="Clear Canvas"
              >
                <RotateCcw className="w-4 h-4" /> Clear All
              </button>
            </div>
          </div>

          {/* Canvas Work Area */}
          <div className="md:col-span-8 flex flex-col items-center justify-center bg-slate-950 p-4 rounded-2xl border border-slate-800 relative shadow-inner">
            <canvas
              ref={canvasRef}
              width={512}
              height={512}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className={`w-full max-w-[420px] aspect-square rounded-2xl border-4 border-amber-400 shadow-2xl touch-none bg-white ${
                activeStamp ? 'cursor-crosshair' : 'cursor-pen'
              }`}
            />
            {activeStamp && (
              <div className="absolute top-6 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black shadow-lg animate-bounce">
                Tap anywhere on your drawing to stamp {activeStamp}!
              </div>
            )}
          </div>
        </div>

        {/* Submit Action Button */}
        <button
          onClick={handleFinishDrawing}
          className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          <Sparkles className="w-5 h-5 fill-slate-950" /> Bring My Drawing to 3D Kids Land! 🚀
        </button>
      </div>
    </div>
  );
};
