import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  BoneId,
  CharacterModelConfig,
  CharacterPose,
  EnvironmentConfig,
  Vector3D,
  WorldCreature,
  PlaygroundToy,
} from '../types';
import { playPopSound, playBoingSound } from '../utils/soundEffects';

interface ThreeCanvasProps {
  character: CharacterModelConfig;
  environment: EnvironmentConfig;
  currentPose: CharacterPose;
  ghostPose?: CharacterPose | null;
  selectedBone: BoneId;
  onSelectBone: (bone: BoneId) => void;
  isPlaying: boolean;
  creatures?: WorldCreature[];
  toys?: PlaygroundToy[];
  onGroundClick?: (x: number, z: number) => void;
  onCreatureClick?: (id: string) => void;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  character,
  environment,
  currentPose,
  ghostPose,
  selectedBone,
  onSelectBone,
  isPlaying,
  creatures = [],
  toys = [],
  onGroundClick,
  onCreatureClick,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  // Group references for rigged character mesh parts
  const characterGroupRef = useRef<THREE.Group | null>(null);
  const ghostGroupRef = useRef<THREE.Group | null>(null);
  const envDecorGroupRef = useRef<THREE.Group | null>(null);
  const particlesGroupRef = useRef<THREE.Points | null>(null);

  // World Creatures Group Ref & Mesh Map
  const creaturesGroupRef = useRef<THREE.Group | null>(null);
  const creatureMeshesMapRef = useRef<Map<string, THREE.Group>>(new Map());

  // Playground Toys Group Ref & Mesh Map
  const toysGroupRef = useRef<THREE.Group | null>(null);
  const toyMeshesMapRef = useRef<Map<string, THREE.Group>>(new Map());

  // Raycaster for click interaction
  const raycasterRef = useRef(new THREE.Raycaster());
  const mousePosRef = useRef(new THREE.Vector2());

  // Bone Mesh node map for raycasting & transform updates
  const boneNodesRef = useRef<Map<BoneId, THREE.Group>>(new Map());
  const ghostBoneNodesRef = useRef<Map<BoneId, THREE.Group>>(new Map());

