import React, { useState } from 'react';
import { Camera, Download, X, Sparkles, Trophy, Award } from 'lucide-react';
import { ProjectData } from '../types';
import confetti from 'canvas-confetti';
import { playFanfareSound } from '../utils/soundEffects';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [activeBadge, setActiveBadge] = useState<string>('Director Award 🎬');
  const [isCapturing, setIsCapturing] = useState(false);

  if (!isOpen) return null;

  const handleSnapPhoto = () => {
    setIsCapturing(true);
    playFanfareSound();

    // Trigger colorful confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Find canvas in viewport
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${project.title.replace(/\s+/g, '_')}_3D_KidsLand.png`;
      link.href = dataUrl;
      link.click();
    }

    setTimeout(() => setIsCapturing(false), 500);
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(project, null, 2));
    const link = document.createElement('a');
    link.download = `${project.title.replace(/\s+/g, '_')}_project.json`;
    link.href = dataStr;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
            <Camera className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">Kids Land Photo Booth 📸</h3>
            <p className="text-xs text-slate-400">Snap a photo or download your 3D animation movie project!</p>
          </div>
        </div>

        {/* Sticker Badges */}
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> Choose Photo Award Badge:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Director Award 🎬',
              'Kids Land Master 🌈',
              'Animation Pro ⚡',
              '3D Superhero ⭐',
            ].map((badge) => (
              <button
                key={badge}
                onClick={() => setActiveBadge(badge)}
                className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                  activeBadge === badge
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {badge}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <button
            onClick={handleSnapPhoto}
            disabled={isCapturing}
            className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" /> Snap High-Res 3D Photo & Confetti 🎉
          </button>

          <button
            onClick={handleExportJSON}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" /> Download Project Data File (.json)
          </button>
        </div>
      </div>
    </div>
  );
};
