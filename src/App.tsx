import React, { useState, useEffect, useRef } from 'react';
import {
  BoneId,
  CharacterModelConfig,
  CharacterPose,
  EnvironmentConfig,
  Keyframe,
  ProjectData,
  Vector3D,
  AnimationClip,
  WorldCreature,
  PlaygroundToy,
} from './types';
import {
  DEFAULT_CHARACTER,
  DEFAULT_ENVIRONMENT,
  DEFAULT_POSE,
  PRESET_CLIPS,
} from './constants/animationDefaults';
import { getInterpolatedPose } from './utils/interpolation';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Timeline } from './components/Timeline';
import { PosingControls } from './components/PosingControls';
import { CharacterSelector } from './components/CharacterSelector';
import { EnvironmentStudio } from './components/EnvironmentStudio';
import { AudioPanel } from './components/AudioPanel';
import { Header } from './components/Header';
import { AIPromptModal } from './components/AIPromptModal';
import { ExportModal } from './components/ExportModal';
import { HelpModal } from './components/HelpModal';
import { DrawHeroModal } from './components/DrawHeroModal';
import { UploadPaperModal } from './components/UploadPaperModal';
import { PrintTemplatesModal } from './components/PrintTemplatesModal';
import { PlaygroundControls } from './components/PlaygroundControls';
import { Sliders, Palette, Trees, Music, Sparkles, Gamepad2, Film, Box } from 'lucide-react';
import { playBoingSound, playGiggleSound, playPopSound } from './utils/soundEffects';