  // Mouse orbit controls state
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ phi: Math.PI / 6, theta: Math.PI / 4, radius: 8 });

  const [hoveredBone, setHoveredBone] = useState<BoneId | null>(null);

  // Helper to convert degrees to radians
  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  // Initialize Three.js Scene, Camera, Renderer
  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 800;
    const height = mountRef.current.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#38bdf8'); // Bright sky blue default

    // Fog for depth in Kids Land
    scene.fog = new THREE.FogExp2('#38bdf8', 0.03);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffaed, 1.3);
    mainLight.position.set(5, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.bias = -0.0005;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xa5f3fc, 0.6);
    fillLight.position.set(-5, 4, -5);
    scene.add(fillLight);

    // Character Base Group
    const charGroup = new THREE.Group();
    scene.add(charGroup);
    characterGroupRef.current = charGroup;

    // Ghost Character Group (for Onion Skinning)
    const ghostGroup = new THREE.Group();
    ghostGroup.visible = false;
    scene.add(ghostGroup);
    ghostGroupRef.current = ghostGroup;

    // Environment Decor Group
    const envGroup = new THREE.Group();
    scene.add(envGroup);
    envDecorGroupRef.current = envGroup;

    // World Creatures Group
    const creaturesGroup = new THREE.Group();
    scene.add(creaturesGroup);
    creaturesGroupRef.current = creaturesGroup;

    // Playground Toys Group
    const toysGroup = new THREE.Group();
    scene.add(toysGroup);
    toysGroupRef.current = toysGroup;

    // Build Environment Decor (3D Kids Land)
    buildKidsLandEnvironment(scene, envGroup, environment);

    // Build Floating Particles
    const particles = buildParticles();
    scene.add(particles);
    particlesGroupRef.current = particles;

    // Render loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating particle animation
      if (particlesGroupRef.current) {
        particlesGroupRef.current.rotation.y += 0.001;
        const positions = particlesGroupRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.002;
        }
        particlesGroupRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Animate Living Paper Creatures
      creatureMeshesMapRef.current.forEach((group, id) => {
        const creatureData = (group as any).userData as WorldCreature;
        if (!creatureData) return;

        const b = creatureData.behavior;

        if (b === 'bounce') {
          group.position.y = Math.abs(Math.sin(elapsedTime * 4)) * 0.8;
          group.rotation.z = Math.sin(elapsedTime * 4) * 0.15;
        } else if (b === 'dance') {
          group.position.y = Math.abs(Math.sin(elapsedTime * 6)) * 0.3;
          group.rotation.z = Math.sin(elapsedTime * 6) * 0.25;
          group.rotation.y += 0.02;
        } else if (b === 'crazy') {
          group.position.y = Math.abs(Math.sin(elapsedTime * 8)) * 1.5;
          group.rotation.y += 0.1;
          group.rotation.z = Math.sin(elapsedTime * 8) * 0.4;
        } else if (b === 'sleep') {
          group.position.y = Math.sin(elapsedTime * 1.5) * 0.05;
          group.rotation.z = 0.3; // lying slightly on side
        } else {
          // Wander or Manual - smooth movement towards target or direct step
          if (creatureData.targetPosition) {
            const [tx, tz] = creatureData.targetPosition;
            const dx = tx - group.position.x;
            const dz = tz - group.position.z;
            const dist = Math.sqrt(dx * dx + dz * dz);

            if (dist > 0.1) {
              const speed = 0.05;
              group.position.x += (dx / dist) * speed;
              group.position.z += (dz / dist) * speed;
              group.rotation.y = Math.atan2(dx, dz);
              group.position.y = Math.abs(Math.sin(elapsedTime * 8)) * 0.25; // waddle bounce
            } else {
              creatureData.targetPosition = undefined;
              group.position.y = 0;
            }
          } else if (b === 'wander') {
            // Pick random target every few seconds
            if (Math.random() < 0.008) {
              creatureData.targetPosition = [
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8,
              ];
            }
          }
        }
      });

      // Render
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Resize Observer
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
    };
  }, []);

  // Update Camera View according to angle ref & preset
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { phi, theta, radius } = cameraAngleRef.current;
    const x = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.cos(theta);

    cameraRef.current.position.set(x, y + 1.2, z);
    cameraRef.current.lookAt(0, 1.2, 0);
  };

  // Preset Camera Handler
  useEffect(() => {
    if (environment.cameraPreset === 'front') {
      cameraAngleRef.current = { phi: Math.PI / 2.2, theta: 0, radius: 7 };
    } else if (environment.cameraPreset === 'side') {
      cameraAngleRef.current = { phi: Math.PI / 2.2, theta: Math.PI / 2, radius: 7 };
    } else if (environment.cameraPreset === 'top') {
      cameraAngleRef.current = { phi: Math.PI / 8, theta: 0, radius: 9 };
    } else if (environment.cameraPreset === 'cinematic') {
      cameraAngleRef.current = { phi: Math.PI / 2.5, theta: Math.PI / 3.5, radius: 5.5 };
    } else {
      cameraAngleRef.current = { phi: Math.PI / 3, theta: Math.PI / 4, radius: 8 };
    }
    updateCameraPosition();
  }, [environment.cameraPreset]);

  // Rebuild / Update Environment Decor when theme changes
  useEffect(() => {
    if (!sceneRef.current || !envDecorGroupRef.current) return;
    buildKidsLandEnvironment(sceneRef.current, envDecorGroupRef.current, environment);
  }, [environment]);

  // Sync World Creatures 3D Meshes
  useEffect(() => {
    if (!creaturesGroupRef.current) return;

    // Remove old meshes no longer in list
    creatureMeshesMapRef.current.forEach((meshGroup, id) => {
      if (!creatures.find((c) => c.id === id)) {
        creaturesGroupRef.current?.remove(meshGroup);
        creatureMeshesMapRef.current.delete(id);
      }
    });

    // Add or update creature meshes
    creatures.forEach((c) => {
      let group = creatureMeshesMapRef.current.get(c.id);
      if (!group) {
        group = buildPaperCutoutMesh(c.drawingDataUrl, c.depthThickness);
        group.position.set(c.position[0], c.position[1], c.position[2]);
        group.rotation.y = c.rotationY;
        group.scale.setScalar(c.scale || 1.0);
        (group as any).userData = c;
        creaturesGroupRef.current?.add(group);
        creatureMeshesMapRef.current.set(c.id, group);
      } else {
        (group as any).userData = c;
        group.position.set(c.position[0], c.position[1], c.position[2]);
        group.rotation.y = c.rotationY;
      }
    });
  }, [creatures]);

  // Sync Playground Toys 3D Meshes
  useEffect(() => {
    if (!toysGroupRef.current) return;

    // Remove old toys
    toyMeshesMapRef.current.forEach((toyGroup, id) => {
      if (!toys.find((t) => t.id === id)) {
        toysGroupRef.current?.remove(toyGroup);
        toyMeshesMapRef.current.delete(id);
      }
    });

    // Add new toys
    toys.forEach((t) => {
      if (!toyMeshesMapRef.current.has(t.id)) {
        const toyMesh = buildToyMesh(t.type, t.color);
        toyMesh.position.set(t.position[0], t.position[1], t.position[2]);
        toysGroupRef.current?.add(toyMesh);
        toyMeshesMapRef.current.set(t.id, toyMesh);
      }
    });
  }, [toys]);

  // Rebuild Character Rig when character configuration changes
  useEffect(() => {
    if (!characterGroupRef.current || !ghostGroupRef.current) return;

    // Build main character
    const { boneMap } = buildRiggedCharacter(characterGroupRef.current, character, false);
    boneNodesRef.current = boneMap;

    // Build ghost character
    const { boneMap: ghostMap } = buildRiggedCharacter(ghostGroupRef.current, character, true);
    ghostBoneNodesRef.current = ghostMap;
  }, [character]);

  // Update Main Character Pose Rotations & Positions
  useEffect(() => {
    if (!boneNodesRef.current) return;

    boneNodesRef.current.forEach((nodeGroup, boneId) => {
      const transform = currentPose[boneId];
      if (transform) {
        nodeGroup.rotation.x = degToRad(transform.rotation.x);
        nodeGroup.rotation.y = degToRad(transform.rotation.y);
        nodeGroup.rotation.z = degToRad(transform.rotation.z);

        if (transform.position) {
          nodeGroup.position.x = transform.position.x;
          nodeGroup.position.y = transform.position.y + (boneId === 'body' ? 1.0 : 0);
          nodeGroup.position.z = transform.position.z;
        }
      }
    });

    // Update Bone Selection Glow / Outline
    boneNodesRef.current.forEach((nodeGroup, boneId) => {
      const handleMesh = nodeGroup.getObjectByName('joint_handle') as THREE.Mesh;
      if (handleMesh) {
        const isSelected = boneId === selectedBone;
        const isHovered = boneId === hoveredBone;
        const mat = handleMesh.material as THREE.MeshStandardMaterial;

        if (isSelected) {
          mat.color.set('#f59e0b'); // Golden selection glow
          mat.emissive.set('#f59e0b');
          mat.emissiveIntensity = 0.8;
          handleMesh.scale.setScalar(1.25);
        } else if (isHovered) {
          mat.color.set('#a855f7');
          mat.emissive.set('#a855f7');
          mat.emissiveIntensity = 0.5;
          handleMesh.scale.setScalar(1.15);
        } else {
          mat.color.set('#64748b');
          mat.emissive.set('#000000');
          mat.emissiveIntensity = 0;
          handleMesh.scale.setScalar(1.0);
        }
      }
    });
  }, [currentPose, selectedBone, hoveredBone]);

  // Update Ghost Pose
  useEffect(() => {
    if (!ghostGroupRef.current || !ghostBoneNodesRef.current) return;

    if (ghostPose) {
      ghostGroupRef.current.visible = true;
      ghostBoneNodesRef.current.forEach((nodeGroup, boneId) => {
        const transform = ghostPose[boneId];
        if (transform) {
          nodeGroup.rotation.x = degToRad(transform.rotation.x);
          nodeGroup.rotation.y = degToRad(transform.rotation.y);
          nodeGroup.rotation.z = degToRad(transform.rotation.z);

          if (transform.position) {
            nodeGroup.position.x = transform.position.x;
            nodeGroup.position.y = transform.position.y + (boneId === 'body' ? 1.0 : 0);
            nodeGroup.position.z = transform.position.z;
          }
        }
      });
    } else {
      ghostGroupRef.current.visible = false;
    }
  }, [ghostPose]);

  // Mouse Orbiting & Bone Raycasting Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMouseRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mountRef.current || !cameraRef.current || !sceneRef.current) return;

    if (isDraggingRef.current) {
      const deltaX = e.clientX - previousMouseRef.current.x;
      const deltaY = e.clientY - previousMouseRef.current.y;
      previousMouseRef.current = { x: e.clientX, y: e.clientY };

      cameraAngleRef.current.theta -= deltaX * 0.008;
      cameraAngleRef.current.phi = Math.max(
        0.1,
        Math.min(Math.PI / 2 - 0.05, cameraAngleRef.current.phi - deltaY * 0.008)
      );

      updateCameraPosition();
      return;
    }

    // Hover raycasting to select bones
    const rect = mountRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), cameraRef.current);

    const handleMeshes: THREE.Mesh[] = [];
    boneNodesRef.current.forEach((group) => {
      const handle = group.getObjectByName('joint_handle') as THREE.Mesh;
      if (handle) handleMeshes.push(handle);
    });

    const intersects = raycaster.intersectObjects(handleMeshes, false);
    if (intersects.length > 0) {
      const hitMesh = intersects[0].object as THREE.Mesh;
      const boneId = hitMesh.userData.boneId as BoneId;
      if (boneId && boneId !== hoveredBone) {
        setHoveredBone(boneId);
      }
    } else if (hoveredBone !== null) {
      setHoveredBone(null);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
    }

    // If mouse didn't drag much, interpret as click to select bone
    if (!mountRef.current || !cameraRef.current) return;
    const rect = mountRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), cameraRef.current);

    const handleMeshes: THREE.Mesh[] = [];
    boneNodesRef.current.forEach((group) => {
      const handle = group.getObjectByName('joint_handle') as THREE.Mesh;
      if (handle) handleMeshes.push(handle);
    });

    const intersects = raycaster.intersectObjects(handleMeshes, false);
    if (intersects.length > 0) {
      const hitMesh = intersects[0].object as THREE.Mesh;
      const boneId = hitMesh.userData.boneId as BoneId;
      if (boneId) {
        playPopSound();
        onSelectBone(boneId);
        return;
      }
    }

    // Creature Click Raycasting
    if (creaturesGroupRef.current && onCreatureClick) {
      const creatureChildren: THREE.Object3D[] = [];
      creatureMeshesMapRef.current.forEach((g) => creatureChildren.push(g));
      const creatureHits = raycaster.intersectObjects(creatureChildren, true);
      if (creatureHits.length > 0) {
        let parentGroup: THREE.Object3D | null = creatureHits[0].object;
        while (parentGroup && !parentGroup.userData?.id) {
          parentGroup = parentGroup.parent;
        }
        if (parentGroup && parentGroup.userData?.id) {
          playBoingSound();
          onCreatureClick(parentGroup.userData.id);
          return;
        }
      }
    }

    // Ground Plane Click Raycasting
    if (onGroundClick) {
      const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const targetVec = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(groundPlane, targetVec)) {
        onGroundClick(targetVec.x, targetVec.z);
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    cameraAngleRef.current.radius = Math.max(
      3.5,
      Math.min(15, cameraAngleRef.current.radius + e.deltaY * 0.005)
    );
    updateCameraPosition();
  };

  return (
    <div
      ref={mountRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      className="w-full h-full relative cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950"
    >
      {/* 3D Viewport Overlay HUD */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
          3D Kids Land Stage
        </span>
        <span className="text-purple-400 font-mono text-[10px] bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800">
          Theme: {environment.theme}
        </span>
      </div>

      {/* Selected Bone Quick Badge */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs shadow-lg">
        <span className="text-slate-400">Selected Joint:</span>
        <span className="font-bold text-amber-300 capitalize">{selectedBone}</span>
      </div>

      {/* Direct Click Guide Tip */}
      <div className="absolute bottom-4 left-4 z-10 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] text-slate-300 pointer-events-none flex items-center gap-2">
        <span>💡 Click any colored ball joint to pose! Drag canvas to rotate camera.</span>
      </div>
    </div>
  );
};

// ============================================================================
// HELPER: BUILD 3D KIDS LAND ENVIRONMENT DECOR & STAGE
// ============================================================================
function buildKidsLandEnvironment(
  scene: THREE.Scene,
  envGroup: THREE.Group,
  config: EnvironmentConfig
) {
  // Clear old decor
  while (envGroup.children.length > 0) {
    envGroup.remove(envGroup.children[0]);
  }

  // Set scene background based on theme
  let skyColor = config.bgColor || '#38bdf8';
  let groundColor = config.groundColor || '#4ade80';
  let gridColor = config.gridColor || '#a855f7';

  if (config.theme === 'kidsland') {
    skyColor = '#38bdf8'; // Vivid sky blue
    groundColor = '#4ade80'; // Lush grassy green
    gridColor = '#a855f7'; // Purple playful grid
  } else if (config.theme === 'candyland') {
    skyColor = '#f472b6'; // Candy pink
    groundColor = '#fbcfe8'; // Strawberry cream ground
    gridColor = '#ec4899';
  } else if (config.theme === 'toybox') {
    skyColor = '#fbbf24'; // Sunny yellow sky
    groundColor = '#3b82f6'; // Bright blue toy floor
    gridColor = '#f97316';
  } else if (config.theme === 'fairytale') {
    skyColor = '#c084fc'; // Enchanted lavender
    groundColor = '#86efac'; // Minty grass
    gridColor = '#d8b4fe';
  } else if (config.theme === 'space') {
    skyColor = '#0f172a';
    groundColor = '#1e1b4b';
    gridColor = '#38bdf8';
  } else if (config.theme === 'beach') {
    skyColor = '#38bdf8';
    groundColor = '#fef08a'; // Sand yellow
    gridColor = '#0284c7';
  } else if (config.theme === 'neon') {
    skyColor = '#09090b';
    groundColor = '#18181b';
    gridColor = '#f43f5e';
  }

  scene.background = new THREE.Color(skyColor);
  if (scene.fog) {
    (scene.fog as THREE.FogExp2).color.set(skyColor);
  }

  // 1. Playground / Kids Land Ground Mesh
  const groundGeo = new THREE.PlaneGeometry(30, 30);
  const groundMat = new THREE.MeshStandardMaterial({
    color: groundColor,
    roughness: 0.6,
    metalness: 0.1,
  });
  const groundMesh = new THREE.Mesh(groundGeo, groundMat);
  groundMesh.rotation.x = -Math.PI / 2;
  groundMesh.receiveShadow = true;
  envGroup.add(groundMesh);

  // Grid Helper
  if (config.showGrid) {
    const gridHelper = new THREE.GridHelper(30, 30, gridColor, gridColor);
    gridHelper.position.y = 0.01;
    (gridHelper.material as THREE.Material).opacity = 0.4;
    (gridHelper.material as THREE.Material).transparent = true;
    envGroup.add(gridHelper);
  }

  // 2. Add Theme-Specific Kids Land 3D Props
  if (config.theme === 'kidsland' || config.theme === 'candyland' || config.theme === 'fairytale' || config.theme === 'playroom' || config.theme === 'toybox') {
    // Rainbow Arch in background
    const rainbowGroup = buildRainbowArch();
    rainbowGroup.position.set(0, 0, -10);
    envGroup.add(rainbowGroup);

    // Fluffy Clouds in Sky
    for (let i = 0; i < 5; i++) {
      const cloud = buildCloud();
      cloud.position.set(
        (i - 2) * 5 + (Math.random() - 0.5) * 2,
        4.5 + Math.random() * 2,
        -7 + Math.random() * 2
      );
      envGroup.add(cloud);
    }

    // Smiling 3D Sun
    const sunGroup = build3DSun();
    sunGroup.position.set(6, 7, -9);
    envGroup.add(sunGroup);

    // Candy / Toy Land Trees
    const treePositions = [
      { x: -5, z: -4, color: '#f43f5e' },
      { x: 5, z: -5, color: '#3b82f6' },
      { x: -6, z: 2, color: '#eab308' },
      { x: 6, z: 1, color: '#a855f7' },
      { x: -4, z: -7, color: '#10b981' },
      { x: 4, z: -8, color: '#ec4899' },
    ];

    treePositions.forEach((pos) => {
      const tree = buildCandyTree(pos.color);
      tree.position.set(pos.x, 0, pos.z);
      envGroup.add(tree);
    });

    // Giant Lollipops
    const lollipops = [
      { x: -3, z: -3, c1: '#ef4444', c2: '#ffffff' },
      { x: 3.5, z: -3.5, c1: '#8b5cf6', c2: '#fef08a' },
    ];
    lollipops.forEach((lp) => {
      const pop = buildLollipop(lp.c1, lp.c2);
      pop.position.set(lp.x, 0, lp.z);
      envGroup.add(pop);
    });

    // Stacked Toy Building Blocks (A, B, C)
    const blocksGroup = buildToyBlocks();
    blocksGroup.position.set(-2.5, 0, -2);
    envGroup.add(blocksGroup);

    // Cute Bouncy Mushrooms
    const shrooms = [
      { x: 2.2, z: -2, scale: 0.8 },
      { x: -1.8, z: 2.5, scale: 0.6 },
      { x: 3, z: 2, scale: 0.7 },
    ];
    shrooms.forEach((s) => {
      const shroom = buildMushroom();
      shroom.scale.setScalar(s.scale);
      shroom.position.set(s.x, 0, s.z);
      envGroup.add(shroom);
    });
  } else if (config.theme === 'space') {
    // Space Planets & Asteroids
    for (let i = 0; i < 4; i++) {
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(1 + Math.random(), 16, 16),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(Math.random(), 0.8, 0.5),
          roughness: 0.4,
        })
      );
      planet.position.set((i - 1.5) * 6, 4 + Math.random() * 2, -10);
      envGroup.add(planet);
    }
  }
}

