import React from 'react';
import { BoneId, CharacterPose, Vector3D } from '../types';
import { PRESET_POSES } from '../constants/animationDefaults';
import { RotateCcw, Sparkles, User, Sliders } from 'lucide-react';
import { playBoingSound, playPopSound } from '../utils/soundEffects';

interface PosingControlsProps {
  currentPose: CharacterPose;
  selectedBone: BoneId;
  onSelectBone: (bone: BoneId) => void;
  onUpdateBoneTransform: (
    bone: BoneId,
    rotation: Vector3D,
    position?: Vector3D
  ) => void;
  onApplyPresetPose: (pose: CharacterPose) => void;
  onResetPose: () => void;
}

const BONES_LIST: { id: BoneId; label: string; icon: string }[] = [
  { id: 'head', label: 'Head 😃', icon: 'Smile' },
  { id: 'body', label: 'Body Torso 👕', icon: 'User' },
  { id: 'leftArm', label: 'Left Arm 🖐️', icon: 'Hand' },
  { id: 'rightArm', label: 'Right Arm ✋', icon: 'Hand' },
  { id: 'leftLeg', label: 'Left Leg 🦵', icon: 'Foot' },
  { id: 'rightLeg', label: 'Right Leg 🦵', icon: 'Foot' },
] as any;

export const PosingControls: React.FC<PosingControlsProps> = ({
  currentPose,
  selectedBone,
  onSelectBone,
  onUpdateBoneTransform,
  onApplyPresetPose,
  onResetPose,
}) => {
  const currentTransform = currentPose[selectedBone] || {
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
  };

  const handleSliderChange = (axis: 'x' | 'y' | 'z', value: number) => {
    const newRot = { ...currentTransform.rotation, [axis]: value };
    onUpdateBoneTransform(selectedBone, newRot, currentTransform.position);
  };

  const handlePositionChange = (axis: 'x' | 'y' | 'z', value: number) => {
    const currentPos = currentTransform.position || { x: 0, y: 0, z: 0 };
    const newPos = { ...currentPos, [axis]: value };
    onUpdateBoneTransform(selectedBone, currentTransform.rotation, newPos);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin">
      {/* Title */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
          <Sliders className="w-4 h-4 text-purple-400" /> Pose Joint Studio
        </h3>

        <button
          onClick={() => {
            playBoingSound();
            onResetPose();
          }}
          className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset Pose
        </button>
      </div>

      {/* Joint Selection Chips */}
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Select Body Joint:
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {BONES_LIST.map((b) => {
            const isSelected = selectedBone === b.id;
            return (
              <button
                key={b.id}
                onClick={() => {
                  playPopSound();
                  onSelectBone(b.id);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                <span>{b.label}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rotation Sliders */}
      <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-purple-300 capitalize">
            {selectedBone} Rotation Angles
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Degrees (-180° to 180°)</span>
        </div>

        {/* Pitch (X) */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-rose-400">Pitch (Forward / Back)</span>
            <span className="font-mono text-slate-300">
              {Math.round(currentTransform.rotation.x)}°
            </span>
          </div>
          <input
            type="range"
            min={-180}
            max={180}
            value={currentTransform.rotation.x}
            onChange={(e) => handleSliderChange('x', parseFloat(e.target.value))}
            className="w-full accent-rose-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Yaw (Y) */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-emerald-400">Yaw (Twist Left / Right)</span>
            <span className="font-mono text-slate-300">
              {Math.round(currentTransform.rotation.y)}°
            </span>
          </div>
          <input
            type="range"
            min={-180}
            max={180}
            value={currentTransform.rotation.y}
            onChange={(e) => handleSliderChange('y', parseFloat(e.target.value))}
            className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Roll (Z) */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-sky-400">Roll (Side Tilt)</span>
            <span className="font-mono text-slate-300">
              {Math.round(currentTransform.rotation.z)}°
            </span>
          </div>
          <input
            type="range"
            min={-180}
            max={180}
            value={currentTransform.rotation.z}
            onChange={(e) => handleSliderChange('z', parseFloat(e.target.value))}
            className="w-full accent-sky-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Body Vertical Position (Height Bounce) if Body is selected */}
        {selectedBone === 'body' && (
          <div className="flex flex-col gap-1 pt-2 border-t border-slate-800">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-amber-400">Bounce Height (Y-Pos)</span>
              <span className="font-mono text-slate-300">
                {(currentTransform.position?.y || 0).toFixed(2)}m
              </span>
            </div>
            <input
              type="range"
              min={-0.5}
              max={1.5}
              step={0.05}
              value={currentTransform.position?.y || 0}
              onChange={(e) => handlePositionChange('y', parseFloat(e.target.value))}
              className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* Preset Pose Quick Buttons */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Instant Pose Presets:
        </label>
        <div className="grid grid-cols-2 gap-2">
          {PRESET_POSES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                playBoingSound();
                onApplyPresetPose(preset.pose);
              }}
              className="px-3 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-bold text-left transition-colors flex items-center justify-between group"
            >
              <span>{preset.name}</span>
              <span className="text-amber-400 group-hover:scale-125 transition-transform">
                ✨
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
