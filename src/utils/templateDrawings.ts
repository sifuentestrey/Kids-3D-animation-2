/**
 * 3D Printable & Digital Template Drawings Helper
 * Renders standardized kid-friendly template guidelines that map 1:1
 * onto 3D character meshes (head, torso, arms/wings, legs, tail).
 */

export interface TemplateDefinition {
  id: string;
  name: string;
  tagline: string;
  category: 'Creatures' | 'Robots' | 'Fantasy' | 'Space' | 'Heroes' | 'Blank';
  emoji: string;
  color: string;
  badgeBg: string;
  recommendedBehavior: string;
  soundFx: string;
  description: string;
  drawGuidelines: (ctx: CanvasRenderingContext2D, w: number, h: number) => void;
}

export const TEMPLATE_DEFINITIONS: TemplateDefinition[] = [
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
    drawGuidelines: (ctx, w, h) => {
      ctx.save();

      // Background subtle template tint
      ctx.fillStyle = '#f0fdf4';
      ctx.fillRect(0, 0, w, h);

      // Border frame
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      // Section Guides Styling
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#047857';

      // 1. Head & Snout (Top Center)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.fillRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.strokeRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);

      // Eyes & Teeth Guide Outlines
      ctx.beginPath();
      ctx.arc(w * 0.40, h * 0.14, w * 0.05, 0, Math.PI * 2);
      ctx.arc(w * 0.60, h * 0.14, w * 0.05, 0, Math.PI * 2);
      ctx.stroke();

      // Sharp Teeth Zigzag Snout
      ctx.beginPath();
      ctx.moveTo(w * 0.32, h * 0.23);
      for (let x = w * 0.32; x <= w * 0.68; x += w * 0.06) {
        ctx.lineTo(x + w * 0.03, h * 0.27);
        ctx.lineTo(x + w * 0.06, h * 0.23);
      }
      ctx.stroke();

      ctx.fillStyle = '#047857';
      ctx.fillText('1. 🦖 DINO HEAD, EYES & SHARP TEETH', w * 0.5, h * 0.09);

      // 2. Torso / Belly (Middle Center)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.06)';
      ctx.fillRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.strokeRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);

      // Belly Scales guide
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.50, w * 0.18, h * 0.12, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillText('2. 👕 TORSO & BELLY SCALES', w * 0.5, h * 0.38);

      // 3. Tiny Dino Arms (Left & Right Flanks)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
      ctx.fillRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 💪 L. ARM', w * 0.125, h * 0.50);

      ctx.fillRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 💪 R. ARM', w * 0.875, h * 0.50);

      // 4. Stompy Legs & Claws (Bottom Left & Right)
      ctx.fillRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦶 LEFT FOOT', w * 0.365, h * 0.83);

      ctx.fillRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦶 RIGHT FOOT', w * 0.635, h * 0.83);

      // 5. Tail / Spikes (Bottom Left Edge)
      ctx.fillRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.strokeRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.fillText('5. 🐊 TAIL', w * 0.125, h * 0.83);

      ctx.restore();
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
    drawGuidelines: (ctx, w, h) => {
      ctx.save();

      ctx.fillStyle = '#eff6ff';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#1d4ed8';

      // 1. Robot Head (Top Center)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.fillRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.strokeRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);

      // Antenna
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.04);
      ctx.lineTo(w * 0.5, h * 0.01);
      ctx.arc(w * 0.5, h * 0.01, 5, 0, Math.PI * 2);
      ctx.stroke();

      // Screen Eyes
      ctx.strokeRect(w * 0.35, h * 0.13, w * 0.1, h * 0.08);
      ctx.strokeRect(w * 0.55, h * 0.13, w * 0.1, h * 0.08);
      ctx.fillText('1. 🤖 ROBOT HEAD & EYES', w * 0.5, h * 0.08);

      // 2. Chest Torso Console (Middle Center)
      ctx.fillStyle = 'rgba(59, 130, 246, 0.06)';
      ctx.fillRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.strokeRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);

      // Buttons
      ctx.beginPath();
      ctx.arc(w * 0.38, h * 0.50, w * 0.04, 0, Math.PI * 2);
      ctx.arc(w * 0.50, h * 0.50, w * 0.04, 0, Math.PI * 2);
      ctx.arc(w * 0.62, h * 0.50, w * 0.04, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillText('2. ⚙️ CHEST METERS & BUTTONS', w * 0.5, h * 0.38);

      // 3. Pincer Arms
      ctx.fillStyle = 'rgba(59, 130, 246, 0.08)';
      ctx.fillRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🦾 L. ARM', w * 0.125, h * 0.50);

      ctx.fillRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🦾 R. ARM', w * 0.875, h * 0.50);

      // 4. Robot Legs
      ctx.fillRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦶 LEFT LEG', w * 0.365, h * 0.83);

      ctx.fillRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦶 RIGHT LEG', w * 0.635, h * 0.83);

      // 5. Jetpack / Battery (Bottom Left)
      ctx.fillRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.strokeRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.fillText('5. 🔋 JETPACK', w * 0.125, h * 0.83);

      ctx.restore();
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
    drawGuidelines: (ctx, w, h) => {
      ctx.save();

      ctx.fillStyle = '#fdf2f8';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      ctx.strokeStyle = '#db2777';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#be185d';

      // 1. Unicorn Head & Horn (Top Center)
      ctx.fillStyle = 'rgba(236, 72, 153, 0.08)';
      ctx.fillRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.strokeRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);

      // Horn guide
      ctx.beginPath();
      ctx.moveTo(w * 0.46, h * 0.08);
      ctx.lineTo(w * 0.50, h * 0.01);
      ctx.lineTo(w * 0.54, h * 0.08);
      ctx.closePath();
      ctx.stroke();

      ctx.fillText('1. 🦄 UNICORN HORN & EYES', w * 0.5, h * 0.12);

      // 2. Torso (Middle Center)
      ctx.fillStyle = 'rgba(236, 72, 153, 0.06)';
      ctx.fillRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.strokeRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);

      ctx.fillText('2. ✨ MAGICAL BODY', w * 0.5, h * 0.50);

      // 3. Wings (Left & Right)
      ctx.fillStyle = 'rgba(236, 72, 153, 0.08)';
      ctx.fillRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🪽 L. WING', w * 0.125, h * 0.50);

      ctx.fillRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🪽 R. WING', w * 0.875, h * 0.50);

      // 4. Hooves
      ctx.fillRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦄 FRONT HOOVES', w * 0.365, h * 0.83);

      ctx.fillRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦄 BACK HOOVES', w * 0.635, h * 0.83);

      // 5. Rainbow Tail (Bottom Left)
      ctx.fillRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.strokeRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.fillText('5. 🌈 TAIL', w * 0.125, h * 0.83);

      ctx.restore();
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
    drawGuidelines: (ctx, w, h) => {
      ctx.save();

      ctx.fillStyle = '#fffbeb';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#b45309';

      // 1. Head & Ears
      ctx.fillStyle = 'rgba(245, 158, 11, 0.08)';
      ctx.fillRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.strokeRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);

      ctx.fillText('1. 🐱 KITTEN EARS & WHISKERS', w * 0.5, h * 0.09);

      // 2. Torso
      ctx.fillStyle = 'rgba(245, 158, 11, 0.06)';
      ctx.fillRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.strokeRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.fillText('2. 🐾 FLUFFY BELLY', w * 0.5, h * 0.50);

      // 3. Paws
      ctx.fillStyle = 'rgba(245, 158, 11, 0.08)';
      ctx.fillRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🐾 L. PAW', w * 0.125, h * 0.50);

      ctx.fillRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🐾 R. PAW', w * 0.875, h * 0.50);

      // 4. Rear Legs
      ctx.fillRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🐾 LEFT LEG', w * 0.365, h * 0.83);

      ctx.fillRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🐾 RIGHT LEG', w * 0.635, h * 0.83);

      // 5. Tail
      ctx.fillRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.strokeRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.fillText('5. 🐈 TAIL', w * 0.125, h * 0.83);

      ctx.restore();
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
    drawGuidelines: (ctx, w, h) => {
      ctx.save();

      ctx.fillStyle = '#faf5ff';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      ctx.strokeStyle = '#9333ea';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#7e22ce';

      // 1. Rocket Nose Cone & Window
      ctx.fillStyle = 'rgba(168, 85, 247, 0.08)';
      ctx.fillRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.strokeRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.fillText('1. 🚀 NOSE CONE & WINDOW', w * 0.5, h * 0.09);

      // 2. Rocket Hull
      ctx.fillStyle = 'rgba(168, 85, 247, 0.06)';
      ctx.fillRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.strokeRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.fillText('2. 🛸 ROCKET HULL & LOGO', w * 0.5, h * 0.50);

      // 3. Side Booster Wings
      ctx.fillStyle = 'rgba(168, 85, 247, 0.08)';
      ctx.fillRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🪽 L. FIN', w * 0.125, h * 0.50);

      ctx.fillRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 🪽 R. FIN', w * 0.875, h * 0.50);

      // 4. Fire Thrusters
      ctx.fillRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🔥 NOZZLE L', w * 0.365, h * 0.83);

      ctx.fillRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🔥 NOZZLE R', w * 0.635, h * 0.83);

      // 5. Fire Trail
      ctx.fillRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.strokeRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.fillText('5. 💥 FIRE TRAIL', w * 0.125, h * 0.83);

      ctx.restore();
    },
  },
  {
    id: 'blank',
    name: 'Custom Creative Monster / Hero 🎨',
    tagline: 'Draw anything from your imagination!',
    category: 'Blank',
    emoji: '🎨',
    color: '#06b6d4',
    badgeBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
    recommendedBehavior: 'FUN DANCE & HOP',
    soundFx: 'giggle',
    description: 'Freeform blank canvas template for any custom character design.',
    drawGuidelines: (ctx, w, h) => {
      ctx.save();

      ctx.fillStyle = '#f0fdf4';
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 4;
      ctx.strokeRect(6, 6, w - 12, h - 12);

      ctx.strokeStyle = '#0891b2';
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#0e7490';

      // 1. Head Area
      ctx.fillStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.fillRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.strokeRect(w * 0.25, h * 0.04, w * 0.5, h * 0.26);
      ctx.fillText('1. 🎨 HEAD / FACE', w * 0.5, h * 0.16);

      // 2. Body Area
      ctx.fillStyle = 'rgba(6, 182, 212, 0.06)';
      ctx.fillRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.strokeRect(w * 0.25, h * 0.33, w * 0.5, h * 0.33);
      ctx.fillText('2. 👕 BODY / TORSO', w * 0.5, h * 0.50);

      // 3. Arms
      ctx.fillStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.fillRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.03, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 💪 L. ARM', w * 0.125, h * 0.50);

      ctx.fillRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.strokeRect(w * 0.78, h * 0.33, w * 0.19, h * 0.33);
      ctx.fillText('3. 💪 R. ARM', w * 0.875, h * 0.50);

      // 4. Legs
      ctx.fillRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.25, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦶 L. LEG', w * 0.365, h * 0.83);

      ctx.fillRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.strokeRect(w * 0.52, h * 0.69, w * 0.23, h * 0.27);
      ctx.fillText('4. 🦶 R. LEG', w * 0.635, h * 0.83);

      // 5. Tail / Extras
      ctx.fillRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.strokeRect(w * 0.03, h * 0.69, w * 0.19, h * 0.27);
      ctx.fillText('5. ✨ EXTRAS', w * 0.125, h * 0.83);

      ctx.restore();
    },
  },
];
