import { CharacterPose, PresetPose, AnimationClip, CharacterModelConfig, EnvironmentConfig } from '../types';

export const DEFAULT_POSE: CharacterPose = {
  body: { rotation: { x: 0, y: 0, z: 0 }, position: { x: 0, y: 0, z: 0 } },
  head: { rotation: { x: 0, y: 0, z: 0 } },
  leftArm: { rotation: { x: 0, y: 0, z: 15 } },
  rightArm: { rotation: { x: 0, y: 0, z: -15 } },
  leftLeg: { rotation: { x: 0, y: 0, z: 0 } },
  rightLeg: { rotation: { x: 0, y: 0, z: 0 } },
  tail: { rotation: { x: 0, y: 0, z: 0 } },
  accessory: { rotation: { x: 0, y: 0, z: 0 } },
};

export const PRESET_POSES: PresetPose[] = [
  {
    id: 'neutral',
    name: 'T-Pose / Neutral',
    iconName: 'User',
    pose: DEFAULT_POSE,
  },
  {
    id: 'wave',
    name: 'Friendly Wave',
    iconName: 'Hand',
    pose: {
      ...DEFAULT_POSE,
      rightArm: { rotation: { x: 0, y: 0, z: -140 } },
      head: { rotation: { x: 10, y: -15, z: 5 } },
    },
  },
  {
    id: 'dance_party',
    name: 'Disco Dance',
    iconName: 'Music',
    pose: {
      ...DEFAULT_POSE,
      body: { rotation: { x: 5, y: 20, z: -10 }, position: { x: 0, y: 0.3, z: 0 } },
      leftArm: { rotation: { x: 45, y: -30, z: 120 } },
      rightArm: { rotation: { x: -30, y: 45, z: -110 } },
      leftLeg: { rotation: { x: -20, y: 0, z: -15 } },
      rightLeg: { rotation: { x: 25, y: 0, z: 15 } },
      head: { rotation: { x: -10, y: -20, z: 10 } },
    },
  },
  {
    id: 'superhero',
    name: 'Superhero Flight',
    iconName: 'Zap',
    pose: {
      ...DEFAULT_POSE,
      body: { rotation: { x: 75, y: 0, z: 0 }, position: { x: 0, y: 1.2, z: 0 } },
      head: { rotation: { x: -45, y: 0, z: 0 } },
      leftArm: { rotation: { x: 160, y: 0, z: 20 } },
      rightArm: { rotation: { x: 160, y: 0, z: -20 } },
      leftLeg: { rotation: { x: -15, y: 0, z: 10 } },
      rightLeg: { rotation: { x: -15, y: 0, z: -10 } },
    },
  },
  {
    id: 'jump',
    name: 'Joy Jump',
    iconName: 'Sparkles',
    pose: {
      ...DEFAULT_POSE,
      body: { rotation: { x: -10, y: 0, z: 0 }, position: { x: 0, y: 1.0, z: 0 } },
      leftArm: { rotation: { x: 0, y: 0, z: 140 } },
      rightArm: { rotation: { x: 0, y: 0, z: -140 } },
      leftLeg: { rotation: { x: 30, y: 0, z: -20 } },
      rightLeg: { rotation: { x: 30, y: 0, z: 20 } },
      head: { rotation: { x: -20, y: 0, z: 0 } },
    },
  },
  {
    id: 'dab',
    name: 'The Dab',
    iconName: 'Flame',
    pose: {
      ...DEFAULT_POSE,
      body: { rotation: { x: 10, y: -25, z: 0 } },
      head: { rotation: { x: 35, y: -30, z: -15 } },
      leftArm: { rotation: { x: 30, y: 45, z: 135 } },
      rightArm: { rotation: { x: 20, y: -45, z: -135 } },
    },
  },
  {
    id: 'curious',
    name: 'Curious Tilt',
    iconName: 'HelpCircle',
    pose: {
      ...DEFAULT_POSE,
      head: { rotation: { x: 5, y: 20, z: -25 } },
      leftArm: { rotation: { x: 20, y: 0, z: 30 } },
      rightArm: { rotation: { x: -10, y: 0, z: -20 } },
    },
  },
  {
    id: 'sleepy',
    name: 'Sleepy Nod',
    iconName: 'Moon',
    pose: {
      ...DEFAULT_POSE,
      body: { rotation: { x: 15, y: 0, z: 0 }, position: { x: 0, y: -0.2, z: 0 } },
      head: { rotation: { x: 45, y: 0, z: 10 } },
      leftArm: { rotation: { x: 20, y: 0, z: 10 } },
      rightArm: { rotation: { x: 20, y: 0, z: -10 } },
    },
  }
];

