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

    // Studio Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0x1e293b, 0.8);
    scene.add(hemiLight);

    const mainLight = new THREE.DirectionalLight(0xfffbeb, 1.4);
    mainLight.position.set(6, 12, 6);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.bias = -0.0003;
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0x818cf8, 0.9);
    rimLight.position.set(-6, 8, -6);
    scene.add(rimLight);

    // Studio Stage Podium Ring
    const stageGroup = new THREE.Group();
    const stageRing = new THREE.Mesh(
      new THREE.CylinderGeometry(1.8, 2.0, 0.12, 32),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2, metalness: 0.5 })
    );
    stageRing.position.y = -0.06;
    stageRing.receiveShadow = true;

    const stageInner = new THREE.Mesh(
      new THREE.CylinderGeometry(1.68, 1.68, 0.13, 32),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3, emissive: 0x0284c7, emissiveIntensity: 0.2 })
    );
    stageInner.position.y = -0.05;
    stageInner.receiveShadow = true;

    stageGroup.add(stageRing, stageInner);
    scene.add(stageGroup);

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
        const bones = (group as any).articulatedBones as ArticulatedBones | undefined;
        const tid = (creatureData.templateId || 'blank').toLowerCase();

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

        // Animate Individual Anatomical Parts (Head, Arms/Wings, Legs, Tail/Flame)
        if (bones && b !== 'sleep') {
          const t = elapsedTime;
          if (tid === 'dino') {
            // T-Rex Dino: Heavy head bob, stompy legs, tiny wiggling arms, tail wag
            bones.headBone.rotation.z = Math.sin(t * 5) * 0.15;
            bones.headBone.rotation.x = Math.sin(t * 3) * 0.1;
            bones.leftArmBone.rotation.z = Math.sin(t * 10) * 0.35 + 0.2;
            bones.rightArmBone.rotation.z = -Math.sin(t * 10) * 0.35 - 0.2;
            bones.leftLegBone.rotation.z = Math.sin(t * 7) * 0.45;
            bones.rightLegBone.rotation.z = -Math.sin(t * 7) * 0.45;
            bones.tailBone.rotation.y = Math.sin(t * 5) * 0.4;
          } else if (tid === 'robot') {
            // Beep Robot: Robotic head turns, marching arm swings, piston leg lifts
            const step = Math.floor(Math.sin(t * 4) * 3) * (Math.PI / 8);
            bones.headBone.rotation.y = step;
            bones.leftArmBone.rotation.x = Math.sin(t * 6) * 0.6;
            bones.rightArmBone.rotation.x = -Math.sin(t * 6) * 0.6;
            bones.leftLegBone.position.y = Math.max(0, Math.sin(t * 6)) * 0.15;
            bones.rightLegBone.position.y = Math.max(0, -Math.sin(t * 6)) * 0.15;
            bones.tailBone.rotation.z = Math.sin(t * 12) * 0.3;
          } else if (tid === 'unicorn') {
            // Pegasus / Unicorn: Flying wing flap, galloping legs, horn bow
            bones.leftArmBone.rotation.z = Math.sin(t * 12) * 0.6 + 0.2;
            bones.rightArmBone.rotation.z = -Math.sin(t * 12) * 0.6 - 0.2;
            bones.headBone.rotation.z = Math.sin(t * 4) * 0.15;
            bones.leftLegBone.rotation.z = Math.sin(t * 8) * 0.35;
            bones.rightLegBone.rotation.z = -Math.sin(t * 8) * 0.35;
            bones.tailBone.rotation.z = Math.sin(t * 6) * 0.3;
          } else if (tid === 'cat') {
            // Kitten: Inquisitive head tilt, paw patter, wiggling tail
            bones.headBone.rotation.z = Math.sin(t * 3) * 0.22;
            bones.leftArmBone.rotation.z = Math.sin(t * 8) * 0.25;
            bones.rightArmBone.rotation.z = -Math.sin(t * 8) * 0.25;
            bones.tailBone.rotation.z = Math.sin(t * 7) * 0.35 + 0.2;
          } else if (tid === 'rocket') {
            // Space Rocket: Thruster flame blast & flicker, fins adjust
            bones.tailBone.scale.y = 1.0 + Math.sin(t * 28) * 0.45;
            bones.tailBone.scale.x = 0.8 + Math.cos(t * 24) * 0.3;
            bones.leftArmBone.rotation.z = Math.sin(t * 6) * 0.12;
            bones.rightArmBone.rotation.z = -Math.sin(t * 6) * 0.12;
          } else if (tid === 'monster') {
            // Squishy Monster: Jelly body jiggle, eye wobble, arms wave overhead
            const squish = Math.sin(t * 6);
            bones.bodyBone.scale.y = 1.0 + squish * 0.15;
            bones.bodyBone.scale.x = 1.0 - squish * 0.1;
            bones.headBone.rotation.z = Math.sin(t * 9) * 0.25;
            bones.leftArmBone.rotation.z = Math.sin(t * 8) * 0.6 + 0.8;
            bones.rightArmBone.rotation.z = -Math.sin(t * 8) * 0.6 - 0.8;
          } else if (tid === 'hero') {
            // Superhero: Flight pose, forward arms, cape fluttering
            bones.leftArmBone.rotation.x = -1.2 + Math.sin(t * 4) * 0.15;
            bones.rightArmBone.rotation.x = -1.2 + Math.sin(t * 4) * 0.15;
            bones.tailBone.rotation.x = 0.4 + Math.sin(t * 12) * 0.3;
            bones.headBone.rotation.x = -0.2;
          } else {
            // Generic / Blank
            bones.headBone.rotation.z = Math.sin(t * 4) * 0.15;
            bones.leftArmBone.rotation.z = Math.sin(t * 6) * 0.3 + 0.2;
            bones.rightArmBone.rotation.z = -Math.sin(t * 6) * 0.3 - 0.2;
            bones.leftLegBone.rotation.z = Math.sin(t * 5) * 0.25;
            bones.rightLegBone.rotation.z = -Math.sin(t * 5) * 0.25;
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
        group = buildPaperCutoutMesh(c.drawingDataUrl, c.depthThickness, c.templateId || 'blank');
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

  const touchStartDistRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      previousMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      touchStartDistRef.current = null;
    } else if (e.touches.length === 2) {
      isDraggingRef.current = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      touchStartDistRef.current = Math.hypot(dx, dy);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!mountRef.current || !cameraRef.current) return;

    if (e.touches.length === 1 && isDraggingRef.current) {
      const deltaX = e.touches[0].clientX - previousMouseRef.current.x;
      const deltaY = e.touches[0].clientY - previousMouseRef.current.y;
      previousMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      cameraAngleRef.current.theta -= deltaX * 0.008;
      cameraAngleRef.current.phi = Math.max(
        0.1,
        Math.min(Math.PI / 2 - 0.05, cameraAngleRef.current.phi - deltaY * 0.008)
      );

      updateCameraPosition();
    } else if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const deltaDist = touchStartDistRef.current - dist;
      touchStartDistRef.current = dist;

      cameraAngleRef.current.radius = Math.max(
        3.5,
        Math.min(15, cameraAngleRef.current.radius + deltaDist * 0.02)
      );
      updateCameraPosition();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
    }
    touchStartDistRef.current = null;

    if (e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      if (!mountRef.current || !cameraRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      const mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

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

      if (onGroundClick) {
        const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        const targetVec = new THREE.Vector3();
        if (raycaster.ray.intersectPlane(groundPlane, targetVec)) {
          onGroundClick(targetVec.x, targetVec.z);
        }
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      className="w-full h-full relative cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 touch-none"
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

  // Custom Image Skin / Drawing Texture setup
  let primarySkinMat: THREE.Material = primaryMat;
  let secondarySkinMat: THREE.Material = secondaryMat;

  if (config.drawingDataUrl) {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(config.drawingDataUrl);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    
    primarySkinMat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.25,
      metalness: 0.05,
      side: THREE.DoubleSide,
      transparent: isGhost,
      opacity: isGhost ? 0.35 : 1.0,
      wireframe: config.wireframe,
    });

    secondarySkinMat = primarySkinMat;
  }

  const tid = (config.type || 'blank').toLowerCase();
  const cfg = getTemplateRigConfig(tid);

  // 1. Body Group (Root Bone Node)
  const bodyGroup = new THREE.Group();
  bodyGroup.position.set(0, 1.0, 0);
  rootGroup.add(bodyGroup);
  boneMap.set('body', bodyGroup);

  // Body Mesh
  const torsoMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.body), primarySkinMat);
  torsoMesh.castShadow = !isGhost;
  addOutlineShell(torsoMesh, isGhost);
  bodyGroup.add(torsoMesh);

  // Chest Badge Accent
  const charTypeStr = String(config.type);
  if (charTypeStr !== 'doodle' && charTypeStr !== 'dino' && charTypeStr !== 'cat') {
    const chestBadge = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 12), accentMat);
    chestBadge.rotation.x = Math.PI / 2;
    chestBadge.position.set(0, 0.1, cfg.body.d / 2 + 0.02);
    bodyGroup.add(chestBadge);
  }

  if (!isGhost) {
    addJointHandle(bodyGroup, 'body', 0, 0, 0);
  }

  // 2. Head Bone Node (Attached to Body)
  const headGroup = new THREE.Group();
  headGroup.position.set(cfg.head.posX, cfg.head.posY, cfg.head.posZ);
  bodyGroup.add(headGroup);
  boneMap.set('head', headGroup);

  const headMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.head), secondarySkinMat);
  headMesh.position.set(0, cfg.head.h / 2, 0);
  headMesh.castShadow = !isGhost;
  addOutlineShell(headMesh, isGhost);
  headGroup.add(headMesh);

  if (!isGhost) {
    addJointHandle(headGroup, 'head', 0, cfg.head.h / 2 + 0.1, 0);
  }

  // 3. Left Arm Node
  const leftArmGroup = new THREE.Group();
  leftArmGroup.position.set(cfg.leftArm.posX, cfg.leftArm.posY, cfg.leftArm.posZ);
  bodyGroup.add(leftArmGroup);
  boneMap.set('leftArm', leftArmGroup);

  const lArmMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.leftArm), primarySkinMat);
  lArmMesh.position.set(-cfg.leftArm.w / 2, -cfg.leftArm.h / 2, 0);
  lArmMesh.castShadow = !isGhost;
  addOutlineShell(lArmMesh, isGhost);
  leftArmGroup.add(lArmMesh);

  if (!isGhost) {
    addJointHandle(leftArmGroup, 'leftArm', 0, 0, 0);
  }

  // 4. Right Arm Node (plus Prop attachment)
  const rightArmGroup = new THREE.Group();
  rightArmGroup.position.set(cfg.rightArm.posX, cfg.rightArm.posY, cfg.rightArm.posZ);
  bodyGroup.add(rightArmGroup);
  boneMap.set('rightArm', rightArmGroup);

  const rArmMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.rightArm), primarySkinMat);
  rArmMesh.position.set(cfg.rightArm.w / 2, -cfg.rightArm.h / 2, 0);
  rArmMesh.castShadow = !isGhost;
  addOutlineShell(rArmMesh, isGhost);
  rightArmGroup.add(rArmMesh);

  // Attach Character Prop to Right Hand
  if (config.prop && config.prop.type !== 'none') {
    const propMesh = buildPropMesh(config.prop.type, config.prop.color);
    propMesh.position.set(0, -cfg.rightArm.h, 0.15);
    rightArmGroup.add(propMesh);
  }

  if (!isGhost) {
    addJointHandle(rightArmGroup, 'rightArm', 0, 0, 0);
  }

  // 5. Left Leg Node
  const leftLegGroup = new THREE.Group();
  leftLegGroup.position.set(cfg.leftLeg.posX, cfg.leftLeg.posY, cfg.leftLeg.posZ);
  bodyGroup.add(leftLegGroup);
  boneMap.set('leftLeg', leftLegGroup);

  const lLegMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.leftLeg), secondarySkinMat);
  lLegMesh.position.set(0, -cfg.leftLeg.h / 2, 0);
  lLegMesh.castShadow = !isGhost;
  addOutlineShell(lLegMesh, isGhost);

  const lFootMesh = new THREE.Mesh(new THREE.BoxGeometry(cfg.leftLeg.w * 0.9, 0.12, cfg.leftLeg.d * 1.1), jointMat);
  lFootMesh.position.set(0, -cfg.leftLeg.h, cfg.leftLeg.d * 0.2);

  leftLegGroup.add(lLegMesh, lFootMesh);

  if (!isGhost) {
    addJointHandle(leftLegGroup, 'leftLeg', 0, 0, 0);
  }

  // 6. Right Leg Node
  const rightLegGroup = new THREE.Group();
  rightLegGroup.position.set(cfg.rightLeg.posX, cfg.rightLeg.posY, cfg.rightLeg.posZ);
  bodyGroup.add(rightLegGroup);
  boneMap.set('rightLeg', rightLegGroup);

  const rLegMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.rightLeg), secondarySkinMat);
  rLegMesh.position.set(0, -cfg.rightLeg.h / 2, 0);
  rLegMesh.castShadow = !isGhost;
  addOutlineShell(rLegMesh, isGhost);

  const rFootMesh = new THREE.Mesh(new THREE.BoxGeometry(cfg.rightLeg.w * 0.9, 0.12, cfg.rightLeg.d * 1.1), jointMat);
  rFootMesh.position.set(0, -cfg.rightLeg.h, cfg.rightLeg.d * 0.2);

  rightLegGroup.add(rLegMesh, rFootMesh);

  if (!isGhost) {
    addJointHandle(rightLegGroup, 'rightLeg', 0, 0, 0);
  }

  // 7. Tail Node
  const tailGroup = new THREE.Group();
  tailGroup.position.set(cfg.tail.posX, cfg.tail.posY, cfg.tail.posZ);
  bodyGroup.add(tailGroup);
  boneMap.set('tail', tailGroup);

  const tailMesh = new THREE.Mesh(createVolumetric3DPartGeometry(cfg.tail), accentMat);
  tailMesh.position.set(cfg.tail.offsetX || 0, cfg.tail.offsetY || -cfg.tail.h / 2, 0);
  tailMesh.castShadow = !isGhost;
  addOutlineShell(tailMesh, isGhost);
  tailGroup.add(tailMesh);

  if (!isGhost) {
    addJointHandle(tailGroup, 'tail', 0, 0, 0);
  }

  // Attach Anatomical 3D Features (Snout, Teeth, Spikes, Antennae, Visor, Horns, Wings, Ears, etc.)
  attachTemplate3DFeatures(
    tid,
    headGroup,
    bodyGroup,
    leftArmGroup,
    rightArmGroup,
    leftLegGroup,
    rightLegGroup,
    tailGroup,
    primaryMat
  );

  // Scale root
  rootGroup.scale.setScalar(config.scale || 1.0);

  return { boneMap };
}

