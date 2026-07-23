import React from 'react';
import {
  WorldCreature,
  BehaviorMode,
  PlaygroundToy,
  ToyType,
} from '../types';
import {
  Gamepad2,
  Navigation,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Zap,
  Sparkles,
  Plus,
  Trash2,
  CircleDot,
  Radio,
  SlidersHorizontal,
  Volume2,
} from 'lucide-react';
import {
  playBoingSound,
  playPopSound,
  playStepSound,
  playFanfareSound,
} from '../utils/soundEffects';

interface PlaygroundControlsProps {
  creatures: WorldCreature[];
  activeCreatureId: string | null;
  toys?: PlaygroundToy[];
  onSelectCreature?: (id: string | null) => void;
  onSelectActiveCreature?: (id: string) => void;
  onUpdateBehavior?: (id: string, behavior: BehaviorMode) => void;
  onUpdateCreatureBehavior?: (id: string, behavior: BehaviorMode) => void;
  onDeleteCreature?: (id: string) => void;
  onRemoveCreature?: (id: string) => void;
  onMoveCreature?: (dx: number, dz: number) => void;
  onJumpCreature?: () => void;
  onAddToy?: (type: ToyType) => void;
  onRemoveToy?: (id: string) => void;
  onOpenUploadModal?: () => void;
  onOpenDrawModal?: () => void;
}

const BEHAVIORS: { id: BehaviorMode; label: string; emoji: string }[] = [
  { id: 'wander', label: 'Wild Explorer', emoji: '🌿' },
  { id: 'bounce', label: 'Happy Bouncer', emoji: '🎈' },
  { id: 'dance', label: 'Silly Dancer', emoji: '💃' },
  { id: 'crazy', label: 'Crazy Jumper', emoji: '⚡' },
  { id: 'sleep', label: 'Sleep & Snore', emoji: '😴' },
  { id: 'manual', label: 'Kid Control (Drive)', emoji: '🎮' },
];

const TOY_PRESETS: { type: ToyType; name: string; emoji: string; color: string }[] = [
  { type: 'trampoline', name: 'Trampoline', emoji: '🎪', color: '#a855f7' },
  { type: 'beachball', name: 'Beachball', emoji: '⚽', color: '#ef4444' },
  { type: 'candy_tree', name: 'Candy Tree', emoji: '🍭', color: '#22c55e' },
  { type: 'treat_apple', name: 'Snack Apple', emoji: '🍎', color: '#f97316' },
  { type: 'magic_portal', name: 'Magic Portal', emoji: '⭐', color: '#06b6d4' },
];