// 3D Decor Helpers
function buildRainbowArch(): THREE.Group {
  const group = new THREE.Group();
  const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];

  colors.forEach((color, i) => {
    const radius = 9 - i * 0.4;
    const tubeGeo = new THREE.TorusGeometry(radius, 0.2, 12, 48, Math.PI);
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.3,
      emissive: color,
      emissiveIntensity: 0.15,
    });
    const arch = new THREE.Mesh(tubeGeo, mat);
    arch.rotation.x = Math.PI / 2;
    group.add(arch);
  });

  return group;
}

function buildCloud(): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9 });

  const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 12, 12), mat);
  const p2 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), mat);
  p2.position.set(0.7, -0.1, 0);
  const p3 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 12), mat);
  p3.position.set(-0.7, -0.1, 0);

  group.add(p1, p2, p3);
  return group;
}

function build3DSun(): THREE.Group {
  const group = new THREE.Group();

  const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 16, 16),
    new THREE.MeshStandardMaterial({
      color: '#facc15',
      emissive: '#facc15',
      emissiveIntensity: 0.5,
    })
  );
  group.add(sunMesh);

  // Sun Rays
  for (let i = 0; i < 8; i++) {
    const ray = new THREE.Mesh(
      new THREE.ConeGeometry(0.2, 0.8, 8),
      new THREE.MeshStandardMaterial({ color: '#fbbf24', emissive: '#fbbf24' })
    );
    const angle = (i / 8) * Math.PI * 2;
    ray.position.set(Math.cos(angle) * 1.6, Math.sin(angle) * 1.6, 0);
    ray.rotation.z = angle - Math.PI / 2;
    group.add(ray);
  }

  return group;
}