function addOutlineShell(
  parentMesh: THREE.Mesh,
  isGhost: boolean,
  colorHex = 0x0f172a,
  scale = 1.035
) {
  if (isGhost) return;
  const outlineMat = new THREE.MeshBasicMaterial({
    color: colorHex,
    side: THREE.BackSide,
  });
  const outline = new THREE.Mesh(parentMesh.geometry, outlineMat);
  outline.scale.setScalar(scale);
  parentMesh.add(outline);
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

export interface ArticulatedBones {
  bodyBone: THREE.Group;
  headBone: THREE.Group;
  leftArmBone: THREE.Group;
  rightArmBone: THREE.Group;
  leftLegBone: THREE.Group;
  rightLegBone: THREE.Group;
  tailBone: THREE.Group;
  templateId: string;
}

type Volumetric3DShape = 'sphere' | 'capsule' | 'cylinder' | 'box' | 'cone';

interface TemplatePartConfig {
  w: number;
  h: number;
  d: number;
  shape?: Volumetric3DShape;
  uMin: number;
  vMin: number;
  uMax: number;
  vMax: number;
  posX: number;
  posY: number;
  posZ: number;
  offsetX?: number;
  offsetY?: number;
}

interface TemplateRigConfig {
  body: TemplatePartConfig;
  head: TemplatePartConfig;
  leftArm: TemplatePartConfig;
  rightArm: TemplatePartConfig;
  leftLeg: TemplatePartConfig;
  rightLeg: TemplatePartConfig;
  tail: TemplatePartConfig;
}

function createVolumetric3DPartGeometry(
  partCfg: TemplatePartConfig
): THREE.BufferGeometry {
  const { w, h, d, uMin, vMin, uMax, vMax } = partCfg;
  const shape = partCfg.shape || 'sphere';

  let geo: THREE.BufferGeometry;

  if (shape === 'sphere') {
    geo = new THREE.SphereGeometry(0.5, 32, 32);
    geo.scale(w, h, d);
  } else if (shape === 'capsule') {
    const radius = Math.min(w, d) / 2;
    const length = Math.max(0.01, h - radius * 2);
    geo = new THREE.CapsuleGeometry(radius, length, 12, 24);
    geo.scale(w / (radius * 2 || 1), 1, d / (radius * 2 || 1));
  } else if (shape === 'cylinder') {
    geo = new THREE.CylinderGeometry(0.5, 0.5, 1, 24);
    geo.scale(w, h, d);
  } else if (shape === 'cone') {
    geo = new THREE.ConeGeometry(0.5, 1, 24);
    geo.scale(w, h, d);
  } else {
    geo = new THREE.BoxGeometry(w, h, d, 12, 12, 12);
  }

  geo.computeBoundingBox();
  const bbox = geo.boundingBox!;
  const minX = bbox.min.x, maxX = bbox.max.x;
  const minY = bbox.min.y, maxY = bbox.max.y;
  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;

  const posAttr = geo.attributes.position as THREE.BufferAttribute;
  const uvAttr = geo.attributes.uv as THREE.BufferAttribute;
  const count = posAttr.count;

  for (let i = 0; i < count; i++) {
    const x = posAttr.getX(i);
    const y = posAttr.getY(i);
    const z = posAttr.getZ(i);

    let normX = (x - minX) / rangeX;
    let normY = (y - minY) / rangeY;

    if (z < -0.01) {
      normX = 1 - normX;
    }

    const u = uMin + (uMax - uMin) * Math.max(0, Math.min(1, normX));
    const v = vMin + (vMax - vMin) * Math.max(0, Math.min(1, normY));

    uvAttr.setXY(i, u, v);
  }

  uvAttr.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

function getTemplateRigConfig(templateId: string): TemplateRigConfig {
  const tid = templateId.toLowerCase();

  if (tid === 'dino') {
    return {
      body: { shape: 'capsule', w: 0.85, h: 0.8, d: 1.35, uMin: 0.25, vMin: 0.32, uMax: 0.75, vMax: 0.65, posX: 0, posY: 0, posZ: 0.1 },
      head: { shape: 'box', w: 0.7, h: 0.65, d: 1.0, uMin: 0.25, vMin: 0.65, uMax: 0.75, vMax: 0.98, posX: 0, posY: 0.45, posZ: 0.45 },
      leftArm: { shape: 'capsule', w: 0.22, h: 0.35, d: 0.22, uMin: 0.0, vMin: 0.38, uMax: 0.32, vMax: 0.58, posX: -0.38, posY: 0.15, posZ: 0.4 },
      rightArm: { shape: 'capsule', w: 0.22, h: 0.35, d: 0.22, uMin: 0.68, vMin: 0.38, uMax: 1.0, vMax: 0.58, posX: 0.38, posY: 0.15, posZ: 0.4 },
      leftLeg: { shape: 'capsule', w: 0.45, h: 0.8, d: 0.5, uMin: 0.15, vMin: 0.0, uMax: 0.48, vMax: 0.32, posX: -0.32, posY: -0.38, posZ: -0.1 },
      rightLeg: { shape: 'capsule', w: 0.45, h: 0.8, d: 0.5, uMin: 0.52, vMin: 0.0, uMax: 0.85, vMax: 0.32, posX: 0.32, posY: -0.38, posZ: -0.1 },
      tail: { shape: 'cone', w: 0.55, h: 1.3, d: 0.55, uMin: 0.0, vMin: 0.30, uMax: 0.32, vMax: 0.60, posX: 0, posY: -0.1, posZ: -0.75, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'robot') {
    return {
      body: { shape: 'box', w: 1.05, h: 0.95, d: 0.75, uMin: 0.22, vMin: 0.32, uMax: 0.78, vMax: 0.68, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'box', w: 0.75, h: 0.65, d: 0.65, uMin: 0.25, vMin: 0.68, uMax: 0.75, vMax: 0.98, posX: 0, posY: 0.45, posZ: 0 },
      leftArm: { shape: 'cylinder', w: 0.32, h: 0.7, d: 0.32, uMin: 0.0, vMin: 0.32, uMax: 0.25, vMax: 0.70, posX: -0.55, posY: 0.2, posZ: 0 },
      rightArm: { shape: 'cylinder', w: 0.32, h: 0.7, d: 0.32, uMin: 0.75, vMin: 0.32, uMax: 1.0, vMax: 0.70, posX: 0.55, posY: 0.2, posZ: 0 },
      leftLeg: { shape: 'box', w: 0.36, h: 0.7, d: 0.4, uMin: 0.25, vMin: 0.0, uMax: 0.48, vMax: 0.32, posX: -0.28, posY: -0.4, posZ: 0 },
      rightLeg: { shape: 'box', w: 0.36, h: 0.7, d: 0.4, uMin: 0.52, vMin: 0.0, uMax: 0.75, vMax: 0.32, posX: 0.28, posY: -0.4, posZ: 0 },
      tail: { shape: 'box', w: 0.6, h: 0.6, d: 0.35, uMin: 0.45, vMin: 0.85, uMax: 0.55, vMax: 1.0, posX: 0, posY: 0.1, posZ: -0.4, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'astronaut') {
    return {
      body: { shape: 'capsule', w: 1.0, h: 0.95, d: 0.8, uMin: 0.22, vMin: 0.32, uMax: 0.78, vMax: 0.68, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'sphere', w: 0.85, h: 0.8, d: 0.8, uMin: 0.25, vMin: 0.68, uMax: 0.75, vMax: 0.98, posX: 0, posY: 0.45, posZ: 0 },
      leftArm: { shape: 'capsule', w: 0.38, h: 0.65, d: 0.38, uMin: 0.0, vMin: 0.32, uMax: 0.25, vMax: 0.70, posX: -0.55, posY: 0.2, posZ: 0 },
      rightArm: { shape: 'capsule', w: 0.38, h: 0.65, d: 0.38, uMin: 0.75, vMin: 0.32, uMax: 1.0, vMax: 0.70, posX: 0.55, posY: 0.2, posZ: 0 },
      leftLeg: { shape: 'capsule', w: 0.38, h: 0.6, d: 0.4, uMin: 0.25, vMin: 0.0, uMax: 0.48, vMax: 0.32, posX: -0.28, posY: -0.4, posZ: 0 },
      rightLeg: { shape: 'capsule', w: 0.38, h: 0.6, d: 0.4, uMin: 0.52, vMin: 0.0, uMax: 0.75, vMax: 0.32, posX: 0.28, posY: -0.4, posZ: 0 },
      tail: { shape: 'box', w: 0.7, h: 0.7, d: 0.35, uMin: 0.45, vMin: 0.85, uMax: 0.55, vMax: 1.0, posX: 0, posY: 0.1, posZ: -0.4, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'panda') {
    return {
      body: { shape: 'sphere', w: 1.1, h: 1.0, d: 0.9, uMin: 0.20, vMin: 0.30, uMax: 0.75, vMax: 0.65, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'sphere', w: 0.95, h: 0.85, d: 0.85, uMin: 0.25, vMin: 0.65, uMax: 0.75, vMax: 0.98, posX: 0, posY: 0.4, posZ: 0 },
      leftArm: { shape: 'capsule', w: 0.35, h: 0.6, d: 0.35, uMin: 0.0, vMin: 0.38, uMax: 0.32, vMax: 0.58, posX: -0.5, posY: 0.2, posZ: 0 },
      rightArm: { shape: 'capsule', w: 0.35, h: 0.6, d: 0.35, uMin: 0.68, vMin: 0.38, uMax: 1.0, vMax: 0.58, posX: 0.5, posY: 0.2, posZ: 0 },
      leftLeg: { shape: 'capsule', w: 0.38, h: 0.5, d: 0.38, uMin: 0.15, vMin: 0.0, uMax: 0.48, vMax: 0.32, posX: -0.28, posY: -0.4, posZ: 0 },
      rightLeg: { shape: 'capsule', w: 0.38, h: 0.5, d: 0.38, uMin: 0.52, vMin: 0.0, uMax: 0.85, vMax: 0.32, posX: 0.28, posY: -0.4, posZ: 0 },
      tail: { shape: 'sphere', w: 0.25, h: 0.25, d: 0.25, uMin: 0.0, vMin: 0.30, uMax: 0.32, vMax: 0.60, posX: 0, posY: -0.1, posZ: -0.5, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'unicorn') {
    return {
      body: { shape: 'capsule', w: 0.75, h: 0.7, d: 1.35, uMin: 0.20, vMin: 0.30, uMax: 0.75, vMax: 0.65, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'capsule', w: 0.65, h: 0.8, d: 0.85, uMin: 0.45, vMin: 0.65, uMax: 0.92, vMax: 0.98, posX: 0, posY: 0.5, posZ: 0.45 },
      leftArm: { shape: 'cylinder', w: 0.28, h: 0.7, d: 0.28, uMin: 0.05, vMin: 0.55, uMax: 0.45, vMax: 0.90, posX: -0.3, posY: -0.35, posZ: 0.4 },
      rightArm: { shape: 'cylinder', w: 0.28, h: 0.7, d: 0.28, uMin: 0.05, vMin: 0.55, uMax: 0.45, vMax: 0.90, posX: 0.3, posY: -0.35, posZ: 0.4 },
      leftLeg: { shape: 'cylinder', w: 0.28, h: 0.7, d: 0.28, uMin: 0.20, vMin: 0.0, uMax: 0.45, vMax: 0.30, posX: -0.3, posY: -0.35, posZ: -0.4 },
      rightLeg: { shape: 'cylinder', w: 0.28, h: 0.7, d: 0.28, uMin: 0.55, vMin: 0.0, uMax: 0.80, vMax: 0.30, posX: 0.3, posY: -0.35, posZ: -0.4 },
      tail: { shape: 'capsule', w: 0.35, h: 0.7, d: 0.35, uMin: 0.0, vMin: 0.25, uMax: 0.25, vMax: 0.60, posX: 0, posY: 0.1, posZ: -0.7, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'cat') {
    return {
      body: { shape: 'sphere', w: 0.85, h: 0.75, d: 1.1, uMin: 0.25, vMin: 0.22, uMax: 0.75, vMax: 0.58, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'sphere', w: 0.95, h: 0.85, d: 0.85, uMin: 0.22, vMin: 0.58, uMax: 0.78, vMax: 0.98, posX: 0, posY: 0.4, posZ: 0 },
      leftArm: { shape: 'capsule', w: 0.28, h: 0.5, d: 0.28, uMin: 0.25, vMin: 0.0, uMax: 0.45, vMax: 0.25, posX: -0.3, posY: -0.3, posZ: 0.3 },
      rightArm: { shape: 'capsule', w: 0.28, h: 0.5, d: 0.28, uMin: 0.55, vMin: 0.0, uMax: 0.75, vMax: 0.25, posX: 0.3, posY: -0.3, posZ: 0.3 },
      leftLeg: { shape: 'capsule', w: 0.28, h: 0.5, d: 0.28, uMin: 0.25, vMin: 0.0, uMax: 0.45, vMax: 0.25, posX: -0.32, posY: -0.3, posZ: -0.3 },
      rightLeg: { shape: 'capsule', w: 0.28, h: 0.5, d: 0.28, uMin: 0.55, vMin: 0.0, uMax: 0.75, vMax: 0.25, posX: 0.32, posY: -0.3, posZ: -0.3 },
      tail: { shape: 'capsule', w: 0.22, h: 0.8, d: 0.22, uMin: 0.68, vMin: 0.30, uMax: 0.95, vMax: 0.65, posX: 0, posY: 0.1, posZ: -0.6, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'rocket') {
    return {
      body: { shape: 'cylinder', w: 0.9, h: 1.2, d: 0.9, uMin: 0.25, vMin: 0.30, uMax: 0.75, vMax: 0.70, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'cone', w: 0.9, h: 0.8, d: 0.9, uMin: 0.28, vMin: 0.70, uMax: 0.72, vMax: 0.98, posX: 0, posY: 0.6, posZ: 0 },
      leftArm: { shape: 'cylinder', w: 0.38, h: 1.0, d: 0.38, uMin: 0.05, vMin: 0.25, uMax: 0.32, vMax: 0.58, posX: -0.65, posY: -0.1, posZ: 0 },
      rightArm: { shape: 'cylinder', w: 0.38, h: 1.0, d: 0.38, uMin: 0.68, vMin: 0.25, uMax: 0.95, vMax: 0.58, posX: 0.65, posY: -0.1, posZ: 0 },
      leftLeg: { shape: 'box', w: 0.25, h: 0.6, d: 0.4, uMin: 0.30, vMin: 0.10, uMax: 0.45, vMax: 0.30, posX: -0.45, posY: -0.5, posZ: 0.2 },
      rightLeg: { shape: 'box', w: 0.25, h: 0.6, d: 0.4, uMin: 0.55, vMin: 0.10, uMax: 0.70, vMax: 0.30, posX: 0.45, posY: -0.5, posZ: 0.2 },
      tail: { shape: 'cone', w: 0.6, h: 0.8, d: 0.6, uMin: 0.30, vMin: 0.0, uMax: 0.70, vMax: 0.30, posX: 0, posY: -0.6, posZ: 0, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'monster') {
    return {
      body: { shape: 'sphere', w: 1.2, h: 0.9, d: 0.85, uMin: 0.15, vMin: 0.22, uMax: 0.85, vMax: 0.60, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'sphere', w: 0.95, h: 0.8, d: 0.85, uMin: 0.20, vMin: 0.60, uMax: 0.80, vMax: 0.98, posX: 0, posY: 0.45, posZ: 0 },
      leftArm: { shape: 'capsule', w: 0.4, h: 0.7, d: 0.4, uMin: 0.0, vMin: 0.35, uMax: 0.22, vMax: 0.75, posX: -0.6, posY: 0.2, posZ: 0 },
      rightArm: { shape: 'capsule', w: 0.4, h: 0.7, d: 0.4, uMin: 0.78, vMin: 0.35, uMax: 1.0, vMax: 0.75, posX: 0.6, posY: 0.2, posZ: 0 },
      leftLeg: { shape: 'capsule', w: 0.35, h: 0.5, d: 0.35, uMin: 0.20, vMin: 0.0, uMax: 0.45, vMax: 0.22, posX: -0.3, posY: -0.4, posZ: 0 },
      rightLeg: { shape: 'capsule', w: 0.35, h: 0.5, d: 0.35, uMin: 0.55, vMin: 0.0, uMax: 0.80, vMax: 0.22, posX: 0.3, posY: -0.4, posZ: 0 },
      tail: { shape: 'cone', w: 0.4, h: 0.7, d: 0.4, uMin: 0.4, vMin: 0.8, uMax: 0.6, vMax: 1.0, posX: 0, posY: -0.2, posZ: -0.5, offsetX: 0, offsetY: 0 },
    };
  }

  if (tid === 'hero') {
    return {
      body: { shape: 'capsule', w: 0.95, h: 0.9, d: 0.65, uMin: 0.20, vMin: 0.30, uMax: 0.80, vMax: 0.70, posX: 0, posY: 0, posZ: 0 },
      head: { shape: 'sphere', w: 0.75, h: 0.65, d: 0.65, uMin: 0.30, vMin: 0.70, uMax: 0.70, vMax: 0.98, posX: 0, posY: 0.4, posZ: 0 },
      leftArm: { shape: 'capsule', w: 0.35, h: 0.65, d: 0.35, uMin: 0.02, vMin: 0.35, uMax: 0.25, vMax: 0.75, posX: -0.52, posY: 0.25, posZ: 0 },
      rightArm: { shape: 'capsule', w: 0.35, h: 0.65, d: 0.35, uMin: 0.75, vMin: 0.35, uMax: 0.98, vMax: 0.75, posX: 0.52, posY: 0.25, posZ: 0 },
      leftLeg: { shape: 'capsule', w: 0.32, h: 0.6, d: 0.32, uMin: 0.22, vMin: 0.0, uMax: 0.48, vMax: 0.30, posX: -0.25, posY: -0.4, posZ: 0 },
      rightLeg: { shape: 'capsule', w: 0.32, h: 0.6, d: 0.32, uMin: 0.52, vMin: 0.0, uMax: 0.78, vMax: 0.30, posX: 0.25, posY: -0.4, posZ: 0 },
      tail: { shape: 'box', w: 0.9, h: 1.1, d: 0.08, uMin: 0.15, vMin: 0.2, uMax: 0.85, vMax: 0.8, posX: 0, posY: 0.0, posZ: -0.32, offsetX: 0, offsetY: 0 },
    };
  }

  // Default / Blank
  return {
    body: { shape: 'sphere', w: 1.0, h: 0.8, d: 0.6, uMin: 0.20, vMin: 0.30, uMax: 0.80, vMax: 0.65, posX: 0, posY: 0, posZ: 0 },
    head: { shape: 'sphere', w: 0.8, h: 0.7, d: 0.65, uMin: 0.25, vMin: 0.65, uMax: 0.75, vMax: 1.0, posX: 0, posY: 0.4, posZ: 0 },
    leftArm: { shape: 'capsule', w: 0.32, h: 0.5, d: 0.32, uMin: 0.0, vMin: 0.30, uMax: 0.22, vMax: 0.70, posX: -0.5, posY: 0.2, posZ: 0 },
    rightArm: { shape: 'capsule', w: 0.32, h: 0.5, d: 0.32, uMin: 0.78, vMin: 0.30, uMax: 1.0, vMax: 0.70, posX: 0.5, posY: 0.2, posZ: 0 },
    leftLeg: { shape: 'capsule', w: 0.32, h: 0.5, d: 0.32, uMin: 0.20, vMin: 0.0, uMax: 0.48, vMax: 0.30, posX: -0.25, posY: -0.4, posZ: 0 },
    rightLeg: { shape: 'capsule', w: 0.32, h: 0.5, d: 0.32, uMin: 0.52, vMin: 0.0, uMax: 0.80, vMax: 0.30, posX: 0.25, posY: -0.4, posZ: 0 },
    tail: { shape: 'capsule', w: 0.3, h: 0.35, d: 0.3, uMin: 0.4, vMin: 0.1, uMax: 0.6, vMax: 0.3, posX: 0, posY: -0.2, posZ: 0, offsetX: 0, offsetY: -0.15 },
  };
}

function attachTemplate3DFeatures(
  tid: string,
  headBone: THREE.Group,
  bodyBone: THREE.Group,
  leftArmBone: THREE.Group,
  rightArmBone: THREE.Group,
  leftLegBone: THREE.Group,
  rightLegBone: THREE.Group,
  tailBone: THREE.Group,
  partMaterial: THREE.Material
) {
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
  const blackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.2, metalness: 0.8 });
  const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3, metalness: 0.6 });
  const glowMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x06b6d4, emissiveIntensity: 0.8 });
  const fireMat = new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 1.0 });

  if (tid === 'dino') {
    // 3D Snout extension & open jaws
    const upperJaw = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.6), partMaterial);
    upperJaw.position.set(0, 0.45, 0.45);
    const lowerJaw = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.18, 0.55), darkMetalMat);
    lowerJaw.position.set(0, 0.22, 0.42);
    headBone.add(upperJaw, lowerJaw);

    // 10 Sharp 3D teeth inside upper and lower jaw
    for (let i = -2; i <= 2; i++) {
      const topTooth = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 8), whiteMat);
      topTooth.rotation.x = Math.PI;
      topTooth.position.set(i * 0.09, 0.31, 0.7);

      const botTooth = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.1, 8), whiteMat);
      botTooth.position.set(i * 0.08, 0.3, 0.65);

      headBone.add(topTooth, botTooth);
    }

    // 3D Nostrils
    for (const side of [-0.1, 0.1]) {
      const nostril = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 8), blackMat);
      nostril.position.set(side, 0.52, 0.74);
      headBone.add(nostril);
    }

    // 2 3D glossy eyeballs in sockets with brow ridges
    for (const side of [-0.26, 0.26]) {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 12), darkMetalMat);
      socket.position.set(side, 0.58, 0.22);

      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), whiteMat);
      sclera.position.set(side * 0.9, 0.58, 0.26);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), blackMat);
      pupil.position.set(side * 0.9, 0.58, 0.35);

      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.2), partMaterial);
      brow.rotation.z = side > 0 ? -0.2 : 0.2;
      brow.position.set(side, 0.68, 0.24);

      headBone.add(socket, sclera, pupil, brow);
    }

    // 7 3D Triangular dorsal plates/spikes running along back to tail
    for (let i = 0; i < 4; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 8), partMaterial);
      spike.rotation.x = -Math.PI / 4;
      spike.position.set(0, 0.35 - i * 0.18, -0.4 - i * 0.08);
      bodyBone.add(spike);
    }
    for (let i = 0; i < 3; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08 - i * 0.02, 0.22 - i * 0.04, 8), partMaterial);
      spike.rotation.x = -Math.PI / 3;
      spike.position.set(0, -i * 0.2, -i * 0.25);
      tailBone.add(spike);
    }

    // Sharp claws on hands and feet
    for (const armBone of [leftArmBone, rightArmBone]) {
      for (const clawX of [-0.06, 0, 0.06]) {
        const claw = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.1, 8), whiteMat);
        claw.rotation.x = Math.PI / 2;
        claw.position.set(clawX, -0.38, 0.1);
        armBone.add(claw);
      }
    }
    for (const legBone of [leftLegBone, rightLegBone]) {
      for (const clawX of [-0.1, 0, 0.1]) {
        const claw = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.14, 8), whiteMat);
        claw.rotation.x = Math.PI / 2;
        claw.position.set(clawX, -0.82, 0.28);
        legBone.add(claw);
      }
    }
  } else if (tid === 'robot') {
    // Twin Antennae with glowing bulbs
    for (const side of [-0.15, 0.15]) {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35), darkMetalMat);
      stem.position.set(side, 0.72, 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), glowMat);
      tip.position.set(side, 0.9, 0);
      headBone.add(stem, tip);
    }

    // Ear bolts
    for (const side of [-0.4, 0.4]) {
      const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.12, 12), darkMetalMat);
      ear.rotation.z = Math.PI / 2;
      ear.position.set(side, 0.35, 0);
      headBone.add(ear);
    }

    // Visor Frame with glowing cyan display grid
    const visorFrame = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.22, 0.12), darkMetalMat);
    visorFrame.position.set(0, 0.38, 0.32);
    const visorScreen = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.16, 0.05), glowMat);
    visorScreen.position.set(0, 0.38, 0.36);
    headBone.add(visorFrame, visorScreen);

    // Chest Meter Console with Dials & LEDs
    const consoleBox = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.45, 0.12), darkMetalMat);
    consoleBox.position.set(0, 0.05, 0.38);
    const dial1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 12), glowMat);
    dial1.rotation.x = Math.PI / 2;
    dial1.position.set(-0.16, 0.12, 0.43);
    const dial2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 12), fireMat);
    dial2.rotation.x = Math.PI / 2;
    dial2.position.set(0.16, 0.12, 0.43);
    bodyBone.add(consoleBox, dial1, dial2);

    // Jetpack on back with dual glowing fire flames
    const jetpack = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.55, 0.28), darkMetalMat);
    jetpack.position.set(0, 0.05, -0.4);
    bodyBone.add(jetpack);

    for (const side of [-0.18, 0.18]) {
      const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.2, 12), darkMetalMat);
      nozzle.position.set(side, -0.28, -0.4);
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.35, 12), fireMat);
      flame.rotation.x = Math.PI;
      flame.position.set(side, -0.5, -0.4);
      bodyBone.add(nozzle, flame);
    }

    // Arm Claw Pincers
    for (const armBone of [leftArmBone, rightArmBone]) {
      const clawL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.05), darkMetalMat);
      clawL.position.set(-0.06, -0.72, 0);
      const clawR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.18, 0.05), darkMetalMat);
      clawR.position.set(0.06, -0.72, 0);
      armBone.add(clawL, clawR);
    }
  } else if (tid === 'astronaut') {
    // Gold reflective helmet bubble visor
    const visorFrame = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.05, 12, 24), darkMetalMat);
    visorFrame.position.set(0, 0.42, 0.25);
    const bubbleVisor = new THREE.Mesh(new THREE.SphereGeometry(0.36, 24, 24), goldMat);
    bubbleVisor.position.set(0, 0.42, 0.22);
    headBone.add(visorFrame, bubbleVisor);

    // Oxygen control box with buttons & twin hoses
    const controlBox = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.35, 0.15), whiteMat);
    controlBox.position.set(0, 0.1, 0.42);
    bodyBone.add(controlBox);

    // Oxygen Backpack
    const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.72, 0.32), whiteMat);
    backpack.position.set(0, 0.05, -0.42);
    for (const side of [-0.18, 0.18]) {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.6, 16), darkMetalMat);
      tank.position.set(side, 0.05, -0.45);
      bodyBone.add(tank);
    }
    bodyBone.add(backpack);
  } else if (tid === 'panda') {
    // Black fluffy panda ears
    for (const side of [-0.35, 0.35]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), blackMat);
      ear.position.set(side, 0.75, 0);
      headBone.add(ear);
    }

    // Black eye patch rings & 3D eyes
    for (const side of [-0.22, 0.22]) {
      const patch = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), blackMat);
      patch.scale.set(1.2, 0.9, 0.4);
      patch.position.set(side, 0.42, 0.38);

      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), whiteMat);
      sclera.position.set(side, 0.42, 0.42);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 10), blackMat);
      pupil.position.set(side, 0.42, 0.48);

      headBone.add(patch, sclera, pupil);
    }

    // White snout with black nose button
    const snout = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), whiteMat);
    snout.scale.set(1.1, 0.8, 0.8);
    snout.position.set(0, 0.32, 0.42);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), blackMat);
    nose.position.set(0, 0.36, 0.56);
    headBone.add(snout, nose);
  } else if (tid === 'unicorn') {
    // Golden Spiral Horn
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.6, 16), goldMat);
    horn.rotation.x = -0.3;
    horn.position.set(0, 0.82, 0.25);
    headBone.add(horn);

    // Pointed Horse Ears
    for (const side of [-0.25, 0.25]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.26, 8), partMaterial);
      ear.position.set(side, 0.75, -0.1);
      headBone.add(ear);
    }

    // Layered 3D Wings
    const wingMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    for (const [armBone, sideMult] of [[leftArmBone, -1], [rightArmBone, 1]] as const) {
      const wingGroup = new THREE.Group();
      wingGroup.position.set(sideMult * 0.2, 0.1, 0);
      for (let f = 0; f < 3; f++) {
        const feather = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.02), wingMat);
        feather.rotation.z = sideMult * (0.3 + f * 0.2);
        feather.position.set(sideMult * f * 0.12, -f * 0.08, 0);
        wingGroup.add(feather);
      }
      armBone.add(wingGroup);
    }

    // Hooves on legs
    for (const legBone of [leftLegBone, rightLegBone]) {
      const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.14, 16), goldMat);
      hoof.position.set(0, -0.62, 0);
      legBone.add(hoof);
    }
  } else if (tid === 'cat') {
    // Pointed Cat Ears
    const innerEarMat = new THREE.MeshStandardMaterial({ color: 0xf472b6 });
    for (const side of [-0.28, 0.28]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.3, 8), partMaterial);
      ear.position.set(side, 0.75, 0);
      const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.22, 8), innerEarMat);
      innerEar.position.set(side * 0.95, 0.75, 0.04);
      headBone.add(ear, innerEar);
    }

    // Whiskers & Nose
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), innerEarMat);
    nose.position.set(0, 0.35, 0.44);
    headBone.add(nose);

    // Bell Collar around neck
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.04, 8, 20), innerEarMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 0.02, 0);
    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), goldMat);
    bell.position.set(0, -0.05, 0.38);
    headBone.add(collar, bell);

    // Paw Pads
    for (const legBone of [leftLegBone, rightLegBone]) {
      const pawPad = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), innerEarMat);
      pawPad.scale.set(1, 0.4, 1);
      pawPad.position.set(0, -0.48, 0.05);
      legBone.add(pawPad);
    }
  } else if (tid === 'rocket') {
    // Metallic Nose Cone on top with red beacon tip
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.7, 24), darkMetalMat);
    nose.position.set(0, 0.8, 0);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), fireMat);
    beacon.position.set(0, 1.15, 0);
    headBone.add(nose, beacon);

    // Glass Porthole Window on Chest
    const windowRing = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.04, 12, 24), darkMetalMat);
    windowRing.position.set(0, 0.1, 0.38);
    const windowGlass = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), glowMat);
    windowGlass.position.set(0, 0.1, 0.35);
    bodyBone.add(windowRing, windowGlass);

    // Stabilizer Fins
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.45), darkMetalMat);
      fin.position.set(Math.cos(angle) * 0.5, -0.2, Math.sin(angle) * 0.5);
      fin.rotation.y = -angle;
      bodyBone.add(fin);
    }

    // Main bottom fire flame cone
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.8, 16), fireMat);
    flame.rotation.x = Math.PI;
    flame.position.set(0, -0.6, 0);
    tailBone.add(flame);
  } else if (tid === 'monster') {
    // 3 Eyestalks with 3D Glossy Eyeballs
    const offsets = [
      { x: -0.24, y: 0.62, z: 0 },
      { x: 0.0, y: 0.76, z: 0.05 },
      { x: 0.24, y: 0.62, z: 0 },
    ];
    offsets.forEach((pos) => {
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.28), partMaterial);
      stalk.position.set(pos.x, pos.y, pos.z);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 16), whiteMat);
      eye.position.set(pos.x, pos.y + 0.16, pos.z);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 12), blackMat);
      pupil.position.set(pos.x, pos.y + 0.16, pos.z + 0.09);
      headBone.add(stalk, eye, pupil);
    });

    // Curved Monster Horns
    for (const side of [-0.38, 0.38]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.35, 12), darkMetalMat);
      horn.rotation.z = -side * 0.5;
      horn.position.set(side, 0.55, -0.1);
      headBone.add(horn);
    }
  } else if (tid === 'hero') {
    // Hero Mask / Visor
    const mask = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.2, 0.16), darkMetalMat);
    mask.position.set(0, 0.38, 0.28);
    headBone.add(mask);

    // Hero Emblem Shield Badge on Chest
    const badge = new THREE.Mesh(new THREE.OctahedronGeometry(0.2), goldMat);
    badge.scale.set(1, 1, 0.2);
    badge.position.set(0, 0.15, 0.34);
    bodyBone.add(badge);

    // Flowing 3D Cape attached behind shoulders
    const capeMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, side: THREE.DoubleSide });
    const capeGeo = new THREE.PlaneGeometry(0.95, 1.25, 8, 8);
    const capeMesh = new THREE.Mesh(capeGeo, capeMat);
    capeMesh.position.set(0, 0.1, -0.34);
    capeMesh.rotation.x = 0.2;
    bodyBone.add(capeMesh);
  } else {
    // Default / Custom Bear Mascot Ears
    for (const side of [-0.3, 0.3]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), partMaterial);
      ear.position.set(side, 0.68, 0);
      headBone.add(ear);
    }
  }
}

