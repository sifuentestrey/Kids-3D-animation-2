import React, { useState } from 'react';
import { Music, Volume2, VolumeX, Sparkles, Disc } from 'lucide-react';
import {
  playBoingSound,
  playPopSound,
  playStepSound,
  playFanfareSound,
  toggleBackgroundMusic,
} from '../utils/soundEffects';

export const AudioPanel: React.FC = () => {
  const [musicOn, setMusicOn] = useState(false);

  const handleToggleMusic = () => {
    const nextState = !musicOn;
    setMusicOn(nextState);
    toggleBackgroundMusic(nextState);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
          <Music className="w-4 h-4 text-pink-400" /> Sound Effects & Background Beat
        </h3>
      </div>

      {/* Cartoon Sound Effects */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Instant Sound FX Buttons:
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={playBoingSound}
            className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-amber-300 transition-colors"
          >
            <span className="text-xl">🏀</span> Cartoon Boing
          </button>

          <button
            onClick={playPopSound}
            className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-sky-300 transition-colors"
          >
            <span className="text-xl">🎈</span> Bubble Pop
          </button>

          <button
            onClick={playStepSound}
            className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-emerald-300 transition-colors"
          >
            <span className="text-xl">👣</span> March Step
          </button>

          <button
            onClick={playFanfareSound}
            className="p-3 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left flex items-center gap-2.5 text-xs font-bold text-purple-300 transition-colors"
          >
            <span className="text-xl">🎺</span> Victory Fanfare
          </button>
        </div>
      </div>

      {/* Background Cartoon Rhythm Track */}
      <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white flex items-center gap-2">
            <Disc className={`w-4 h-4 text-pink-400 ${musicOn ? 'animate-spin' : ''}`} />
            Background Cartoon Beat
          </span>

          <button
            onClick={handleToggleMusic}
            className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all ${
              musicOn
                ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {musicOn ? (
              <>
                <Volume2 className="w-4 h-4" /> Playing
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" /> Muted
              </>
            )}
          </button>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Play cheerful 8-bit synthesizer loops in the background while animating your 3D Kids Land movie!
        </p>
      </div>
    </div>
  );
};
