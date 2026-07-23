import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  HelpCircle,
  Wand2,
  Film,
  Play,
  Trees,
  Palette,
} from 'lucide-react';
import { AnimationClip } from '../types';
import { PRESET_CLIPS } from '../constants/animationDefaults';
import { playBoingSound } from '../utils/soundEffects';

interface HeaderProps {
  projectTitle: string;
  onUpdateTitle: (title: string) => void;
  onOpenAIModal: () => void;
  onOpenExportModal: () => void;
  onOpenDrawModal?: () => void;
  onOpenUploadModal?: () => void;
  onLoadPresetClip: (clip: AnimationClip) => void;
  onResetProject: () => void;
  onOpenHelp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  projectTitle,
  onUpdateTitle,
  onOpenAIModal,
  onOpenExportModal,
  onOpenDrawModal,
  onOpenUploadModal,
  onLoadPresetClip,
  onResetProject,
  onOpenHelp,
}) => {
  const [showPresetsDropdown, setShowPresetsDropdown] = useState(false);

  const handleSelectClip = (clip: AnimationClip) => {
    playBoingSound();
    onLoadPresetClip(clip);
    setShowPresetsDropdown(false);
  };

  return (
    <header className="bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-xl z-40 relative">
      {/* Brand & Project Title */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 p-2.5 rounded-2xl shadow-lg shadow-pink-500/20">
          <Trees className="w-6 h-6 text-white" />
        </div>

        <div>
          <h1 className="font-display font-black text-lg text-white tracking-wide flex items-center gap-1.5">
            3D Paper Drawing World
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-sans font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase">
              KIDS PLAYGROUND 🌈
            </span>
          </h1>

          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400">World:</span>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => onUpdateTitle(e.target.value)}
              className="bg-transparent hover:bg-slate-800/80 focus:bg-slate-950 text-amber-300 font-bold px-1.5 py-0.5 rounded focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Paper Photo Upload Button */}
        {onOpenUploadModal && (
          <button
            onClick={onOpenUploadModal}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition-transform active:scale-95 uppercase tracking-wider"
          >
            <Camera className="w-4 h-4" /> 📷 Upload Paper Drawing
          </button>
        )}

        {/* Draw Hero Canvas Button */}
        {onOpenDrawModal && (
          <button
            onClick={onOpenDrawModal}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition-transform active:scale-95"
          >
            <Palette className="w-4 h-4" /> 🎨 Draw Screen Hero
          </button>
        )}

        {/* AI Director Modal Button */}
        <button
          onClick={onOpenAIModal}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-purple-600/20 transition-transform active:scale-95"
        >
          <Wand2 className="w-4 h-4" /> AI Director
        </button>

        {/* Photo Booth Export */}
        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-transform active:scale-95"
        >
          <Camera className="w-4 h-4" /> Photo Booth
        </button>

        {/* Help / Guide */}
        <button
          onClick={onOpenHelp}
          title="How to animate guide"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
