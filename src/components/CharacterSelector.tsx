import React from 'react';
import {
  CharacterModelConfig,
  CharacterType,
  CharacterProp,
} from '../types';
import { Palette, Bot, Sparkles, Wand, Shield, Sun } from 'lucide-react';
import { playBoingSound, playPopSound } from '../utils/soundEffects';

interface CharacterSelectorProps {
  character: CharacterModelConfig;
  onUpdateCharacter: (config: CharacterModelConfig) => void;
  onOpenDrawModal?: () => void;
}

const HERO_TYPES: { type: CharacterType; name: string; emoji: string; desc: string }[] = [
  { type: 'robot', name: 'Sparky Mecha', emoji: '🤖', desc: 'Shiny cartoon robot with chest badge' },
  { type: 'monster', name: 'Bouncing Beast', emoji: '👾', desc: 'Friendly alien monster' },
  { type: 'astronaut', name: 'Cosmic Kid', emoji: '👩‍🚀', desc: 'Space explorer in heavy suit' },
  { type: 'dino', name: 'Roaring Dino', emoji: '🦖', desc: 'Prehistoric green friend' },
  { type: 'panda', name: 'Kung-Fu Panda', emoji: '🐼', desc: 'Cute round martial artist' },
  { type: 'blocky', name: 'Craft Blocky', emoji: '🧱', desc: 'Voxel block builder' },
  { type: 'doodle', name: 'My Hand Drawing', emoji: '🎨', desc: 'Kid hand-drawn custom 3D hero' },
];

const PROPS_LIST: { type: CharacterProp['type']; name: string; emoji: string }[] = [
  { type: 'none', name: 'No Prop', emoji: '🚫' },
  { type: 'wand', name: 'Magic Wand', emoji: '🪄' },
  { type: 'star', name: 'Shining Star', emoji: '⭐' },
  { type: 'balloon', name: 'Party Balloon', emoji: '🎈' },
  { type: 'shield', name: 'Hero Shield', emoji: '🛡️' },
];

export const CharacterSelector: React.FC<CharacterSelectorProps> = ({
  character,
  onUpdateCharacter,
  onOpenDrawModal,
}) => {
  const handleSelectHero = (heroType: CharacterType, name: string) => {
    if (heroType === 'doodle' && onOpenDrawModal) {
      onOpenDrawModal();
      return;
    }
    playBoingSound();
    onUpdateCharacter({
      ...character,
      type: heroType,
      name,
    });
  };

  const handleUpdateColors = (key: keyof CharacterModelConfig['colors'], hex: string) => {
    onUpdateCharacter({
      ...character,
      colors: {
        ...character.colors,
        [key]: hex,
      },
    });
  };

  const handleSelectProp = (propType: CharacterProp['type'], propName: string) => {
    playPopSound();
    onUpdateCharacter({
      ...character,
      prop: {
        id: `prop-${Date.now()}`,
        name: propName,
        type: propType,
        color: character.colors.accent || '#facc15',
      },
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 h-full overflow-y-auto scrollbar-thin">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
          <Palette className="w-4 h-4 text-purple-400" /> Hero & Costume Customizer
        </h3>
      </div>

      {/* Featured Draw Hero Canvas Banner */}
      {onOpenDrawModal && (
        <button
          onClick={onOpenDrawModal}
          className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white flex items-center justify-between shadow-xl transition-all active:scale-98 group"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl p-1 bg-white/20 rounded-xl">🎨</span>
            <div className="flex flex-col text-left">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 fill-amber-300" /> Draw Your Own 3D Hero!
              </span>
              <span className="text-[11px] text-white/90">
                Draw anything & watch it come to life in 3D!
              </span>
            </div>
          </div>
          <span className="text-xs bg-white text-slate-950 font-black px-2.5 py-1 rounded-xl shadow group-hover:scale-105 transition-transform">
            Draw!
          </span>
        </button>
      )}

      {/* Hero Selection Grid */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Choose Your 3D Hero:
        </label>
        <div className="grid grid-cols-2 gap-2">
          {HERO_TYPES.map((hero) => {
            const isSelected = character.type === hero.type;
            return (
              <button
                key={hero.type}
                onClick={() => handleSelectHero(hero.type, hero.name)}
                className={`p-3 rounded-2xl border flex flex-col text-left transition-all ${
                  isSelected
                    ? 'bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-600/20 ring-1 ring-purple-400'
                    : 'bg-slate-950 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span className="text-2xl mb-1">{hero.emoji}</span>
                <span className="text-xs font-bold text-white">{hero.name}</span>
                <span className="text-[10px] text-slate-400 truncate">{hero.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Colors */}
      <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex flex-col gap-3">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Outfit & Paint Colors:
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">Primary Body</span>
            <input
              type="color"
              value={character.colors.primary}
              onChange={(e) => handleUpdateColors('primary', e.target.value)}
              className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">Secondary Trim</span>
            <input
              type="color"
              value={character.colors.secondary}
              onChange={(e) => handleUpdateColors('secondary', e.target.value)}
              className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">Accent Glow</span>
            <input
              type="color"
              value={character.colors.glow}
              onChange={(e) => handleUpdateColors('glow', e.target.value)}
              className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800">
            <span className="text-xs font-bold text-slate-300">Joint Balls</span>
            <input
              type="color"
              value={character.colors.joints}
              onChange={(e) => handleUpdateColors('joints', e.target.value)}
              className="w-7 h-7 rounded-lg border-0 bg-transparent cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Holding Prop Options */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Hand Prop Item:
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {PROPS_LIST.map((prop) => {
            const isSelected = character.prop.type === prop.type;
            return (
              <button
                key={prop.type}
                onClick={() => handleSelectProp(prop.type, prop.name)}
                className={`p-2 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                }`}
              >
                <span className="text-lg">{prop.emoji}</span>
                <span className="text-[10px] truncate">{prop.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