export const PlaygroundControls: React.FC<PlaygroundControlsProps> = ({
  creatures,
  activeCreatureId,
  toys = [],
  onSelectCreature,
  onSelectActiveCreature,
  onUpdateBehavior,
  onUpdateCreatureBehavior,
  onDeleteCreature,
  onRemoveCreature,
  onMoveCreature,
  onJumpCreature,
  onAddToy,
  onRemoveToy,
  onOpenUploadModal,
  onOpenDrawModal,
}) => {
  const activeCreature = creatures.find((c) => c.id === activeCreatureId) || creatures[0];

  const selectCreature = (id: string) => {
    if (onSelectCreature) onSelectCreature(id);
    if (onSelectActiveCreature) onSelectActiveCreature(id);
  };

  const updateBehavior = (id: string, behavior: BehaviorMode) => {
    if (onUpdateBehavior) onUpdateBehavior(id, behavior);
    if (onUpdateCreatureBehavior) onUpdateCreatureBehavior(id, behavior);
  };

  const removeCreature = (id: string) => {
    if (onDeleteCreature) onDeleteCreature(id);
    if (onRemoveCreature) onRemoveCreature(id);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin">
      {/* Living Creatures Management */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-amber-400 animate-pulse" /> Living Paper Friends ({creatures.length}):
          </label>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onOpenUploadModal?.()}
              className="px-2 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] rounded-lg shadow transition-transform active:scale-95 flex items-center gap-1"
            >
              <Plus className="w-3 h-3" /> Photo Upload
            </button>
            <button
              onClick={() => onOpenDrawModal?.()}
              className="px-2 py-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-[10px] rounded-lg shadow transition-transform active:scale-95 flex items-center gap-1"
            >
              🎨 Draw
            </button>
          </div>
        </div>

        {creatures.length === 0 ? (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center flex flex-col gap-2">
            <p className="text-xs text-slate-400">No paper drawings in the 3D world yet!</p>
            <button
              onClick={() => onOpenUploadModal?.()}
              className="py-2 bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow"
            >
              📷 Upload Photo of Paper Drawing Now!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {creatures.map((c) => {
              const isSelected = c.id === activeCreature?.id;
              return (
                <div
                  key={c.id}
                  onClick={() => selectCreature(c.id)}
                  className={`p-2.5 rounded-2xl border flex items-center gap-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50 shadow-lg'
                      : 'bg-slate-950 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <img
                    src={c.drawingDataUrl}
                    alt={c.name}
                    className="w-9 h-9 object-contain bg-slate-900 rounded-lg p-0.5 border border-slate-800"
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-xs font-bold text-white truncate">{c.name}</span>
                    <span className="text-[10px] text-amber-300 font-mono capitalize truncate">
                      {c.behavior}
                    </span>
                  </div>
                  {creatures.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCreature(c.id);
                      }}
                      className="p-1 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-800"
                      title="Remove from world"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {activeCreature && (
        <>
          {/* Autonomous Behavior Picker */}
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Behavior Mode for {activeCreature.name}:</span>
              <span className="text-amber-400 font-mono text-[10px]">{activeCreature.behavior}</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {BEHAVIORS.map((b) => {
                const isCurrent = activeCreature.behavior === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => {
                      playBoingSound();
                      updateBehavior(activeCreature.id, b.id);
                    }}
                    className={`p-2 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all ${
                      isCurrent
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-base">{b.emoji}</span>
                    <span className="truncate">{b.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Kid D-Pad Driving Controls */}
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col items-center gap-3">
            <label className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 w-full justify-between">
              <span className="flex items-center gap-1">
                <Gamepad2 className="w-4 h-4 text-emerald-400" /> Direct Drive & Jump:
              </span>
              <span className="text-[10px] text-slate-500 font-normal">WASD / Arrow Keys</span>
            </label>

            <div className="grid grid-cols-3 gap-2 w-36 aspect-square items-center justify-center">
              <div />
              <button
                onClick={() => {
                  playStepSound();
                  if (onMoveCreature) onMoveCreature(0, -0.6);
                }}
                className="p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center"
                title="Walk Forward (W / Up)"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
              <div />

              <button
                onClick={() => {
                  playStepSound();
                  if (onMoveCreature) onMoveCreature(-0.6, 0);
                }}
                className="p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center"
                title="Walk Left (A / Left)"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  playBoingSound();
                  if (onJumpCreature) onJumpCreature();
                }}
                className="p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-black shadow-lg shadow-amber-500/20 active:scale-90 transition-all flex flex-col items-center justify-center text-[10px]"
                title="BOING JUMP!"
              >
                🦘 JUMP
              </button>

              <button
                onClick={() => {
                  playStepSound();
                  if (onMoveCreature) onMoveCreature(0.6, 0);
                }}
                className="p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center"
                title="Walk Right (D / Right)"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              <div />
              <button
                onClick={() => {
                  playStepSound();
                  if (onMoveCreature) onMoveCreature(0, 0.6);
                }}
                className="p-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white rounded-xl border border-slate-700 font-bold active:scale-90 transition-all flex items-center justify-center"
                title="Walk Back (S / Down)"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
              <div />
            </div>
          </div>
        </>
      )}

      {/* Spawn Interactive Playground Toys */}
      <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-purple-400" /> Spawn Playground Toys:
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {TOY_PRESETS.map((toy) => (
            <button
              key={toy.type}
              onClick={() => {
                playPopSound();
                if (onAddToy) onAddToy(toy.type);
              }}
              className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-200 flex flex-col items-center gap-1 transition-all active:scale-95"
            >
              <span className="text-xl">{toy.emoji}</span>
              <span className="text-[10px] truncate">{toy.name}</span>
            </button>
          ))}
        </div>

        {toys.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
            <span className="text-[10px] font-bold text-slate-500 w-full">Active Toys in World:</span>
            {toys.map((t) => (
              <span
                key={t.id}
                onClick={() => {
                  if (onRemoveToy) onRemoveToy(t.id);
                }}
                className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300 flex items-center gap-1 cursor-pointer hover:border-rose-500/50 hover:text-rose-400"
                title="Click to remove toy"
              >
                {t.name || t.type} <Trash2 className="w-3 h-3" />
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
