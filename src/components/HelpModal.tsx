import React from 'react';
import { X, Film, Sliders, Camera, HelpCircle, Trees } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 flex flex-col gap-5 relative max-h-[90vh] overflow-y-auto scrollbar-thin">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-white">3D Kids Land Director Guide 🎬</h3>
            <p className="text-xs text-slate-400">Animate your hero in 3 easy steps!</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-xs text-slate-300">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex gap-3">
            <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg h-fit">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">1. Pick Hero & Pose Joints</h4>
              <p className="text-slate-400 leading-relaxed">
                Click any colored ball joint on your character or select a body part in the studio panel. Use Pitch, Yaw, and Roll sliders to twist arms, bend legs, and pose your hero!
              </p>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex gap-3">
            <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg h-fit">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">2. Record Timeline Keyframes</h4>
              <p className="text-slate-400 leading-relaxed">
                Click <strong>+ Record Keyframe</strong> to save your pose. Move the timeline playhead, change the pose, and add another keyframe. Hit <strong>Play Movie</strong> to watch smooth cartoon motion!
              </p>
            </div>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex gap-3">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg h-fit">
              <Trees className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-1">3. Customize 3D Kids Land Stage</h4>
              <p className="text-slate-400 leading-relaxed">
                Switch to the <strong>Stage tab</strong> to choose 3D Kids Land with rainbow arches, fluffy sky clouds, candy trees, and smiling sun!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-colors"
        >
          Got It, Let's Animate! 🌈
        </button>
      </div>
    </div>
  );
};