function buildCandyTree(colorHex: string): THREE.Group {
  const group = new THREE.Group();

  // Trunk
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.3, 1.2, 8),
    new THREE.MeshStandardMaterial({ color: '#78350f' })
  );
  trunk.position.y = 0.6;
  trunk.castShadow = true;
  group.add(trunk);

  // Candy / Puffy Foliage Top
  const topGeo = new THREE.DodecahedronGeometry(0.9, 1);
  const topMat = new THREE.MeshStandardMaterial({
    color: colorHex,
    roughness: 0.4,
  });
  const topMesh = new THREE.Mesh(topGeo, topMat);
  topMesh.position.y = 1.7;
  topMesh.castShadow = true;
  group.add(topMesh);

  return group;
}

function buildLollipop(c1: string, c2: string): THREE.Group {
  const group = new THREE.Group();

  // Stick
  const stick = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 2.0, 8),
    new THREE.MeshStandardMaterial({ color: '#f8fafc' })
  );
  stick.position.y = 1.0;
  stick.castShadow = true;
  group.add(stick);

  // Spiral Pop Head
  const popHead = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 0.7, 0.2, 24),
    new THREE.MeshStandardMaterial({ color: c1, roughness: 0.2 })
  );
  popHead.rotation.x = Math.PI / 2;
  popHead.position.y = 2.0;
  popHead.castShadow = true;

  // Swirl center accent
  const swirl = new THREE.Mesh(
    new THREE.CylinderGeometry(0.4, 0.4, 0.22, 24),
    new THREE.MeshStandardMaterial({ color: c2, roughness: 0.2 })
  );
  swirl.rotation.x = Math.PI / 2;
  swirl.position.y = 2.0;

  group.add(popHead, swirl);
  return group;
}

