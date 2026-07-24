import React, { useState } from 'react';
import {
  X,
  Printer,
  Download,
  Palette,
  Camera,
  Sparkles,
  Bot,
  Flame,
  Rocket,
  Smile,
  Heart,
  Check,
  FileText,
  Star,
  Zap,
} from 'lucide-react';
import { playBoingSound, playFanfareSound, playPopSound } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface PrintTemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDigitalTemplate?: (templateId: string) => void;
  onOpenUploadModal?: () => void;
}

export interface PaperTemplate {
  id: string;
  name: string;
  tagline: string;
  category: 'Creatures' | 'Robots' | 'Fantasy' | 'Space' | 'Blank';
  emoji: string;
  color: string;
  badgeBg: string;
  recommendedBehavior: string;
  soundFx: string;
  description: string;
  svgPath: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
}

export const PAPER_TEMPLATES: PaperTemplate[] = [
  {
    id: 'dino',
    name: 'Jumping T-Rex Dino 🦖',
    tagline: 'Draw sharp teeth, scales & big stompy feet!',
    category: 'Creatures',
    emoji: '🦖',
    color: '#10b981',
    badgeBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    recommendedBehavior: 'BOING JUMP & STOMP',
    soundFx: 'boing',
    description: 'Bounces high into the sky and stomps on beachballs in 3D!',
    svgPath: (ctx, w, h) => {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      // Head & snout
      ctx.beginPath();
      ctx.arc(w * 0.45, h * 0.22, w * 0.1, 0, Math.PI * 2);
      ctx.stroke();
      // Snout rectangle
      ctx.strokeRect(w * 0.45, h * 0.17, w * 0.2, h * 0.08);
      // Eye & teeth guidelines
      ctx.beginPath();
      ctx.arc(w * 0.42, h * 0.2, 8, 0, Math.PI * 2);
      ctx.stroke();
      // Body
      ctx.beginPath();
      ctx.ellipse(w * 0.45, h * 0.45, w * 0.18, h * 0.16, 0.2, 0, Math.PI * 2);
      ctx.stroke();
      // Tail
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.48);
      ctx.quadraticCurveTo(w * 0.12, h * 0.55, w * 0.08, h * 0.4);
      ctx.quadraticCurveTo(w * 0.18, h * 0.42, w * 0.32, h * 0.42);
      ctx.stroke();
      // Legs
      ctx.strokeRect(w * 0.38, h * 0.58, w * 0.07, h * 0.18);
      ctx.strokeRect(w * 0.48, h * 0.58, w * 0.07, h * 0.18);
      // Feet
      ctx.strokeRect(w * 0.36, h * 0.74, w * 0.1, h * 0.04);
      ctx.strokeRect(w * 0.46, h * 0.74, w * 0.1, h * 0.04);
      // Tiny arms
      ctx.strokeRect(w * 0.55, h * 0.38, w * 0.08, h * 0.04);
      ctx.setLineDash([]);
    },
  },
  {
    id: 'robot',
    name: 'Dancing Beep Robot 🤖',
    tagline: 'Add mechanical gears, antennas & laser eyes!',
    category: 'Robots',
    emoji: '🤖',
    color: '#3b82f6',
    badgeBg: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    recommendedBehavior: 'ROBOT MARCH DANCE',
    soundFx: 'march',
    description: 'Marches to the beat and dances around candy trees!',
    svgPath: (ctx, w, h) => {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      // Head
      ctx.strokeRect(w * 0.33, h * 0.12, w * 0.34, h * 0.18);
      // Antenna
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.12);
      ctx.lineTo(w * 0.5, h * 0.04);
      ctx.arc(w * 0.5, h * 0.03, 10, 0, Math.PI * 2);
      ctx.stroke();
      // Eyes
      ctx.strokeRect(w * 0.38, h * 0.16, w * 0.08, h * 0.06);
      ctx.strokeRect(w * 0.54, h * 0.16, w * 0.08, h * 0.06);
      // Mouth grid
      ctx.strokeRect(w * 0.4, h * 0.24, w * 0.2, h * 0.03);
      // Torso
      ctx.strokeRect(w * 0.28, h * 0.33, w * 0.44, h * 0.28);
      // Chest buttons
      ctx.beginPath();
      ctx.arc(w * 0.4, h * 0.42, 14, 0, Math.PI * 2);
      ctx.arc(w * 0.5, h * 0.42, 14, 0, Math.PI * 2);
      ctx.arc(w * 0.6, h * 0.42, 14, 0, Math.PI * 2);
      ctx.stroke();
      // Arms
      ctx.strokeRect(w * 0.14, h * 0.36, w * 0.12, h * 0.18);
      ctx.strokeRect(w * 0.74, h * 0.36, w * 0.12, h * 0.18);
      // Legs
      ctx.strokeRect(w * 0.34, h * 0.62, w * 0.12, h * 0.18);
      ctx.strokeRect(w * 0.54, h * 0.62, w * 0.12, h * 0.18);
      ctx.setLineDash([]);
    },
  },
  {
    id: 'unicorn',
    name: 'Sparkle Unicorn / Pegasus 🦄',
    tagline: 'Draw magical wings, a glowing horn & rainbow mane!',
    category: 'Fantasy',
    emoji: '🦄',
    color: '#ec4899',
    badgeBg: 'bg-pink-500/20 text-pink-400 border-pink-500/40',
    recommendedBehavior: 'HIGH SKY SOAR',
    soundFx: 'fanfare',
    description: 'Flies gracefully above the 3D world with magical trails!',
    svgPath: (ctx, w, h) => {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      // Head
      ctx.beginPath();
      ctx.arc(w * 0.6, h * 0.2, w * 0.1, 0, Math.PI * 2);
      ctx.stroke();
      // Horn
      ctx.beginPath();
      ctx.moveTo(w * 0.62, h * 0.11);
      ctx.lineTo(w * 0.7, h * 0.02);
      ctx.lineTo(w * 0.56, h * 0.08);
      ctx.closePath();
      ctx.stroke();
      // Neck & Body
      ctx.beginPath();
      ctx.ellipse(w * 0.45, h * 0.42, w * 0.22, h * 0.15, -0.1, 0, Math.PI * 2);
      ctx.stroke();
      // Wings
      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * 0.3);
      ctx.quadraticCurveTo(w * 0.35, h * 0.1, w * 0.2, h * 0.15);
      ctx.quadraticCurveTo(w * 0.3, h * 0.28, w * 0.4, h * 0.35);
      ctx.stroke();
      // Legs
      ctx.strokeRect(w * 0.3, h * 0.56, w * 0.06, h * 0.22);
      ctx.strokeRect(w * 0.58, h * 0.56, w * 0.06, h * 0.22);
      ctx.setLineDash([]);
    },
  },
  {
    id: 'cat',
    name: 'Giggly Kitten / Pet 🐱',
    tagline: 'Draw furry ears, fluffy tail & silly whiskers!',
    category: 'Creatures',
    emoji: '🐱',
    color: '#f59e0b',
    badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    recommendedBehavior: 'GIGGLE WIGGLE',
    soundFx: 'giggle',
    description: 'Waddles and giggles whenever kids interact with it!',
    svgPath: (ctx, w, h) => {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      // Big Head
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.28, w * 0.2, 0, Math.PI * 2);
      ctx.stroke();
      // Ears
      ctx.beginPath();
      ctx.moveTo(w * 0.34, h * 0.18);
      ctx.lineTo(w * 0.3, h * 0.06);
      ctx.lineTo(w * 0.42, h * 0.12);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w * 0.66, h * 0.18);
      ctx.lineTo(w * 0.7, h * 0.06);
      ctx.lineTo(w * 0.58, h * 0.12);
      ctx.stroke();
      // Body
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.55, w * 0.16, h * 0.18, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Paws
      ctx.strokeRect(w * 0.38, h * 0.7, w * 0.08, h * 0.08);
      ctx.strokeRect(w * 0.54, h * 0.7, w * 0.08, h * 0.08);
      // Tail
      ctx.beginPath();
      ctx.moveTo(w * 0.64, h * 0.58);
      ctx.quadraticCurveTo(w * 0.85, h * 0.5, w * 0.82, h * 0.32);
      ctx.stroke();
      ctx.setLineDash([]);
    },
  },
  {
    id: 'rocket',
    name: 'Space Rocket Explorer 🚀',
    tagline: 'Draw flame thrusters, round window & space commander!',
    category: 'Space',
    emoji: '🚀',
    color: '#a855f7',
    badgeBg: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
    recommendedBehavior: 'ROCKET BOOST LAUNCH',
    soundFx: 'pop',
    description: 'Shoots up into outer space with fire particle trails!',
    svgPath: (ctx, w, h) => {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 8]);
      // Rocket Body cone
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.05);
      ctx.quadraticCurveTo(w * 0.72, h * 0.28, w * 0.68, h * 0.6);
      ctx.lineTo(w * 0.32, h * 0.6);
      ctx.quadraticCurveTo(w * 0.28, h * 0.28, w * 0.5, h * 0.05);
      ctx.stroke();
      // Window
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.3, w * 0.11, 0, Math.PI * 2);
      ctx.stroke();
      // Fins
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.48);
      ctx.lineTo(w * 0.14, h * 0.68);
      ctx.lineTo(w * 0.32, h * 0.6);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w * 0.7, h * 0.48);
      ctx.lineTo(w * 0.86, h * 0.68);
      ctx.lineTo(w * 0.68, h * 0.6);
      ctx.stroke();
      // Flames guide
      ctx.beginPath();
      ctx.moveTo(w * 0.38, h * 0.61);
      ctx.lineTo(w * 0.42, h * 0.78);
      ctx.lineTo(w * 0.5, h * 0.66);
      ctx.lineTo(w * 0.58, h * 0.78);
      ctx.lineTo(w * 0.62, h * 0.61);
      ctx.stroke();
      ctx.setLineDash([]);
    },
  },
  {
    id: 'blank',
    name: 'Blank Magic Photo Frame 🎨',
    tagline: 'Draw ANYTHING! Includes corner targets for perfect photo scanner cutout.',
    category: 'Blank',
    emoji: '🎨',
    color: '#eab308',
    badgeBg: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    recommendedBehavior: 'CUSTOM 3D BEHAVIOR',
    soundFx: 'boing',
    description: 'Best for drawing custom superheroes, dragons, or pets on paper!',
    svgPath: (ctx, w, h) => {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.strokeRect(w * 0.1, h * 0.08, w * 0.8, h * 0.72);

      // Corner targets
      const corners = [
        [w * 0.1, h * 0.08],
        [w * 0.9, h * 0.08],
        [w * 0.1, h * 0.8],
        [w * 0.9, h * 0.8],
      ];
      corners.forEach(([cx, cy]) => {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(cx, cy, 12, 0, Math.PI * 2);
        ctx.fill();
      });

      // Guide text inside canvas
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('✏️ DRAW YOUR HERO INSIDE THIS BOX', w * 0.5, h * 0.44);
    },
  },
];

