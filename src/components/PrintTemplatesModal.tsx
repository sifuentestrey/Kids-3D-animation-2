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
import { TEMPLATE_DEFINITIONS, TemplateDefinition } from '../utils/templateDrawings';

interface PrintTemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDigitalTemplate?: (templateId: string) => void;
  onOpenUploadModal?: () => void;
}

export type PaperTemplate = TemplateDefinition;
export const PAPER_TEMPLATES = TEMPLATE_DEFINITIONS;

export const PrintTemplatesModal: React.FC<PrintTemplatesModalProps> = ({
  isOpen,
  onClose,
  onSelectDigitalTemplate,
  onOpenUploadModal,
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<PaperTemplate>(PAPER_TEMPLATES[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Creatures', 'Robots', 'Fantasy', 'Space', 'Heroes', 'Blank'];

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
    template.drawGuidelines(ctx, 1080, 950);
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
    ctx.fillText('3. UPLOAD TO WATCH IT COME ALIVE IN 3D! 🚀', 90, 1390);

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
                          selectedTemplate.drawGuidelines(ctx, 300, 180);
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