function buildToyBlocks(): THREE.Group {
  const group = new THREE.Group();
  const colors = ['#ef4444', '#3b82f6', '#eab308'];

  colors.forEach((col, i) => {
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 })
    );
    box.position.set(0, 0.35 + i * 0.7, 0);
    box.rotation.y = (i * Math.PI) / 6;
    box.castShadow = true;
    group.add(box);
  });

  return group;
}

function buildMushroom(): THREE.Group {
  const group = new THREE.Group();

  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.25, 0.6, 8),
    new THREE.MeshStandardMaterial({ color: '#f1f5f9' })
  );
  stem.position.y = 0.3;
  stem.castShadow = true;

  const cap = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.3 })
  );
  cap.position.y = 0.6;
  cap.castShadow = true;

  group.add(stem, cap);
  return group;
}

function buildParticles(): THREE.Points {
  const particleCount = 80;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const palette = [
    new THREE.Color('#f43f5e'),
    new THREE.Color('#38bdf8'),
    new THREE.Color('#facc15'),
    new THREE.Color('#a855f7'),
    new THREE.Color('#4ade80'),
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = Math.random() * 8 + 0.5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

    const col = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
  });

  return new THREE.Points(geometry, material);
}

// ============================================================================
// HELPER: BUILD RIGGED 3D CHARACTER WITH JOINT HANDLES
// ============================================================================
function buildRiggedCharacter(
  rootGroup: THREE.Group,
  config: CharacterModelConfig,
  isGhost: boolean
) {
  // Clear root
  while (rootGroup.children.length > 0) {
    rootGroup.remove(rootGroup.children[0]);
  }

  const boneMap = new Map<BoneId, THREE.Group>();

  const primaryMat = new THREE.MeshStandardMaterial({
    color: config.colors.primary,
    roughness: 0.3,
    metalness: config.type === 'robot' ? 0.6 : 0.1,
    transparent: isGhost,
    opacity: isGhost ? 0.35 : 1.0,
    wireframe: config.wireframe,
  });

  const secondaryMat = new THREE.MeshStandardMaterial({
    color: config.colors.secondary,
    roughness: 0.3,
    transparent: isGhost,
    opacity: isGhost ? 0.35 : 1.0,
  });

  const accentMat = new THREE.MeshStandardMaterial({
    color: config.colors.accent,
    emissive: config.colors.glow,
    emissiveIntensity: 0.4,
    transparent: isGhost,
    opacity: isGhost ? 0.35 : 1.0,
  });

  const jointMat = new THREE.MeshStandardMaterial({
    color: config.colors.joints,
    roughness: 0.5,
    transparent: isGhost,
    opacity: isGhost ? 0.2 : 1.0,
  });

  // Doodle Texture setup if hand-drawn image exists
  let doodleMat: THREE.Material = primaryMat;
  if (config.type === 'doodle' && config.drawingDataUrl) {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(config.drawingDataUrl);
    tex.colorSpace = THREE.SRGBColorSpace;
    doodleMat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.2,
      side: THREE.DoubleSide,
      transparent: isGhost,
      opacity: isGhost ? 0.35 : 1.0,
    });
  }

  // 1. Body Group (Root Bone Node)
  const bodyGroup = new THREE.Group();
  bodyGroup.position.set(0, 1.0, 0);
  rootGroup.add(bodyGroup);
  boneMap.set('body', bodyGroup);

  // Body Mesh
  let torsoMesh: THREE.Mesh;
  if (config.type === 'doodle') {
    torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.3, 0.15), doodleMat);
  } else if (config.type === 'robot' || config.type === 'blocky') {
    torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.6), primaryMat);
  } else if (config.type === 'dino' || config.type === 'monster') {
    torsoMesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 1), primaryMat);
  } else if (config.type === 'panda') {
    torsoMesh = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), primaryMat);
  } else {
    torsoMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.35, 1.0, 12), primaryMat);
  }
  torsoMesh.castShadow = !isGhost;
  bodyGroup.add(torsoMesh);

  // Chest Badge Accent
  if (config.type !== 'doodle') {
    const chestBadge = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 12), accentMat);
    chestBadge.rotation.x = Math.PI / 2;
    chestBadge.position.set(0, 0.1, 0.31);
    bodyGroup.add(chestBadge);
  }

  if (!isGhost) {
    addJointHandle(bodyGroup, 'body', 0, 0, 0);
  }

  // 2. Head Bone Node (Attached to Body)
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.7, 0);
  bodyGroup.add(headGroup);
  boneMap.set('head', headGroup);

  let headMesh: THREE.Mesh;
  if (config.type === 'doodle') {
    headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), secondaryMat);
  } else if (config.type === 'robot') {
    headMesh = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.5), secondaryMat);
  } else if (config.type === 'dino') {
    headMesh = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.7, 12), secondaryMat);
    headMesh.rotation.x = Math.PI / 2;
  } else {
    headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), secondaryMat);
  }
  headMesh.castShadow = !isGhost;
  headGroup.add(headMesh);

  // Googly Eyes
  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  eyeL.position.set(-0.15, 0.08, 0.38);
  const pupilL = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 10), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  pupilL.position.set(-0.15, 0.08, 0.45);

  const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  eyeR.position.set(0.15, 0.08, 0.38);
  const pupilR = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 10), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  pupilR.position.set(0.15, 0.08, 0.45);

  headGroup.add(eyeL, pupilL, eyeR, pupilR);

  if (!isGhost) {
    addJointHandle(headGroup, 'head', 0, 0.3, 0);
  }

  // 3. Left Arm Node
  const leftArmGroup = new THREE.Group();
  leftArmGroup.position.set(-0.55, 0.35, 0);
  bodyGroup.add(leftArmGroup);
  boneMap.set('leftArm', leftArmGroup);

  const lArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.7, 8), primaryMat);
  lArmMesh.position.set(0, -0.35, 0);
  lArmMesh.castShadow = !isGhost;
  leftArmGroup.add(lArmMesh);

  if (!isGhost) {
    addJointHandle(leftArmGroup, 'leftArm', 0, 0, 0);
  }

  // 4. Right Arm Node (plus Prop attachment)
  const rightArmGroup = new THREE.Group();
  rightArmGroup.position.set(0.55, 0.35, 0);
  bodyGroup.add(rightArmGroup);
  boneMap.set('rightArm', rightArmGroup);

  const rArmMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.7, 8), primaryMat);
  rArmMesh.position.set(0, -0.35, 0);
  rArmMesh.castShadow = !isGhost;
  rightArmGroup.add(rArmMesh);

  // Attach Character Prop to Right Hand
  if (config.prop && config.prop.type !== 'none') {
    const propMesh = buildPropMesh(config.prop.type, config.prop.color);
    propMesh.position.set(0, -0.7, 0.15);
    rightArmGroup.add(propMesh);
  }

  if (!isGhost) {
    addJointHandle(rightArmGroup, 'rightArm', 0, 0, 0);
  }

  // 5. Left Leg Node
  const leftLegGroup = new THREE.Group();
  leftLegGroup.position.set(-0.25, -0.5, 0);
  bodyGroup.add(leftLegGroup);
  boneMap.set('leftLeg', leftLegGroup);

  const lLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.12, 0.7, 8), secondaryMat);
  lLegMesh.position.set(0, -0.35, 0);
  lLegMesh.castShadow = !isGhost;

  const lFootMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.35), jointMat);
  lFootMesh.position.set(0, -0.7, 0.08);

  leftLegGroup.add(lLegMesh, lFootMesh);

  if (!isGhost) {
    addJointHandle(leftLegGroup, 'leftLeg', 0, 0, 0);
  }

  // 6. Right Leg Node
  const rightLegGroup = new THREE.Group();
  rightLegGroup.position.set(0.25, -0.5, 0);
  bodyGroup.add(rightLegGroup);
  boneMap.set('rightLeg', rightLegGroup);

  const rLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.12, 0.7, 8), secondaryMat);
  rLegMesh.position.set(0, -0.35, 0);
  rLegMesh.castShadow = !isGhost;

  const rFootMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.35), jointMat);
  rFootMesh.position.set(0, -0.7, 0.08);

  rightLegGroup.add(rLegMesh, rFootMesh);

  if (!isGhost) {
    addJointHandle(rightLegGroup, 'rightLeg', 0, 0, 0);
  }

  // Scale root
  rootGroup.scale.setScalar(config.scale || 1.0);

  return { boneMap };
}