export const PRESET_CLIPS: AnimationClip[] = [
  {
    id: 'happy_wave_loop',
    name: 'Friendly Hello Wave',
    description: 'A cheerful double-hand wave that welcomes everyone.',
    iconName: 'Smile',
    keyframes: [
      {
        id: 'kf-1',
        time: 0.0,
        pose: DEFAULT_POSE,
        label: 'Start'
      },
      {
        id: 'kf-2',
        time: 0.5,
        pose: {
          ...DEFAULT_POSE,
          rightArm: { rotation: { x: 0, y: 0, z: -150 } },
          head: { rotation: { x: 5, y: -10, z: 5 } }
        },
        label: 'Raise Arm'
      },
      {
        id: 'kf-3',
        time: 1.0,
        pose: {
          ...DEFAULT_POSE,
          rightArm: { rotation: { x: 20, y: 0, z: -120 } },
          head: { rotation: { x: 5, y: 10, z: -5 } }
        },
        label: 'Wave Right'
      },
      {
        id: 'kf-4',
        time: 1.5,
        pose: {
          ...DEFAULT_POSE,
          rightArm: { rotation: { x: -20, y: 0, z: -160 } },
          head: { rotation: { x: 5, y: -10, z: 5 } }
        },
        label: 'Wave Left'
      },
      {
        id: 'kf-5',
        time: 2.0,
        pose: DEFAULT_POSE,
        label: 'End'
      }
    ]
  },
  {
    id: 'robot_pop_dance',
    name: 'Cartoon Robot Bounce',
    description: 'A funny boing dance with arm swings and body twists.',
    iconName: 'Activity',
    keyframes: [
      {
        id: 'r-1',
        time: 0.0,
        pose: DEFAULT_POSE,
        label: 'Ready'
      },
      {
        id: 'r-2',
        time: 0.4,
        pose: {
          ...DEFAULT_POSE,
          body: { rotation: { x: 10, y: -20, z: -5 }, position: { x: 0, y: -0.2, z: 0 } },
          leftArm: { rotation: { x: 60, y: 0, z: 45 } },
          rightArm: { rotation: { x: -30, y: 0, z: -80 } },
          leftLeg: { rotation: { x: 20, y: 0, z: -10 } },
          head: { rotation: { x: -10, y: 20, z: 0 } }
        },
        label: 'Squat & Twist'
      },
      {
        id: 'r-3',
        time: 0.8,
        pose: {
          ...DEFAULT_POSE,
          body: { rotation: { x: -10, y: 0, z: 0 }, position: { x: 0, y: 0.8, z: 0 } },
          leftArm: { rotation: { x: -30, y: 0, z: 140 } },
          rightArm: { rotation: { x: -30, y: 0, z: -140 } },
          leftLeg: { rotation: { x: -15, y: 0, z: -10 } },
          rightLeg: { rotation: { x: -15, y: 0, z: 10 } },
          head: { rotation: { x: -15, y: 0, z: 0 } }
        },
        label: 'Pop Up Jump!'
      },
      {
        id: 'r-4',
        time: 1.2,
        pose: {
          ...DEFAULT_POSE,
          body: { rotation: { x: 10, y: 20, z: 5 }, position: { x: 0, y: -0.2, z: 0 } },
          leftArm: { rotation: { x: -30, y: 0, z: 80 } },
          rightArm: { rotation: { x: 60, y: 0, z: -45 } },
          rightLeg: { rotation: { x: 20, y: 0, z: 10 } },
          head: { rotation: { x: -10, y: -20, z: 0 } }
        },
        label: 'Land & Opposite Twist'
      },
      {
        id: 'r-5',
        time: 1.6,
        pose: DEFAULT_POSE,
        label: 'Finish'
      }
    ]
  },
  {
    id: 'dino_roar_walk',
    name: 'Hero Walk & Stomp',
    description: 'Stepping forward proudly with marching legs and swing arms.',
    iconName: 'Footprints',
    keyframes: [
      { id: 'w-1', time: 0.0, pose: DEFAULT_POSE, label: 'Stand' },
      {
        id: 'w-2',
        time: 0.5,
        pose: {
          ...DEFAULT_POSE,
          body: { rotation: { x: 5, y: 10, z: -5 }, position: { x: 0, y: 0.2, z: 0.3 } },
          leftLeg: { rotation: { x: 40, y: 0, z: 0 } },
          rightLeg: { rotation: { x: -30, y: 0, z: 0 } },
          leftArm: { rotation: { x: -30, y: 0, z: 20 } },
          rightArm: { rotation: { x: 40, y: 0, z: -20 } },
          head: { rotation: { x: -5, y: -10, z: 0 } }
        },
        label: 'Left Step'
      },
      {
        id: 'w-3',
        time: 1.0,
        pose: {
          ...DEFAULT_POSE,
          body: { rotation: { x: 5, y: -10, z: 5 }, position: { x: 0, y: 0.2, z: 0.6 } },
          leftLeg: { rotation: { x: -30, y: 0, z: 0 } },
          rightLeg: { rotation: { x: 40, y: 0, z: 0 } },
          leftArm: { rotation: { x: 40, y: 0, z: 20 } },
          rightArm: { rotation: { x: -30, y: 0, z: -20 } },
          head: { rotation: { x: -5, y: 10, z: 0 } }
        },
        label: 'Right Step'
      },
      { id: 'w-4', time: 1.5, pose: DEFAULT_POSE, label: 'Return' }
    ]
  }
];

export const DEFAULT_CHARACTER: CharacterModelConfig = {
  type: 'robot',
  name: 'Sparky Mecha',
  colors: {
    primary: '#3b82f6', // bright blue
    secondary: '#f59e0b', // warm amber
    accent: '#10b981', // emerald green
    glow: '#38bdf8', // sky cyan glow
    joints: '#475569', // slate
  },
  prop: {
    id: 'star-1',
    name: 'Magic Star',
    type: 'star',
    color: '#facc15',
  },
  scale: 1,
  wireframe: false,
};

export const DEFAULT_ENVIRONMENT: EnvironmentConfig = {
  theme: 'kidsland',
  showGrid: true,
  gridColor: '#a855f7',
  bgColor: '#38bdf8',
  groundColor: '#4ade80',
  lightingIntensity: 1.4,
  particlesEnabled: true,
  fogEnabled: true,
  cameraPreset: 'perspective',
};
