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
  Printer,
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
  onOpenPrintModal?: () => void;
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
  onOpenPrintModal,
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
    <header className="bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-2.5 py-2 sm:px-4 sm:py-3 flex items-center justify-between gap-2 shadow-xl z-40 relative">
      {/* Brand & Project Title */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg shadow-pink-500/20 shrink-0">
          <Trees className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>

        <div className="min-w-0">
          <h1 className="font-display font-black text-xs sm:text-lg text-white tracking-wide flex items-center gap-1 truncate">
            <span className="truncate">3D Paper World</span>
            <span className="hidden sm:inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-sans font-extrabold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full uppercase">
              KIDS PLAYGROUND 🌈
            </span>
          </h1>

          <div className="flex items-center gap-1 text-[10px] sm:text-xs">
            <span className="text-slate-400 hidden xs:inline">World:</span>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => onUpdateTitle(e.target.value)}
              className="bg-transparent hover:bg-slate-800/80 focus:bg-slate-950 text-amber-300 font-bold px-1 py-0.5 rounded focus:outline-none focus:ring-1 focus:ring-amber-400 text-[10px] sm:text-xs transition-colors truncate max-w-[100px] sm:max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Printable Templates Button */}
        {onOpenPrintModal && (
          <button
            onClick={onOpenPrintModal}
            className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 hover:from-sky-300 hover:to-indigo-500 text-white font-black text-[11px] sm:text-xs shadow-md transition-transform active:scale-95 uppercase tracking-wider"
            title="Print paper drawing templates for kids"
          >
            <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
            <span className="hidden lg:inline">🖨️ Print Templates</span>
            <span className="lg:hidden">🖨️ Print</span>
          </button>
        )}

        {/* Paper Photo Upload Button */}
        {onOpenUploadModal && (
          <button
            onClick={onOpenUploadModal}
            className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-[11px] sm:text-xs shadow-md transition-transform active:scale-95 uppercase tracking-wider"
            title="Upload photo of paper drawing"
          >
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden md:inline">📷 Upload Paper Drawing</span>
            <span className="md:hidden">📷 Photo</span>
          </button>
        )}

        {/* Draw Hero Canvas Button */}
        {onOpenDrawModal && (
          <button
            onClick={onOpenDrawModal}
            className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-[11px] sm:text-xs shadow-md transition-transform active:scale-95"
            title="Draw screen hero"
          >
            <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">🎨 Draw Hero</span>
            <span className="sm:hidden">🎨 Draw</span>
          </button>
        )}

        {/* AI Director Modal Button */}
        <button
          onClick={onOpenAIModal}
          className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-[11px] sm:text-xs shadow-md transition-transform active:scale-95"
          title="AI Director"
        >
          <Wand2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">AI Director</span>
          <span className="sm:hidden">AI</span>
        </button>

        {/* Photo Booth Export */}
        <button
          onClick={onOpenExportModal}
          className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] sm:text-xs shadow-md transition-transform active:scale-95"
          title="Photo Booth"
        >
          <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden md:inline">Photo Booth</span>
        </button>

        {/* Help / Guide */}
        <button
          onClick={onOpenHelp}
          title="How to animate guide"
          className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </header>
  );
};