function addJointHandle(group: THREE.Group, boneId: BoneId, x: number, y: number, z: number) {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 12, 12),
    new THREE.MeshStandardMaterial({ color: '#64748b' })
  );
  sphere.name = 'joint_handle';
  sphere.position.set(x, y, z);
  sphere.userData = { boneId };
  group.add(sphere);
}

function buildPropMesh(propType: string, colorHex: string): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.3 });

  if (propType === 'wand') {
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8), mat);
    const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.15), new THREE.MeshStandardMaterial({ color: '#facc15', emissive: '#facc15' }));
    star.position.y = 0.45;
    group.add(handle, star);
  } else if (propType === 'shield') {
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.06, 12), mat);
    shield.rotation.x = Math.PI / 2;
    group.add(shield);
  } else if (propType === 'balloon') {
    const stringMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.9), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    const balloon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), mat);
    balloon.position.y = 0.7;
    group.add(stringMesh, balloon);
  } else {
    const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.25), mat);
    group.add(star);
  }

  return group;
}

export function buildPaperCutoutMesh(drawingDataUrl: string, depthThickness = 0.12): THREE.Group {
  const group = new THREE.Group();

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(drawingDataUrl);
  texture.colorSpace = THREE.SRGBColorSpace;

  // Front & Back cutout material
  const cutoutMat = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.1,
    side: THREE.DoubleSide,
    roughness: 0.3,
  });

  // Edge white paper cardstock material
  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
  });

  // Create a 2.5D card geometry
  const cardMesh = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 2.0, depthThickness),
    [edgeMat, edgeMat, edgeMat, edgeMat, cutoutMat, cutoutMat]
  );
  cardMesh.position.y = 1.0;
  cardMesh.castShadow = true;
  cardMesh.receiveShadow = true;
  group.add(cardMesh);

  // Soft round ground shadow disc
  const shadowGeo = new THREE.CircleGeometry(0.7, 16);
  const shadowMat = new THREE.MeshBasicMaterial({
    color: 0x000000,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide,
  });
  const shadowDisc = new THREE.Mesh(shadowGeo, shadowMat);
  shadowDisc.rotation.x = -Math.PI / 2;
  shadowDisc.position.y = 0.01;
  group.add(shadowDisc);

  return group;
}

