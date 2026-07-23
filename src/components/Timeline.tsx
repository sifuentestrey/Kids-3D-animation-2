import React from 'react';
import {
  Play,
  Pause,
  Square,
  Repeat,
  Plus,
  Trash2,
  Copy,
  Eye,
  Zap,
} from 'lucide-react';
import { Keyframe } from '../types';
import { playBoingSound, playPopSound } from '../utils/soundEffects';

interface TimelineProps {
  keyframes: Keyframe[];
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  loop: boolean;
  fps: number;
  speed: number;
  showOnionSkin: boolean;
  selectedKeyframeId: string | null;
  onSeek: (time: number) => void;
  onTogglePlay: () => void;
  onStop: () => void;
  onToggleLoop: () => void;
  onToggleOnionSkin: () => void;
  onChangeSpeed: (speed: number) => void;
  onChangeFps: (fps: number) => void;
  onAddKeyframe: () => void;
  onDeleteKeyframe: (id: string) => void;
  onSelectKeyframe: (id: string) => void;
  onCopyKeyframe: (id: string) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  keyframes,
  currentTime,
  duration,
  isPlaying,
  loop,
  fps,
  speed,
  showOnionSkin,
  selectedKeyframeId,
  onSeek,
  onTogglePlay,
  onStop,
  onToggleLoop,
  onToggleOnionSkin,
  onChangeSpeed,
  onChangeFps,
  onAddKeyframe,
  onDeleteKeyframe,
  onSelectKeyframe,
  onCopyKeyframe,
}) => {
  const timePercentage = Math.min(100, (currentTime / duration) * 100);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = Math.round(pct * duration * 10) / 10;
    onSeek(newTime);
  };

  return (
    <div className="bg-slate-900 border-t border-slate-800 p-3 flex flex-col gap-2.5 z-30 shadow-2xl">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          {/* Play / Pause */}
          <button
            onClick={() => {
              playBoingSound();
              onTogglePlay();
            }}
            className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-lg ${
              isPlaying
                ? 'bg-amber-500 text-slate-950 shadow-amber-500/20'
                : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20 scale-105'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-slate-950" /> Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" /> Play Movie
              </>
            )}
          </button>

          {/* Stop */}
          <button
            onClick={onStop}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Stop & Return to Start"
          >
            <Square className="w-4 h-4 fill-slate-300" />
          </button>

          {/* Loop Toggle */}
          <button
            onClick={onToggleLoop}
            className={`p-2 rounded-xl border transition-all text-xs font-bold flex items-center gap-1 ${
              loop
                ? 'bg-purple-600/30 border-purple-500 text-purple-300'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
            title="Loop Playback"
          >
            <Repeat className="w-4 h-4" /> Loop
          </button>

          {/* Onion Skin Ghost Toggle */}
          <button
            onClick={onToggleOnionSkin}
            className={`px-2.5 py-1.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-1 ${
              showOnionSkin
                ? 'bg-sky-600/30 border-sky-500 text-sky-300'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
            title="Show Previous Pose Ghost"
          >
            <Eye className="w-4 h-4" /> Onion Skin
          </button>
        </div>

        {/* Time Counter Display */}
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 font-mono text-xs">
          <span className="text-amber-400 font-bold">{currentTime.toFixed(1)}s</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">{duration.toFixed(1)}s</span>
        </div>

        {/* Keyframe Editing Actions */}
        <div className="flex items-center gap-2">
          {/* Add Keyframe */}
          <button
            onClick={() => {
              playPopSound();
              onAddKeyframe();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" /> + Record Keyframe
          </button>

          {selectedKeyframeId && (
            <>
              {/* Duplicate Keyframe */}
              <button
                onClick={() => onCopyKeyframe(selectedKeyframeId)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Duplicate Selected Pose Keyframe"
              >
                <Copy className="w-4 h-4" />
              </button>

              {/* Delete Keyframe */}
              <button
                onClick={() => onDeleteKeyframe(selectedKeyframeId)}
                disabled={keyframes.length <= 1}
                className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/50 hover:text-rose-400 text-slate-400 transition-colors disabled:opacity-30"
                title="Delete Keyframe"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Speed Selector */}
          <select
            value={speed}
            onChange={(e) => onChangeSpeed(parseFloat(e.target.value))}
            className="bg-slate-800 text-slate-300 font-bold text-xs px-2 py-1.5 rounded-xl border border-slate-700 focus:outline-none"
          >
            <option value={0.5}>0.5x Slow</option>
            <option value={1.0}>1.0x Normal</option>
            <option value={1.5}>1.5x Fast</option>
            <option value={2.0}>2.0x Turbo</option>
          </select>
        </div>
      </div>

      {/* Scrub Bar & Keyframe Markers */}
      <div
        onClick={handleTrackClick}
        className="w-full h-12 bg-slate-950 border border-slate-800 rounded-2xl relative cursor-pointer overflow-hidden flex items-center px-2 shadow-inner group"
      >
        {/* Seconds Ruler Marks */}
        {Array.from({ length: Math.ceil(duration) + 1 }).map((_, sec) => {
          const leftPct = (sec / duration) * 100;
          return (
            <div
              key={sec}
              style={{ left: `${leftPct}%` }}
              className="absolute top-0 bottom-0 border-l border-slate-800/80 flex flex-col justify-between pt-1 pb-1 text-[9px] font-mono text-slate-600 pointer-events-none pl-1"
            >
              <span>{sec}s</span>
            </div>
          );
        })}

        {/* Progress Fill */}
        <div
          style={{ width: `${timePercentage}%` }}
          className="absolute top-0 bottom-0 left-0 bg-purple-600/15 border-r-2 border-amber-400 transition-all duration-75 pointer-events-none"
        />

        {/* Playhead Marker */}
        <div
          style={{ left: `${timePercentage}%` }}
          className="absolute top-0 bottom-0 w-1 bg-amber-400 -translate-x-1/2 shadow-[0_0_12px_rgba(251,191,36,0.8)] z-20 pointer-events-none"
        >
          <div className="w-3 h-3 bg-amber-400 rounded-full -translate-x-1 -mt-1 shadow-md" />
        </div>

        {/* Keyframe Diamond Nodes */}
        {keyframes.map((kf) => {
          const kfPct = (kf.time / duration) * 100;
          const isSelected = kf.id === selectedKeyframeId;

          return (
            <button
              key={kf.id}
              onClick={(e) => {
                e.stopPropagation();
                onSelectKeyframe(kf.id);
              }}
              style={{ left: `${kfPct}%` }}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rotate-45 rounded-sm transition-transform z-10 flex items-center justify-center ${
                isSelected
                  ? 'bg-amber-400 border-2 border-slate-950 scale-125 shadow-lg shadow-amber-400/50'
                  : 'bg-indigo-500 hover:bg-indigo-400 border border-white/40 hover:scale-110'
              }`}
              title={kf.label || `Pose at ${kf.time.toFixed(1)}s`}
            >
              <div className="-rotate-45 text-[8px] font-black text-slate-950">
                ●
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