export const PrintTemplatesModal: React.FC<PrintTemplatesModalProps> = ({
  isOpen,
  onClose,
  onSelectDigitalTemplate,
  onOpenUploadModal,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<PaperTemplate>(PAPER_TEMPLATES[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Creatures', 'Robots', 'Fantasy', 'Space', 'Blank'];

  const filteredTemplates = PAPER_TEMPLATES.filter(
    (t) => activeCategory === 'All' || t.category === activeCategory
  );

  const generatePrintableSheetDataUrl = (template: PaperTemplate): string => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1550; // Standard 8.5x11 aspect ratio
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    // Page Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Decorative Header Banner
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, 140);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('🌈 3D PAPER DRAWING PLAYGROUND', 60, 60);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '24px sans-serif';
    ctx.fillText('Printable Drawing Sheet - Bring Your Art To Life!', 60, 105);

    // Template Name & Instructions
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 36px sans-serif';
    ctx.fillText(template.name, 60, 200);

    ctx.fillStyle = '#475569';
    ctx.font = '22px sans-serif';
    ctx.fillText(`Tip: ${template.tagline}`, 60, 238);

    // Big Drawing Frame
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 6;
    ctx.strokeRect(60, 270, 1080, 950);

    // Alignment Corner Markers
    const corners = [
      [60, 270],
      [1140, 270],
      [60, 1220],
      [1140, 1220],
    ];
    corners.forEach(([cx, cy]) => {
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fill();
    });

    // Render Template Guidelines
    ctx.save();
    ctx.translate(60, 270);
    template.svgPath(ctx, 1080, 950);
    ctx.restore();

    // Footer Info & Kid Name Input Box
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(60, 1240, 1080, 250);
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 1240, 1080, 250);

    // Step by Step Instructions
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('1. COLOR & DRAW YOUR HERO HERE 🖍️', 90, 1290);
    ctx.fillText('2. TAKE A PHOTO WITH YOUR PHONE 📷', 90, 1340);
    ctx.fillText('3. UPLOAD AT 3DPAPER.WORLD TO WATCH IT DANCE! 🚀', 90, 1390);

    // Character Name Box
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.strokeRect(680, 1270, 420, 80);

    ctx.fillStyle = '#64748b';
    ctx.font = 'italic 20px sans-serif';
    ctx.fillText("Hero's Name: ________________", 700, 1318);

    return canvas.toDataURL('image/png');
  };

  const handlePrint = (template: PaperTemplate) => {
    playFanfareSound();
    confetti({ particleCount: 50, spread: 60 });

    const dataUrl = generatePrintableSheetDataUrl(template);
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print the drawing sheet!');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print ${template.name} - 3D Paper Drawing World</title>
          <style>
            @page {
              size: letter;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #fff;
            }
            img {
              width: 100%;
              max-width: 8.5in;
              height: auto;
            }
            @media print {
              body { margin: 0; }
              img { width: 100vw; height: 100vh; object-fit: contain; }
            }
          </style>
        </head>
        <body>
          <img src="${dataUrl}" onload="window.print(); window.close();" />
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleDownload = (template: PaperTemplate) => {
    playPopSound();
    const dataUrl = generatePrintableSheetDataUrl(template);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `3D-Paper-Drawing-Template-${template.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-4 sm:p-6 flex items-center justify-between text-slate-950 shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-950 text-amber-400 rounded-2xl shadow-lg">
              <Printer className="w-7 h-7" />
            </div>
            <div>
              <h2 className="font-display font-black text-xl sm:text-2xl tracking-wide flex items-center gap-2">
                Printable Drawing Templates 🖨️
              </h2>
              <p className="text-slate-950/80 text-xs sm:text-sm font-bold">
                Print out templates for kids to color on paper, or draw them digitally!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playPopSound();
              onClose();
            }}
            className="p-2 bg-slate-950/20 hover:bg-slate-950/40 rounded-full text-slate-950 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playBoingSound();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Grid: Template Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 auto-rows-max">
            {filteredTemplates.map((t) => {
              const isSelected = selectedTemplate.id === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => {
                    playBoingSound();
                    setSelectedTemplate(t);
                  }}
                  className={`p-4 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-800 border-amber-400 ring-2 ring-amber-400/50 shadow-xl scale-[1.02]'
                      : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-3xl">{t.emoji}</span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${t.badgeBg}`}
                    >
                      {t.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-sm">{t.name}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mt-1">{t.tagline}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-amber-300 font-bold">
                    <span>Preset: {t.soundFx.toUpperCase()}</span>
                    <span>3D Ready 🌟</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Template Preview & Action Studio */}
          <div className="md:col-span-5 bg-slate-950 p-5 rounded-3xl border border-slate-800 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`text-xs font-black px-3 py-1 rounded-full border ${selectedTemplate.badgeBg}`}
                >
                  {selectedTemplate.emoji} {selectedTemplate.category} Template
                </span>
                <span className="text-xs text-slate-400 font-semibold">8.5" x 11" Printable</span>
              </div>

              <h3 className="text-xl font-black text-white">{selectedTemplate.name}</h3>
              <p className="text-slate-300 text-xs mt-1">{selectedTemplate.description}</p>

              {/* Live Preview Box */}
              <div className="mt-4 bg-white rounded-2xl p-4 aspect-[8.5/11] max-h-[220px] mx-auto shadow-inner relative flex flex-col justify-between border-2 border-slate-300">
                <div className="text-center text-[10px] font-bold text-slate-900 border-b border-slate-200 pb-1">
                  🌈 3D PAPER PLAYGROUND TEMPLATE
                </div>

                {/* SVG/Canvas Preview Drawing */}
                <div className="flex-1 my-1 relative">
                  <canvas
                    ref={(node) => {
                      if (node) {
                        node.width = 300;
                        node.height = 180;
                        const ctx = node.getContext('2d');
                        if (ctx) {
                          ctx.clearRect(0, 0, 300, 180);
                          selectedTemplate.svgPath(ctx, 300, 180);
                        }
                      }
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="bg-slate-100 p-1 rounded text-[9px] text-slate-700 text-center font-bold">
                  1. Color & Draw 🖍️ ➔ 2. Photo 📷 ➔ 3. 3D Dance 💃
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handlePrint(selectedTemplate)}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Printer className="w-5 h-5" /> PRINT DRAWING SHEET NOW! 🖨️
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleDownload(selectedTemplate)}
                  className="py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-400" /> Save Image
                </button>

                {onSelectDigitalTemplate && (
                  <button
                    onClick={() => {
                      playFanfareSound();
                      onSelectDigitalTemplate(selectedTemplate.id);
                      onClose();
                    }}
                    className="py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                  >
                    <Palette className="w-4 h-4" /> Draw Digitally
                  </button>
                )}
              </div>

              {onOpenUploadModal && (
                <button
                  onClick={() => {
                    playPopSound();
                    onClose();
                    onOpenUploadModal();
                  }}
                  className="mt-1 py-2 text-slate-400 hover:text-amber-300 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" /> Already drew on paper? Upload photo now ➔
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