export function buildToyMesh(toyType: string, colorHex: string): THREE.Group {
  const group = new THREE.Group();

  if (toyType === 'trampoline') {
    // Trampoline outer ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.1, 12, 24),
      new THREE.MeshStandardMaterial({ color: '#7e22ce', roughness: 0.3 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.3;

    // Mat
    const mat = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.9, 0.05, 24),
      new THREE.MeshStandardMaterial({ color: '#3b82f6', roughness: 0.4 })
    );
    mat.position.y = 0.28;

    // Legs
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.3),
        new THREE.MeshStandardMaterial({ color: '#334155' })
      );
      leg.position.set(Math.cos(angle) * 0.9, 0.15, Math.sin(angle) * 0.9);
      group.add(leg);
    }
    group.add(ring, mat);
  } else if (toyType === 'beachball') {
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 16, 16),
      new THREE.MeshStandardMaterial({ color: colorHex || '#ef4444', roughness: 0.2, metalness: 0.1 })
    );
    ball.position.y = 0.6;
    ball.castShadow = true;
    group.add(ball);
  } else if (toyType === 'candy_tree') {
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.18, 1.2),
      new THREE.MeshStandardMaterial({ color: '#78350f' })
    );
    trunk.position.y = 0.6;

    const top = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 16, 16),
      new THREE.MeshStandardMaterial({ color: '#ec4899', roughness: 0.3 })
    );
    top.position.y = 1.4;
    group.add(trunk, top);
  } else if (toyType === 'treat_apple') {
    const apple = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 12, 12),
      new THREE.MeshStandardMaterial({ color: '#f97316', roughness: 0.3 })
    );
    apple.position.y = 0.35;
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.15),
      new THREE.MeshStandardMaterial({ color: '#78350f' })
    );
    stem.position.y = 0.7;
    group.add(apple, stem);
  } else {
    // Magic Portal
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.8, 0.12, 12, 24),
      new THREE.MeshStandardMaterial({ color: '#06b6d4', emissive: '#06b6d4', emissiveIntensity: 0.6 })
    );
    torus.rotation.x = Math.PI / 2;
    torus.position.y = 0.1;
    group.add(torus);
  }

  return group;
}
