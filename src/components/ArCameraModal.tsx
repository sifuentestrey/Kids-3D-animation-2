import React, { useState } from 'react';
import { X, Camera, Sparkles, RefreshCw, Smartphone, ExternalLink } from 'lucide-react';
import { playBoingSound, playPopSound } from '../utils/soundEffects';

interface ArCameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCreature?: 'dino' | 'robot' | 'unicorn';
}

export const ArCameraModal: React.FC<ArCameraModalProps> = ({
  isOpen,
  onClose,
  initialCreature = 'dino',
}) => {
  const [activeCreature, setActiveCreature] = useState<'dino' | 'robot' | 'unicorn'>(initialCreature);

  if (!isOpen) return null;

  const arHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>3D Kids AR Creature Viewer</title>

  <!-- 1. A-Frame 3D Engine -->
  <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
  
  <!-- 2. AR.js for Web Camera Tracking -->
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

  <!-- 3. Animation Engine for GLB Models -->
  <script src="https://cdn.jsdelivr.net/gh/c-frame/aframe-extras@7.2.0/dist/aframe-extras.min.js"></script>

  <style>
    body {
      margin: 0;
      overflow: hidden;
      font-family: system-ui, -apple-system, sans-serif;
      background-color: #0f172a;
    }

    /* UI Controls Overlay */
    #ui-container {
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      display: flex;
      gap: 10px;
      background: rgba(15, 23, 42, 0.85);
      padding: 10px 16px;
      border-radius: 30px;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    }

    .btn {
      background: #ffffff;
      color: #111111;
      border: none;
      padding: 10px 18px;
      border-radius: 20px;
      font-weight: 800;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .btn:active {
      transform: scale(0.92);
    }

    .btn.active {
      background: linear-gradient(135deg, #6366f1, #a855f7);
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.5);
    }

    #info-banner {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      background: rgba(15, 23, 42, 0.88);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 13px;
      font-weight: 700;
      text-align: center;
      pointer-events: none;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }
  </style>
</head>
<body style="margin: 0px; overflow: hidden;">

  <!-- Top Selection Menu -->
  <div id="ui-container">
    <button id="btn-dino" class="btn ${activeCreature === 'dino' ? 'active' : ''}" onclick="switchCreature('dino')">🦖 Dino</button>
    <button id="btn-robot" class="btn ${activeCreature === 'robot' ? 'active' : ''}" onclick="switchCreature('robot')">🤖 Robot</button>
    <button id="btn-unicorn" class="btn ${activeCreature === 'unicorn' ? 'active' : ''}" onclick="switchCreature('unicorn')">🦄 Unicorn</button>
  </div>

  <div id="info-banner">✨ Allow camera access & point at any surface or Hiro AR Marker!</div>

  <!-- AR Scene -->
  <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">

    <!-- Default Hiro Marker Target -->
    <a-marker preset="hiro">
      
      <!-- 3D Creature Entity -->
      <a-entity 
        id="creature"
        gltf-model="${
          activeCreature === 'dino'
            ? 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf'
            : activeCreature === 'robot'
            ? 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb'
            : 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/Horse.glb'
        }"
        scale="${
          activeCreature === 'dino'
            ? '0.04 0.04 0.04'
            : activeCreature === 'robot'
            ? '0.2 0.2 0.2'
            : '0.003 0.003 0.003'
        }"
        position="0 0 0"
        rotation="${activeCreature === 'dino' ? '-90 0 0' : '0 0 0'}"
        animation-mixer="clip: *; loop: repeat">
      </a-entity>

    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>

  <script>
    // Asset Database
    const creatures = {
      dino: {
        model: 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf',
        scale: '0.04 0.04 0.04',
        rotation: '-90 0 0',
        position: '0 0 0'
      },
      robot: {
        model: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
        scale: '0.2 0.2 0.2',
        rotation: '0 0 0',
        position: '0 0 0'
      },
      unicorn: {
        model: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/Horse.glb',
        scale: '0.003 0.003 0.003',
        rotation: '0 0 0',
        position: '0 0 0'
      }
    };

    function switchCreature(type) {
      const entity = document.getElementById('creature');
      const data = creatures[type];
      if (!entity || !data) return;

      // Update 3D entity attributes
      entity.setAttribute('gltf-model', data.model);
      entity.setAttribute('scale', data.scale);
      entity.setAttribute('rotation', data.rotation);
      entity.setAttribute('position', data.position);

      // Update button styling
      document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById('btn-' + type);
      if (activeBtn) activeBtn.classList.add('active');
    }
  </script>
</body>
</html>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[88vh] bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <span>3D Kids AR Creature Camera</span>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Web-AR Live
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Point camera at paper or Hiro marker to bring 3D models into real life!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playPopSound();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Web AR Camera Viewport */}
        <div className="relative flex-1 bg-slate-950 overflow-hidden">
          <iframe
            title="AR Creature Viewer"
            srcDoc={arHtmlContent}
            className="w-full h-full border-0"
            allow="camera; microphone; accelerometer; magnetometer; gyroscope; autoplay"
          />
        </div>

        {/* Footer Guidance */}
        <div className="p-3 bg-slate-900/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>Select Dino 🦖, Robot 🤖, or Unicorn 🦄 above to test 3D models live in camera view!</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Smartphone className="w-4 h-4" />
            <span>Works on phone & desktop webcams</span>
          </div>
        </div>
      </div>
    </div>
  );
};
