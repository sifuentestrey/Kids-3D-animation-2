import React from 'react';
import {
  Camera,
  HelpCircle,
  Trees,
  Palette,
  Printer,
  Smartphone,
} from 'lucide-react';
import { playBoingSound, playPopSound } from '../utils/soundEffects';

interface HeaderProps {
  projectTitle: string;
  onUpdateTitle: (title: string) => void;
  onOpenDrawModal?: () => void;
  onOpenUploadModal?: () => void;
  onOpenPrintModal?: () => void;
  onOpenArModal?: () => void;
  onOpenHelp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  projectTitle,
  onUpdateTitle,
  onOpenDrawModal,
  onOpenUploadModal,
  onOpenPrintModal,
  onOpenArModal,
  onOpenHelp,
}) => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-3 py-2 sm:px-5 sm:py-3 flex items-center justify-between gap-2 shadow-xl z-40 relative">
      {/* Brand & Project Title */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
        <div className="flex items-center justify-center p-2 sm:p-2.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 shadow-lg shadow-purple-500/20 shrink-0">
          <Trees className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        <div className="min-w-0">
          <h1 className="font-display font-black text-sm sm:text-xl text-white tracking-wide flex items-center gap-1.5 truncate">
            <span className="truncate">3D Paper World</span>
            <span className="hidden sm:inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-sans font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase">
              COLOR & SCAN 🎨
            </span>
          </h1>

          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => onUpdateTitle(e.target.value)}
              className="bg-transparent hover:bg-slate-800/80 focus:bg-slate-950 text-amber-300 font-bold px-1.5 py-0.5 rounded focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors truncate max-w-[120px] sm:max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Main Streamlined Action Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        {/* 1. COLOR / DRAW DIGITAL SKIN */}
        {onOpenDrawModal && (
          <button
            onClick={() => {
              playBoingSound();
              onOpenDrawModal();
            }}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-95 uppercase tracking-wider"
            title="Color & paint 3D model skin"
          >
            <Palette className="w-4 h-4 text-slate-950" />
            <span className="hidden sm:inline">🎨 Color</span>
            <span className="sm:hidden">Color</span>
          </button>
        )}

        {/* 2. SCAN / UPLOAD PAPER */}
        {onOpenUploadModal && (
          <button
            onClick={() => {
              playBoingSound();
              onOpenUploadModal();
            }}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95 uppercase tracking-wider"
            title="Scan photo of paper drawing"
          >
            <Camera className="w-4 h-4 text-slate-950" />
            <span className="hidden md:inline">📷 Scan Paper</span>
            <span className="md:hidden">Scan</span>
          </button>
        )}

        {/* 3. PRINT TEMPLATES */}
        {onOpenPrintModal && (
          <button
            onClick={() => {
              playPopSound();
              onOpenPrintModal();
            }}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-xs sm:text-sm border border-slate-700/80 transition-all active:scale-95"
            title="Print coloring sheets"
          >
            <Printer className="w-4 h-4 text-sky-400" />
            <span className="hidden lg:inline">🖨️ Print Sheets</span>
          </button>
        )}

        {/* 4. AR CAMERA */}
        {onOpenArModal && (
          <button
            onClick={() => {
              playBoingSound();
              onOpenArModal();
            }}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            title="Launch AR camera viewer"
          >
            <Smartphone className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="hidden xl:inline">📱 Live AR</span>
          </button>
        )}

        {/* HELP GUIDE */}
        <button
          onClick={() => {
            playPopSound();
            onOpenHelp();
          }}
          title="Color & Scan Guide"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/50"
        >
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </header>
  );
};
