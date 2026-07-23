import React, { useState } from 'react';
import { Sparkles, Wand2, X, Loader2, Play } from 'lucide-react';
import { Keyframe, CharacterType, Vector3D } from '../types';
import { PRESET_CLIPS } from '../constants/animationDefaults';
import { playFanfareSound, playBoingSound } from '../utils/soundEffects';

interface AIPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  characterType: CharacterType;
  onApplyAIKeyframes: (keyframes: Keyframe[]) => void;
}

// The server prompt (server.ts) instructs Gemini to return each bone as a
// flat { x, y, z } rotation, not the client's nested BoneTransform shape
// ({ rotation: { x, y, z } }). Normalize defensively — handles the flat
// shape the API is actually told to produce as well as an already-nested
// one — so a well-formed AI response can't crash the pose-apply effect.
const toRotation = (raw: any, fallback: Vector3D): Vector3D => {
  if (!raw || typeof raw !== 'object') return fallback;
  const source = raw.rotation && typeof raw.rotation === 'object' ? raw.rotation : raw;
  return {
    x: typeof source.x === 'number' ? source.x : fallback.x,
    y: typeof source.y === 'number' ? source.y : fallback.y,
    z: typeof source.z === 'number' ? source.z : fallback.z,
  };
};

const SAMPLE_PROMPTS = [
  'Make the character do a hilarious backflip and land in a superhero pose!',
  'Dancing disco fever with arms waving up and down!',
  'Curious alien tilt looking left and right with a big wave',
  'Excited victory jump celebrating with hands in the air',
];

export const AIPromptModal: React.FC<AIPromptModalProps> = ({
  isOpen,
  onClose,
  characterType,
  onApplyAIKeyframes,
}) => {
  const [promptText, setPromptText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!promptText.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/ai/suggest-animation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          characterType,
          availableBones: ['head', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg', 'body'],
        }),
      });

      const json = await response.json();

      if (json.success && json.data && json.data.keyframes) {
        // Map raw response to keyframes
        const formattedKeyframes: Keyframe[] = json.data.keyframes.map(
          (kf: any, idx: number) => ({
            id: `ai-kf-${idx}-${Date.now()}`,
            time: kf.time ?? idx * 0.5,
            label: `AI: ${kf.label || 'Pose ' + (idx + 1)}`,
            pose: {
              body: { rotation: toRotation(kf.pose?.body, { x: 0, y: 0, z: 0 }) },
              head: { rotation: toRotation(kf.pose?.head, { x: 0, y: 0, z: 0 }) },
              leftArm: { rotation: toRotation(kf.pose?.leftArm, { x: 0, y: 0, z: 15 }) },
              rightArm: { rotation: toRotation(kf.pose?.rightArm, { x: 0, y: 0, z: -15 }) },
              leftLeg: { rotation: toRotation(kf.pose?.leftLeg, { x: 0, y: 0, z: 0 }) },
              rightLeg: { rotation: toRotation(kf.pose?.rightLeg, { x: 0, y: 0, z: 0 }) },
              tail: { rotation: { x: 0, y: 0, z: 0 } },
              accessory: { rotation: { x: 0, y: 0, z: 0 } },
            },
          })
        );

        playFanfareSound();
        onApplyAIKeyframes(formattedKeyframes);
        onClose();
      } else {
        // Fallback to random preset clip if API offline
        useFallbackPreset();
      }
    } catch (e) {
      useFallbackPreset();
    } finally {
      setIsLoading(false);
    }
  };

  const useFallbackPreset = () => {
    playBoingSound();
    const randomClip = PRESET_CLIPS[Math.floor(Math.random() * PRESET_CLIPS.length)];
    onApplyAIKeyframes(randomClip.keyframes);
    onClose();
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
          <div className="p-3 bg-purple-500/20 text-purple-400 rounded-2xl border border-purple-500/30">
            <Wand2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">AI Director Assistant 🪄</h3>
            <p className="text-xs text-slate-400">Describe a movement, dance, or flip for your 3D hero!</p>
          </div>
        </div>

        {/* Prompt Input */}
        <div className="flex flex-col gap-2">
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="e.g., Do a funny robot dance with high jumps and hand waves!"
            className="w-full bg-slate-950 text-white rounded-xl p-3 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs h-24 resize-none"
          />

          {/* Prompt Suggestions */}
          <div className="flex flex-col gap-1.5 mt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Or Try One of These Ideas:
            </span>
            <div className="flex flex-col gap-1">
              {SAMPLE_PROMPTS.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => setPromptText(sample)}
                  className="text-left text-[11px] p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800/80 transition-colors truncate"
                >
                  ✨ "{sample}"
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          disabled={isLoading || !promptText.trim()}
          className="w-full py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> AI Generating 3D Keyframes...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" /> Animate Hero with AI Magic
            </>
          )}
        </button>
      </div>
    </div>
  );
};
