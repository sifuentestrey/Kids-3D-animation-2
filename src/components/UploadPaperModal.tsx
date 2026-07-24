import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Camera,
  Sparkles,
  Sliders,
  Check,
  RefreshCw,
  Image as ImageIcon,
  Wand2,
  Smile,
  Bot,
} from 'lucide-react';
import { processPaperPhoto } from '../utils/paperExtraction';
import { playFanfareSound, playPopSound, playBoingSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { WorldCreature, BehaviorMode } from '../types';

interface UploadPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCreature?: (creature: WorldCreature) => void;
  onAddCreatureToWorld?: (creature: WorldCreature) => void;
  onOpenPrintModal?: () => void;
}

export const UploadPaperModal: React.FC<UploadPaperModalProps> = ({
  isOpen,
  onClose,
  onAddCreature,
  onAddCreatureToWorld,
  onOpenPrintModal,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [rawImageSrc, setRawImageSrc] = useState<string | null>(null);
  const [cutoutDataUrl, setCutoutDataUrl] = useState<string | null>(null);
  const [threshold, setThreshold] = useState<number>(205);
  const [creatureName, setCreatureName] = useState<string>('My Paper Doodle');
  const [personality, setPersonality] = useState<string>('Loves bouncing and exploring 3D Kids Land!');
  const [behavior, setBehavior] = useState<BehaviorMode>('wander');
  const [soundFx, setSoundFx] = useState<'boing' | 'pop' | 'march' | 'fanfare' | 'giggle'>('boing');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('dino');
  const [isAnalyzingAI, setIsAnalyzingAI] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    playPopSound();
    const reader = new FileReader();
    reader.onload = (evt) => {
      const src = evt.target?.result as string;
      setRawImageSrc(src);
      processImageSrc(src, threshold);
      analyzeWithAI(src);
    };
    reader.readAsDataURL(file);
  };

  const processImageSrc = (src: string, threshVal: number) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const result = processPaperPhoto(img, { threshold: threshVal });
        setCutoutDataUrl(result.cutoutDataUrl);
      } catch (err) {
        console.error('Failed to extract paper drawing:', err);
      }
    };
    img.src = src;
  };

  const handleThresholdChange = (newVal: number) => {
    setThreshold(newVal);
    if (rawImageSrc) {
      processImageSrc(rawImageSrc, newVal);
    }
  };

  const analyzeWithAI = async (base64Img: string) => {
    setIsAnalyzingAI(true);
    try {
      const res = await fetch('/api/ai/analyze-paper-drawing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64Img }),
      });
      const json = await res.json();
      if (json.success && json.data) {
        if (json.data.name) setCreatureName(json.data.name);
        if (json.data.personality) setPersonality(json.data.personality);
        if (json.data.suggestedBehavior) setBehavior(json.data.suggestedBehavior);
        if (json.data.soundFx) setSoundFx(json.data.soundFx);
      }
    } catch (e) {
      console.warn('AI analysis unavailable, using default name');
    } finally {
      setIsAnalyzingAI(false);
    }
  };

  const handleAddToWorld = () => {
    if (!cutoutDataUrl) return;

    playFanfareSound();
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });

    const newCreature: WorldCreature = {
      id: `creature-${Date.now()}`,
      name: creatureName || 'Paper Hero',
      drawingDataUrl: cutoutDataUrl,
      originalPaperUrl: rawImageSrc || undefined,
      position: [(Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4],
      rotationY: Math.random() * Math.PI * 2,
      scale: 1.2,
      behavior: behavior,
      personality: personality,
      soundFx: soundFx,
      isControlled: false,
      heightOffset: 0,
      tiltAngle: 0,
      depthThickness: 0.15,
      templateId: selectedTemplateId,
    };

    if (onAddCreatureToWorld) onAddCreatureToWorld(newCreature);
    if (onAddCreature) onAddCreature(newCreature);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl w-full max-w-3xl p-5 flex flex-col gap-4 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-tr from-amber-500 to-emerald-500 text-slate-950 font-black rounded-2xl shadow-lg">
            <Camera className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2">
              Upload Paper Drawing Photo 📸
            </h2>
            <p className="text-xs text-slate-400">
              Snap a photo of your child's paper drawing — we'll remove the white paper background & bring it alive in 3D!
            </p>
          </div>
        </div>

        {/* Upload Trigger Area */}
        {!rawImageSrc ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-amber-500/50 hover:border-amber-400 bg-slate-950/80 p-8 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:bg-slate-900/90 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8" />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-white mb-1">
                Click or Drop Photo of Drawing Here
              </p>
              <p className="text-xs text-slate-400">
                Supports photos from iPhone, Android, Tablet or computer files (.png, .jpg, .jpeg)
              </p>
            </div>
            <span className="mt-2 px-4 py-2 bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md group-hover:bg-amber-400">
              📷 Choose Paper Drawing Photo
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />

            {onOpenPrintModal && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  playPopSound();
                  onClose();
                  onOpenPrintModal();
                }}
                className="mt-2 text-xs font-bold text-amber-300 hover:text-amber-200 underline flex items-center justify-center gap-1 cursor-pointer"
              >
                🖨️ Don't have paper drawings yet? Click here to print sheets or draw digitally!
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Raw vs Processed Cutout Preview */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4" /> Original Paper Photo
                </span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] font-bold text-slate-400 hover:text-white flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Change Photo
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div className="w-full aspect-square bg-slate-900 rounded-xl overflow-hidden border border-slate-800 relative flex items-center justify-center">
                <img
                  src={rawImageSrc}
                  alt="Original Drawing"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Slider for Paper Background Removal */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-800">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-300">
                  <span className="flex items-center gap-1">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" /> Paper Background Cleaner:
                  </span>
                  <span className="text-amber-400 font-mono">{threshold}</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="245"
                  value={threshold}
                  onChange={(e) => handleThresholdChange(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <p className="text-[10px] text-slate-500">
                  Slide right if paper is dark or shadowy; slide left to preserve light crayon marks.
                </p>
              </div>
            </div>

            {/* 3D Cutout Result & Personality Customizer */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3 justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> 3D Living Cutout Preview
                </span>
                {isAnalyzingAI && (
                  <span className="text-[10px] font-bold text-purple-400 animate-pulse flex items-center gap-1">
                    <Wand2 className="w-3 h-3 animate-spin" /> AI Naming Creature...
                  </span>
                )}
              </div>

              <div className="w-full aspect-square bg-gradient-to-b from-purple-900/30 to-indigo-950/40 rounded-xl overflow-hidden border border-emerald-500/30 relative flex items-center justify-center p-4 shadow-inner">
                {cutoutDataUrl ? (
                  <img
                    src={cutoutDataUrl}
                    alt="3D Cutout"
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(16,185,129,0.3)] animate-bounce-slow"
                  />
                ) : (
                  <span className="text-xs text-slate-500">Processing cutout...</span>
                )}
              </div>

              {/* Creature Settings */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Template Rig Anatomy (3D Motion):
                  </label>
                  <select
                    value={selectedTemplateId}
                    onChange={(e) => setSelectedTemplateId(e.target.value)}
                    className="bg-slate-900 text-xs font-bold text-amber-300 p-2 rounded-xl border border-amber-500/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="dino">🦖 Dino (Head Bob, Stompy Legs, Tail Wag)</option>
                    <option value="robot">🤖 Robot (Robotic Head, Piston Legs, Marching Arms)</option>
                    <option value="unicorn">🦄 Unicorn (Flapping Wings, Galloping Hooves)</option>
                    <option value="cat">🐱 Kitten (Head Tilt, Paw Patter, Wiggling Tail)</option>
                    <option value="rocket">🚀 Space Rocket (Thruster Flame Blast, Fins)</option>
                    <option value="monster">👾 Monster (Jelly Jiggle, Overhead Arm Wave)</option>
                    <option value="hero">🦸 Superhero (Flight Pose, Fluttering Cape)</option>
                    <option value="blank">🎨 Custom Doodle (Classic Puppet Rig)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Creature Name:
                  </label>
                  <input
                    type="text"
                    value={creatureName}
                    onChange={(e) => setCreatureName(e.target.value)}
                    className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Living Behavior:
                    </label>
                    <select
                      value={behavior}
                      onChange={(e) => setBehavior(e.target.value as BehaviorMode)}
                      className="bg-slate-900 text-xs font-bold text-slate-200 p-1.5 rounded-xl border border-slate-800 focus:outline-none"
                    >
                      <option value="wander">🌿 Wild Explorer</option>
                      <option value="bounce">🎈 Happy Bouncer</option>
                      <option value="dance">💃 Silly Dancer</option>
                      <option value="crazy">⚡ Crazy Jumper</option>
                      <option value="sleep">😴 Sleep & Snore</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Voice / Sound:
                    </label>
                    <select
                      value={soundFx}
                      onChange={(e) => setSoundFx(e.target.value as any)}
                      className="bg-slate-900 text-xs font-bold text-slate-200 p-1.5 rounded-xl border border-slate-800 focus:outline-none"
                    >
                      <option value="boing">🏀 Boing Sound</option>
                      <option value="pop">🎈 Bubble Pop</option>
                      <option value="giggle">🤭 Giggle Laugh</option>
                      <option value="fanfare">🎺 Victory Horn</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submit to World Action */}
        {rawImageSrc && cutoutDataUrl && (
          <button
            onClick={handleAddToWorld}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <Sparkles className="w-5 h-5 fill-slate-950" /> Bring Paper Creature to 3D World! 🚀
          </button>
        )}
      </div>
    </div>
  );
};
