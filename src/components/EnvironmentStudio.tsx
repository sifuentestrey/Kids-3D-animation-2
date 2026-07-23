import React from 'react';
import { EnvironmentConfig, EnvironmentTheme } from '../types';
import { Tv, Sparkles, Trees, Sun, Camera } from 'lucide-react';
import { playBoingSound } from '../utils/soundEffects';

interface EnvironmentStudioProps {
  environment: EnvironmentConfig;
  onUpdateEnvironment: (env: EnvironmentConfig) => void;
}

const THEMES: { theme: EnvironmentTheme; name: string; emoji: string; desc: string }[] = [
  { theme: 'kidsland', name: '3D Kids Land 🌈', emoji: '🏰', desc: 'Rainbows, puffy clouds, candy trees & sun' },
  { theme: 'candyland', name: 'Sweet Candyland 🍭', emoji: '🍩', desc: 'Lollipops, pink skies & cotton candy' },
  { theme: 'toybox', name: 'Sunny Toy Box 🧸', emoji: '🎁', desc: 'Primary colors & stacked building blocks' },
  { theme: 'fairytale', name: 'Fairytale Kingdom 👑', emoji: '🦄', desc: 'Enchanted lavender castle grounds' },
  { theme: 'space', name: 'Galaxy Outer Space 🚀', emoji: '🪐', desc: 'Deep cosmic sky with glowing planets' },
  { theme: 'beach', name: 'Sunny Island Beach 🏝️', emoji: '🌊', desc: 'Golden sand & azure ocean breeze' },
  { theme: 'neon', name: 'Cyber Neon Stage ⚡', emoji: '🌌', desc: 'Futuristic glowing neon stage' },
];

const CAMERA_PRESETS: { id: EnvironmentConfig['cameraPreset']; label: string }[] = [
  { id: 'perspective', label: 'Perspective (Standard)' },
  { id: 'front', label: 'Front Director View' },
  { id: 'side', label: 'Side Angle View' },
  { id: 'top', label: 'Top Overhead View' },
  { id: 'cinematic', label: 'Close-up Hero Shot' },
];

export const EnvironmentStudio: React.FC<EnvironmentStudioProps> = ({
  environment,
  onUpdateEnvironment,
}) => {
  const handleSelectTheme = (theme: EnvironmentTheme) => {
    playBoingSound();
    onUpdateEnvironment({
      ...environment,
      theme,
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
          <Trees className="w-4 h-4 text-emerald-400" /> 3D Stage & Kids Land Studio
        </h3>
      </div>

      {/* Stage Themes */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Select World Theme:
        </label>
        <div className="flex flex-col gap-2">
          {THEMES.map((t) => {
            const isSelected = environment.theme === t.theme;
            return (
              <button
                key={t.theme}
                onClick={() => handleSelectTheme(t.theme)}
                className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all ${
                  isSelected
                    ? 'bg-emerald-600/20 border-emerald-500 shadow-lg ring-1 ring-emerald-400 text-white'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className="text-2xl p-2 bg-slate-900 rounded-xl border border-slate-800">
                  {t.emoji}
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{t.name}</span>
                  <span className="text-[10px] text-slate-400">{t.desc}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Camera Presets */}
      <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
          <Camera className="w-3.5 h-3.5 text-amber-400" /> Camera View Angle:
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {CAMERA_PRESETS.map((cam) => {
            const isSelected = environment.cameraPreset === cam.id;
            return (
              <button
                key={cam.id}
                onClick={() =>
                  onUpdateEnvironment({ ...environment, cameraPreset: cam.id })
                }
                className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {cam.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Grid & Effects Toggles */}
      <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-3">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Stage Display Options:
        </label>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">Show Ground Grid</span>
          <input
            type="checkbox"
            checked={environment.showGrid}
            onChange={(e) =>
              onUpdateEnvironment({ ...environment, showGrid: e.target.checked })
            }
            className="w-4 h-4 accent-emerald-500 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">Floating Sparkle Particles</span>
          <input
            type="checkbox"
            checked={environment.particlesEnabled}
            onChange={(e) =>
              onUpdateEnvironment({
                ...environment,
                particlesEnabled: e.target.checked,
              })
            }
            className="w-4 h-4 accent-purple-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
