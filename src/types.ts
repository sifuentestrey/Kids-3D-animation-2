export type BoneId = 
  | 'body'
  | 'head'
  | 'leftArm'
  | 'rightArm'
  | 'leftLeg'
  | 'rightLeg'
  | 'tail'
  | 'accessory';

export interface Vector3D {
  x: number; // degrees for rotation, units for position
  y: number;
  z: number;
}

export interface BoneTransform {
  rotation: Vector3D;
  position?: Vector3D;
}

export type CharacterPose = Record<BoneId, BoneTransform>;

export interface Keyframe {
  id: string;
  time: number; // seconds, e.g. 0.0, 0.5, 1.0, 1.5...
  pose: CharacterPose;
  label?: string;
}

export type CharacterType = 
  | 'robot' 
  | 'monster' 
  | 'astronaut' 
  | 'dino' 
  | 'blocky' 
  | 'panda' 
  | 'rocket'
  | 'doodle';

export interface CharacterColors {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  joints: string;
}

export interface CharacterProp {
  id: string;
  name: string;
  type: 'wand' | 'shield' | 'sword' | 'balloon' | 'star' | 'rocket' | 'none';
  color: string;
}

export interface CharacterModelConfig {
  type: CharacterType;
  name: string;
  colors: CharacterColors;
  prop: CharacterProp;
  scale: number;
  wireframe: boolean;
  drawingDataUrl?: string;
}

export type EnvironmentTheme = 
  | 'kidsland'
  | 'candyland' 
  | 'toybox'
  | 'fairytale'
  | 'playroom' 
  | 'space' 
  | 'beach' 
  | 'neon';

export interface EnvironmentConfig {
  theme: EnvironmentTheme;
  showGrid: boolean;
  gridColor: string;
  bgColor: string;
  groundColor: string;
  lightingIntensity: number;
  particlesEnabled: boolean;
  fogEnabled: boolean;
  cameraPreset: 'perspective' | 'front' | 'side' | 'top' | 'cinematic';
}

export interface PresetPose {
  id: string;
  name: string;
  iconName: string;
  pose: CharacterPose;
}

export interface AnimationClip {
  id: string;
  name: string;
  description: string;
  iconName: string;
  keyframes: Keyframe[];
}

export type BehaviorMode = 
  | 'wander'   // Autonomous roaming & exploring
  | 'bounce'   // Constantly hopping and flipping
  | 'dance'    // Grooving and swaying side-to-side
  | 'follow'   // Follows kid's cursor/target click
  | 'sleep'    // Snoring gently under the sun
  | 'crazy'    // Fast spinning, hyper jumps & sparkles
  | 'manual';  // Kid is driving directly with keys/joystick

export type ToyType = 
  | 'trampoline'
  | 'beachball'
  | 'candy_tree'
  | 'magic_portal'
  | 'bounce_pad'
  | 'treat_apple';

export interface PlaygroundToy {
  id: string;
  type: ToyType;
  name?: string;
  position: [number, number, number];
  color: string;
  scale?: number;
}

export interface WorldCreature {
  id: string;
  name: string;
  drawingDataUrl: string; // cutout PNG texture
  originalPaperUrl?: string; // original photo taken by parent/child
  position: [number, number, number]; // [x, y, z] in 3D space
  rotationY: number; // facing angle
  scale: number;
  behavior: BehaviorMode;
  personality: string; // e.g. "Friendly Dragon", "Giggly Blob"
  soundFx?: 'boing' | 'pop' | 'march' | 'fanfare' | 'giggle';
  isControlled?: boolean; // Is currently directed by kid controls
  targetPosition?: [number, number]; // [x, z] destination when clicked
  heightOffset?: number; // jumping/bouncing height offset
  tiltAngle?: number; // waddling angle
  depthThickness: number; // 2.5D extruded paper depth thickness
}

export interface ProjectData {
  id: string;
  title: string;
  character: CharacterModelConfig;
  environment: EnvironmentConfig;
  duration: number; // total animation length in seconds
  fps: number; // e.g. 12, 24, 30, 60
  loop: boolean;
  keyframes: Keyframe[];
  creatures?: WorldCreature[];
  toys?: PlaygroundToy[];
  soundtrack?: string;
  updatedAt: string;
}