export function buildPaperCutoutMesh(
  drawingDataUrl: string,
  _depthThickness = 0.12,
  templateId = 'blank'
): THREE.Group {
  const rootGroup = new THREE.Group();

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(drawingDataUrl);
  texture.colorSpace = THREE.SRGBColorSpace;

  const partMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.3,
    metalness: 0.05,
    side: THREE.DoubleSide,
    alphaTest: 0.05,
  });

  // Articulated Bone Hierarchy
  const bodyBone = new THREE.Group();
  bodyBone.position.set(0, 1.0, 0);
  rootGroup.add(bodyBone);

  const headBone = new THREE.Group();
  const leftArmBone = new THREE.Group();
  const rightArmBone = new THREE.Group();
  const leftLegBone = new THREE.Group();
  const rightLegBone = new THREE.Group();
  const tailBone = new THREE.Group();

  const cfg = getTemplateRigConfig(templateId);

  // 1. Body Mesh
  const bodyGeo = createVolumetric3DPartGeometry(cfg.body);
  const bodyMesh = new THREE.Mesh(bodyGeo, partMaterial);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  bodyBone.add(bodyMesh);

  // 2. Head
  headBone.position.set(cfg.head.posX, cfg.head.posY, cfg.head.posZ);
  bodyBone.add(headBone);
  const headGeo = createVolumetric3DPartGeometry(cfg.head);
  const headMesh = new THREE.Mesh(headGeo, partMaterial);
  headMesh.position.set(0, cfg.head.h / 2, 0);
  headMesh.castShadow = true;
  headBone.add(headMesh);

  // 3. Left Arm / Wing / Fin
  leftArmBone.position.set(cfg.leftArm.posX, cfg.leftArm.posY, cfg.leftArm.posZ);
  bodyBone.add(leftArmBone);
  const lArmGeo = createVolumetric3DPartGeometry(cfg.leftArm);
  const lArmMesh = new THREE.Mesh(lArmGeo, partMaterial);
  lArmMesh.position.set(-cfg.leftArm.w / 2, -cfg.leftArm.h / 2, 0);
  lArmMesh.castShadow = true;
  leftArmBone.add(lArmMesh);

  // 4. Right Arm / Wing / Fin
  rightArmBone.position.set(cfg.rightArm.posX, cfg.rightArm.posY, cfg.rightArm.posZ);
  bodyBone.add(rightArmBone);
  const rArmGeo = createVolumetric3DPartGeometry(cfg.rightArm);
  const rArmMesh = new THREE.Mesh(rArmGeo, partMaterial);
  rArmMesh.position.set(cfg.rightArm.w / 2, -cfg.rightArm.h / 2, 0);
  rArmMesh.castShadow = true;
  rightArmBone.add(rArmMesh);

  // 5. Left Leg / Paw
  leftLegBone.position.set(cfg.leftLeg.posX, cfg.leftLeg.posY, cfg.leftLeg.posZ);
  bodyBone.add(leftLegBone);
  const lLegGeo = createVolumetric3DPartGeometry(cfg.leftLeg);
  const lLegMesh = new THREE.Mesh(lLegGeo, partMaterial);
  lLegMesh.position.set(0, -cfg.leftLeg.h / 2, 0);
  lLegMesh.castShadow = true;
  leftLegBone.add(lLegMesh);

  // 6. Right Leg / Paw
  rightLegBone.position.set(cfg.rightLeg.posX, cfg.rightLeg.posY, cfg.rightLeg.posZ);
  bodyBone.add(rightLegBone);
  const rLegGeo = createVolumetric3DPartGeometry(cfg.rightLeg);
  const rLegMesh = new THREE.Mesh(rLegGeo, partMaterial);
  rLegMesh.position.set(0, -cfg.rightLeg.h / 2, 0);
  rLegMesh.castShadow = true;
  rightLegBone.add(rLegMesh);

  // 7. Tail / Thruster Flame
  tailBone.position.set(cfg.tail.posX, cfg.tail.posY, cfg.tail.posZ);
  bodyBone.add(tailBone);
  const tailGeo = createVolumetric3DPartGeometry(cfg.tail);

  // Rocket thruster special flame material
  let tailMat = partMaterial;
  if (templateId.toLowerCase() === 'rocket') {
    tailMat = new THREE.MeshStandardMaterial({
      map: texture,
      emissive: new THREE.Color(0xffaa00),
      emissiveIntensity: 0.7,
      roughness: 0.2,
      side: THREE.DoubleSide,
    });
  }

  const tailMesh = new THREE.Mesh(tailGeo, tailMat);
  tailMesh.position.set(cfg.tail.offsetX || 0, cfg.tail.offsetY || -cfg.tail.h / 2, 0);
  tailMesh.castShadow = true;
  tailBone.add(tailMesh);

  // --- Attach Rich Full 3D Model Anatomical Features for Each Template ---
  attachTemplate3DFeatures(
    templateId.toLowerCase(),
    headBone,
    bodyBone,
    leftArmBone,
    rightArmBone,
    leftLegBone,
    rightLegBone,
    tailBone,
    partMaterial
  );

  // Ground shadow disc
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
  rootGroup.add(shadowDisc);

  // Store bone references for dynamic animation
  (rootGroup as any).articulatedBones = {
    bodyBone,
    headBone,
    leftArmBone,
    rightArmBone,
    leftLegBone,
    rightLegBone,
    tailBone,
    templateId,
  } as ArticulatedBones;

  return rootGroup;
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