export default function App() {
  // Mobile View Navigation State
  const [mobileTab, setMobileTab] = useState<'3d' | 'playground' | 'studio' | 'timeline'>('3d');
  // Project State
  const [projectTitle, setProjectTitle] = useState('My Living Drawing World');
  const [character, setCharacter] = useState<CharacterModelConfig>(DEFAULT_CHARACTER);
  const [environment, setEnvironment] = useState<EnvironmentConfig>(DEFAULT_ENVIRONMENT);

  // Living Paper World State
  const [creatures, setCreatures] = useState<WorldCreature[]>([]);
  const [activeCreatureId, setActiveCreatureId] = useState<string | null>(null);
  const [toys, setToys] = useState<PlaygroundToy[]>([]);

  // Keyframes State
  const [keyframes, setKeyframes] = useState<Keyframe[]>(PRESET_CLIPS[0].keyframes);
  const [selectedKeyframeId, setSelectedKeyframeId] = useState<string | null>(
    PRESET_CLIPS[0].keyframes[0].id
  );

  // Animation Playback Engine State
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(2.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(true);
  const [fps, setFps] = useState(30);
  const [speed, setSpeed] = useState(1.0);

  // Posing & Selection State
  const [selectedBone, setSelectedBone] = useState<BoneId>('body');
  const [currentPose, setCurrentPose] = useState<CharacterPose>(
    PRESET_CLIPS[0].keyframes[0].pose
  );
  const [showOnionSkin, setShowOnionSkin] = useState(false);

  // Active Studio Sidebar Tab
  const [activeTab, setActiveTab] = useState<'pose' | 'character' | 'stage' | 'audio'>('stage');

  // Modals
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isDrawModalOpen, setIsDrawModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [drawingTemplateId, setDrawingTemplateId] = useState<string>('blank');

  // Add Paper Drawing Creature Handler
  const handleAddCreature = (creature: WorldCreature) => {
    setCreatures((prev) => [...prev, creature]);
    setActiveCreatureId(creature.id);
    playGiggleSound();
  };

  const handleUpdateBehavior = (id: string, behavior: WorldCreature['behavior']) => {
    setCreatures((prev) =>
      prev.map((c) => (c.id === id ? { ...c, behavior } : c))
    );
    playPopSound();
  };

  const handleDeleteCreature = (id: string) => {
    setCreatures((prev) => prev.filter((c) => c.id !== id));
    if (activeCreatureId === id) setActiveCreatureId(null);
    playPopSound();
  };

  const handleAddToy = (type: PlaygroundToy['type']) => {
    const names: Record<PlaygroundToy['type'], string> = {
      trampoline: 'Trampoline',
      beachball: 'Beachball',
      candy_tree: 'Candy Tree',
      treat_apple: 'Snack Apple',
      magic_portal: 'Magic Portal',
      bounce_pad: 'Bounce Pad',
    };

    const newToy: PlaygroundToy = {
      id: `toy-${Date.now()}`,
      type,
      name: names[type] || 'Fun Toy',
      position: [(Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 6],
      color: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'][
        Math.floor(Math.random() * 5)
      ],
    };
    setToys((prev) => [...prev, newToy]);
    playBoingSound();
  };

  const handleRemoveToy = (id: string) => {
    setToys((prev) => prev.filter((t) => t.id !== id));
    playPopSound();
  };

  const handleMoveCreature = (dx: number, dz: number) => {
    if (!activeCreatureId) return;
    setCreatures((prev) =>
      prev.map((c) =>
        c.id === activeCreatureId
          ? {
              ...c,
              position: [c.position[0] + dx, c.position[1], c.position[2] + dz],
              rotationY: Math.atan2(dx, dz),
            }
          : c
      )
    );
  };

  const handleJumpCreature = () => {
    if (!activeCreatureId) return;
    playBoingSound();
    setCreatures((prev) =>
      prev.map((c) =>
        c.id === activeCreatureId
          ? {
              ...c,
              behavior: 'crazy',
            }
          : c
      )
    );
  };

  const handleGroundClick = (x: number, z: number) => {
    if (!activeCreatureId) return;
    setCreatures((prev) =>
      prev.map((c) =>
        c.id === activeCreatureId
          ? { ...c, targetPosition: [x, z], behavior: 'wander' }
          : c
      )
    );
    playPopSound();
  };

  const handleCreatureClick = (id: string) => {
    setActiveCreatureId(id);
    playGiggleSound();
  };

  const handleSaveDrawing = (drawingDataUrl: string, heroName: string, templateId?: string) => {
    const tid = templateId || drawingTemplateId || 'blank';
    const newCreature: WorldCreature = {
      id: `screen-draw-${Date.now()}`,
      name: heroName,
      drawingDataUrl,
      position: [(Math.random() - 0.5) * 4, 0, (Math.random() - 0.5) * 4],
      rotationY: Math.random() * Math.PI * 2,
      scale: 1.0,
      depthThickness: 0.15,
      behavior: 'dance',
      personality: 'Playful Screen Hero',
      soundFx: 'giggle',
      isControlled: false,
      heightOffset: 0,
      tiltAngle: 0,
      templateId: tid,
    };
    setCreatures((prev) => [...prev, newCreature]);
    setActiveCreatureId(newCreature.id);
  };

  // Animation Frame Loop Ref
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Recalculate duration whenever keyframes change
  useEffect(() => {
    if (keyframes.length === 0) return;
    const maxKfTime = Math.max(...keyframes.map((k) => k.time));
    setDuration(Math.max(2.0, Math.ceil((maxKfTime + 0.5) * 2) / 2));
  }, [keyframes]);

  // Update current pose based on playback or timeline position
  useEffect(() => {
    if (keyframes.length === 0) return;

    if (isPlaying) {
      const interpolated = getInterpolatedPose(keyframes, currentTime);
      setCurrentPose(interpolated);
    } else {
      const match = keyframes.find((k) => Math.abs(k.time - currentTime) < 0.02);
      if (match) {
        setSelectedKeyframeId(match.id);
        setCurrentPose(match.pose);
      } else {
        const interpolated = getInterpolatedPose(keyframes, currentTime);
        setCurrentPose(interpolated);
      }
    }
  }, [currentTime, keyframes, isPlaying]);

  // Playback Loop Engine
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
      return;
    }

    const tick = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const deltaSeconds = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setCurrentTime((prev) => {
        let nextTime = prev + deltaSeconds * speed;
        if (nextTime >= duration) {
          if (loop) {
            nextTime = 0;
          } else {
            setIsPlaying(false);
            return duration;
          }
        }
        return nextTime;
      });

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, duration, loop, speed]);

  // Calculate Onion Skin Ghost Pose (Previous Keyframe)
  const getGhostPose = (): CharacterPose | null => {
    if (!showOnionSkin || keyframes.length <= 1) return null;
    const sorted = [...keyframes].sort((a, b) => a.time - b.time);

    const prevKf = sorted
      .filter((k) => k.time < currentTime - 0.05)
      .pop();

    return prevKf ? prevKf.pose : sorted[0].pose;
  };

  // Handler: Modify bone transform
  const handleUpdateBoneTransform = (
    bone: BoneId,
    rotation: Vector3D,
    position?: Vector3D
  ) => {
    const updatedPose: CharacterPose = {
      ...currentPose,
      [bone]: {
        rotation,
        position: position || currentPose[bone]?.position,
      },
    };

    setCurrentPose(updatedPose);

    if (selectedKeyframeId) {
      setKeyframes((prev) =>
        prev.map((kf) =>
          kf.id === selectedKeyframeId ? { ...kf, pose: updatedPose } : kf
        )
      );
    }
  };

  // Handler: Apply Preset Pose
  const handleApplyPresetPose = (pose: CharacterPose) => {
    setCurrentPose(pose);
    if (selectedKeyframeId) {
      setKeyframes((prev) =>
        prev.map((kf) =>
          kf.id === selectedKeyframeId ? { ...kf, pose } : kf
        )
      );
    }
  };

  // Handler: Reset Character Pose
  const handleResetPose = () => {
    handleApplyPresetPose(DEFAULT_POSE);
  };

  // Handler: Add Keyframe at Current Time
  const handleAddKeyframe = () => {
    const roundedTime = Math.round(currentTime * 10) / 10;
    const existingIndex = keyframes.findIndex(
      (k) => Math.abs(k.time - roundedTime) < 0.05
    );

    if (existingIndex >= 0) {
      const updated = [...keyframes];
      updated[existingIndex] = {
        ...updated[existingIndex],
        pose: { ...currentPose },
      };
      setKeyframes(updated);
      setSelectedKeyframeId(updated[existingIndex].id);
    } else {
      const newKf: Keyframe = {
        id: `kf-${Date.now()}`,
        time: roundedTime,
        label: `Pose @ ${roundedTime.toFixed(1)}s`,
        pose: { ...currentPose },
      };

      const updated = [...keyframes, newKf].sort((a, b) => a.time - b.time);
      setKeyframes(updated);
      setSelectedKeyframeId(newKf.id);
    }
  };

  // Handler: Delete Keyframe
  const handleDeleteKeyframe = (id: string) => {
    if (keyframes.length <= 1) return;
    const filtered = keyframes.filter((k) => k.id !== id);
    setKeyframes(filtered);
    setSelectedKeyframeId(filtered[0].id);
  };

  // Handler: Copy Keyframe Pose
  const handleCopyKeyframe = (id: string) => {
    const kfToCopy = keyframes.find((k) => k.id === id);
    if (!kfToCopy) return;

    const nextTime = Math.min(duration, kfToCopy.time + 0.5);
    const newKf: Keyframe = {
      id: `kf-${Date.now()}`,
      time: nextTime,
      label: `Copy of ${kfToCopy.label || 'Pose'}`,
      pose: JSON.parse(JSON.stringify(kfToCopy.pose)),
    };

    const updated = [...keyframes, newKf].sort((a, b) => a.time - b.time);
    setKeyframes(updated);
    setSelectedKeyframeId(newKf.id);
    setCurrentTime(nextTime);
  };

  // Handler: Load Preset Animation Clip
  const handleLoadPresetClip = (clip: AnimationClip) => {
    setIsPlaying(false);
    setKeyframes(clip.keyframes);
    setSelectedKeyframeId(clip.keyframes[0].id);
    setCurrentTime(0);
    setCurrentPose(clip.keyframes[0].pose);
  };

  // Handler: Apply AI Generated Keyframes
  const handleApplyAIKeyframes = (aiKeyframes: Keyframe[]) => {
    setIsPlaying(false);
    setKeyframes(aiKeyframes);
    setSelectedKeyframeId(aiKeyframes[0].id);
    setCurrentTime(0);
    setCurrentPose(aiKeyframes[0].pose);
  };

  const projectData: ProjectData = {
    id: 'proj-1',
    title: projectTitle,
    character,
    environment,
    duration,
    fps,
    loop,
    keyframes,
    updatedAt: new Date().toISOString(),
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        projectTitle={projectTitle}
        onUpdateTitle={setProjectTitle}
        onOpenAIModal={() => setIsAIModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenDrawModal={() => {
          setDrawingTemplateId('blank');
          setIsDrawModalOpen(true);
        }}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onLoadPresetClip={handleLoadPresetClip}
        onResetProject={() => handleLoadPresetClip(PRESET_CLIPS[0])}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Mobile Top Navigation Switcher (< md) */}
      <div className="md:hidden flex items-center justify-around bg-slate-900/90 border-b border-slate-800 p-1.5 px-2 gap-1 shrink-0 z-30 shadow-md">
        <button
          onClick={() => {
            playBoingSound();
            setMobileTab('3d');
          }}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${
            mobileTab === '3d'
              ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Box className="w-3.5 h-3.5" /> 3D World
        </button>

        <button
          onClick={() => {
            playBoingSound();
            setMobileTab('playground');
          }}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${
            mobileTab === 'playground'
              ? 'bg-purple-600 text-white shadow-md scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Gamepad2 className="w-3.5 h-3.5" /> Playground
        </button>

        <button
          onClick={() => {
            playBoingSound();
            setMobileTab('studio');
          }}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${
            mobileTab === 'studio'
              ? 'bg-indigo-600 text-white shadow-md scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" /> Studio
        </button>

        <button
          onClick={() => {
            playBoingSound();
            setMobileTab('timeline');
          }}
          className={`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 rounded-xl text-xs font-black transition-all ${
            mobileTab === 'timeline'
              ? 'bg-emerald-600 text-white shadow-md scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Film className="w-3.5 h-3.5" /> Timeline
        </button>
      </div>

      {/* Main Desktop Workspace Grid (>= md) */}
      <div className="hidden md:grid flex-1 grid-cols-12 gap-3 p-3 overflow-hidden relative min-h-0">
        {/* Left Side Studio Panel */}
        <div className="col-span-4 xl:col-span-3 flex flex-col gap-2 h-full overflow-hidden">
          {/* Tab Selection Bar */}
          <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-md">
            <button
              onClick={() => setActiveTab('pose')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'pose'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" /> Pose
            </button>

            <button
              onClick={() => setActiveTab('character')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'character'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" /> Hero
            </button>

            <button
              onClick={() => setActiveTab('stage')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'stage'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trees className="w-3.5 h-3.5" /> Stage
            </button>

            <button
              onClick={() => setActiveTab('audio')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'audio'
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Music className="w-3.5 h-3.5" /> Audio
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'pose' && (
              <PosingControls
                currentPose={currentPose}
                selectedBone={selectedBone}
                onSelectBone={setSelectedBone}
                onUpdateBoneTransform={handleUpdateBoneTransform}
                onApplyPresetPose={handleApplyPresetPose}
                onResetPose={handleResetPose}
              />
            )}

            {activeTab === 'character' && (
              <CharacterSelector
                character={character}
                onUpdateCharacter={setCharacter}
                onOpenDrawModal={() => setIsDrawModalOpen(true)}
              />
            )}

            {activeTab === 'stage' && (
              <EnvironmentStudio
                environment={environment}
                onUpdateEnvironment={setEnvironment}
              />
            )}

            {activeTab === 'audio' && <AudioPanel />}
          </div>
        </div>

        {/* Center 3D Viewport Area */}
        <div className="col-span-8 xl:col-span-9 h-full flex flex-col overflow-hidden relative">
          <ThreeCanvas
            character={character}
            environment={environment}
            currentPose={currentPose}
            ghostPose={getGhostPose()}
            selectedBone={selectedBone}
            onSelectBone={setSelectedBone}
            isPlaying={isPlaying}
            creatures={creatures}
            toys={toys}
            onGroundClick={handleGroundClick}
            onCreatureClick={handleCreatureClick}
          />

          {/* Living Playground Floating Controls Overlay */}
          <PlaygroundControls
            creatures={creatures}
            activeCreatureId={activeCreatureId}
            toys={toys}
            onSelectActiveCreature={setActiveCreatureId}
            onUpdateCreatureBehavior={handleUpdateBehavior}
            onRemoveCreature={handleDeleteCreature}
            onMoveCreature={handleMoveCreature}
            onJumpCreature={handleJumpCreature}
            onAddToy={handleAddToy}
            onRemoveToy={handleRemoveToy}
            onOpenUploadModal={() => setIsUploadModalOpen(true)}
            onOpenDrawModal={() => {
              setDrawingTemplateId('blank');
              setIsDrawModalOpen(true);
            }}
            onOpenPrintModal={() => setIsPrintModalOpen(true)}
          />
        </div>
      </div>

      {/* Main Mobile View Container (< md) */}
      <div className="md:hidden flex-1 overflow-hidden flex flex-col p-2 relative min-h-0">
        {mobileTab === '3d' && (
          <div className="h-full w-full flex flex-col overflow-hidden relative rounded-2xl border border-slate-800">
            <ThreeCanvas
              character={character}
              environment={environment}
              currentPose={currentPose}
              ghostPose={getGhostPose()}
              selectedBone={selectedBone}
              onSelectBone={setSelectedBone}
              isPlaying={isPlaying}
              creatures={creatures}
              toys={toys}
              onGroundClick={handleGroundClick}
              onCreatureClick={handleCreatureClick}
            />

            {/* Living Playground Floating Controls Overlay */}
            <PlaygroundControls
              creatures={creatures}
              activeCreatureId={activeCreatureId}
              toys={toys}
              onSelectActiveCreature={setActiveCreatureId}
              onUpdateCreatureBehavior={handleUpdateBehavior}
              onRemoveCreature={handleDeleteCreature}
              onMoveCreature={handleMoveCreature}
              onJumpCreature={handleJumpCreature}
              onAddToy={handleAddToy}
              onRemoveToy={handleRemoveToy}
              onOpenUploadModal={() => setIsUploadModalOpen(true)}
              onOpenDrawModal={() => {
                setDrawingTemplateId('blank');
                setIsDrawModalOpen(true);
              }}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
            />
          </div>
        )}

        {mobileTab === 'playground' && (
          <div className="h-full w-full overflow-hidden">
            <PlaygroundControls
              creatures={creatures}
              activeCreatureId={activeCreatureId}
              toys={toys}
              onSelectActiveCreature={setActiveCreatureId}
              onUpdateCreatureBehavior={handleUpdateBehavior}
              onRemoveCreature={handleDeleteCreature}
              onMoveCreature={handleMoveCreature}
              onJumpCreature={handleJumpCreature}
              onAddToy={handleAddToy}
              onRemoveToy={handleRemoveToy}
              onOpenUploadModal={() => setIsUploadModalOpen(true)}
              onOpenDrawModal={() => {
                setDrawingTemplateId('blank');
                setIsDrawModalOpen(true);
              }}
              onOpenPrintModal={() => setIsPrintModalOpen(true)}
            />
          </div>
        )}

        {mobileTab === 'studio' && (
          <div className="h-full w-full flex flex-col gap-2 overflow-hidden">
            <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-md shrink-0">
              <button
                onClick={() => setActiveTab('pose')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'pose'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" /> Pose
              </button>

              <button
                onClick={() => setActiveTab('character')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'character'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Palette className="w-3.5 h-3.5" /> Hero
              </button>

              <button
                onClick={() => setActiveTab('stage')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'stage'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Trees className="w-3.5 h-3.5" /> Stage
              </button>

              <button
                onClick={() => setActiveTab('audio')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'audio'
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Music className="w-3.5 h-3.5" /> Audio
              </button>
            </div>

            <div className="flex-1 overflow-hidden">
              {activeTab === 'pose' && (
                <PosingControls
                  currentPose={currentPose}
                  selectedBone={selectedBone}
                  onSelectBone={setSelectedBone}
                  onUpdateBoneTransform={handleUpdateBoneTransform}
                  onApplyPresetPose={handleApplyPresetPose}
                  onResetPose={handleResetPose}
                />
              )}

              {activeTab === 'character' && (
                <CharacterSelector
                  character={character}
                  onUpdateCharacter={setCharacter}
                  onOpenDrawModal={() => setIsDrawModalOpen(true)}
                />
              )}

              {activeTab === 'stage' && (
                <EnvironmentStudio
                  environment={environment}
                  onUpdateEnvironment={setEnvironment}
                />
              )}

              {activeTab === 'audio' && <AudioPanel />}
            </div>
          </div>
        )}

        {mobileTab === 'timeline' && (
          <div className="h-full w-full overflow-y-auto">
            <Timeline
              keyframes={keyframes}
              currentTime={currentTime}
              duration={duration}
              isPlaying={isPlaying}
              loop={loop}
              fps={fps}
              speed={speed}
              showOnionSkin={showOnionSkin}
              selectedKeyframeId={selectedKeyframeId}
              onSeek={(t) => {
                setIsPlaying(false);
                setCurrentTime(t);
              }}
              onTogglePlay={() => setIsPlaying(!isPlaying)}
              onStop={() => {
                setIsPlaying(false);
                setCurrentTime(0);
              }}
              onToggleLoop={() => setLoop(!loop)}
              onToggleOnionSkin={() => setShowOnionSkin(!showOnionSkin)}
              onChangeSpeed={setSpeed}
              onChangeFps={setFps}
              onAddKeyframe={handleAddKeyframe}
              onDeleteKeyframe={handleDeleteKeyframe}
              onSelectKeyframe={(id) => {
                setSelectedKeyframeId(id);
                const kf = keyframes.find((k) => k.id === id);
                if (kf) {
                  setCurrentTime(kf.time);
                  setCurrentPose(kf.pose);
                }
              }}
              onCopyKeyframe={handleCopyKeyframe}
            />
          </div>
        )}
      </div>

      {/* Bottom Keyframe Timeline Panel (Desktop >= md) */}
      <div className="hidden md:block">
        <Timeline
          keyframes={keyframes}
          currentTime={currentTime}
          duration={duration}
          isPlaying={isPlaying}
          loop={loop}
          fps={fps}
          speed={speed}
          showOnionSkin={showOnionSkin}
          selectedKeyframeId={selectedKeyframeId}
          onSeek={(t) => {
            setIsPlaying(false);
            setCurrentTime(t);
          }}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onStop={() => {
            setIsPlaying(false);
            setCurrentTime(0);
          }}
          onToggleLoop={() => setLoop(!loop)}
          onToggleOnionSkin={() => setShowOnionSkin(!showOnionSkin)}
          onChangeSpeed={setSpeed}
          onChangeFps={setFps}
          onAddKeyframe={handleAddKeyframe}
          onDeleteKeyframe={handleDeleteKeyframe}
          onSelectKeyframe={(id) => {
            setSelectedKeyframeId(id);
            const kf = keyframes.find((k) => k.id === id);
            if (kf) {
              setCurrentTime(kf.time);
              setCurrentPose(kf.pose);
            }
          }}
          onCopyKeyframe={handleCopyKeyframe}
        />
      </div>

      {/* Modals */}
      <UploadPaperModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onAddCreatureToWorld={handleAddCreature}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
      />

      <PrintTemplatesModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        onSelectDigitalTemplate={(templateId) => {
          setDrawingTemplateId(templateId);
          setIsDrawModalOpen(true);
        }}
        onOpenUploadModal={() => setIsUploadModalOpen(true)}
      />

      <AIPromptModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
        characterType={character.type}
        onApplyAIKeyframes={handleApplyAIKeyframes}
      />

      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        project={projectData}
      />

      <DrawHeroModal
        isOpen={isDrawModalOpen}
        onClose={() => setIsDrawModalOpen(false)}
        onSaveDrawing={handleSaveDrawing}
        initialTemplateId={drawingTemplateId}
      />

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}
