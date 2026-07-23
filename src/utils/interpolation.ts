import { CharacterPose, Keyframe, Vector3D, BoneId, BoneTransform } from '../types';

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function lerpAngle(a: number, b: number, t: number): number {
  // Shortest path angle interpolation
  let delta = (b - a) % 360;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return a + delta * t;
}

export function smoothStep(t: number): number {
  return t * t * (3 - 2 * t); // Smooth easing
}

export function lerpVector3D(v1: Vector3D, v2: Vector3D, t: number, isRotation = true): Vector3D {
  const easeT = smoothStep(Math.max(0, Math.min(1, t)));
  return {
    x: isRotation ? lerpAngle(v1.x, v2.x, easeT) : lerp(v1.x, v2.x, easeT),
    y: isRotation ? lerpAngle(v1.y, v2.y, easeT) : lerp(v1.y, v2.y, easeT),
    z: isRotation ? lerpAngle(v1.z, v2.z, easeT) : lerp(v1.z, v2.z, easeT),
  };
}

export function getInterpolatedPose(
  keyframes: Keyframe[],
  currentTime: number
): CharacterPose {
  if (!keyframes || keyframes.length === 0) {
    throw new Error("No keyframes to interpolate");
  }

  // Sort keyframes by time
  const sorted = [...keyframes].sort((a, b) => a.time - b.time);

  // Before first keyframe
  if (currentTime <= sorted[0].time) {
    return sorted[0].pose;
  }

  // After last keyframe
  if (currentTime >= sorted[sorted.length - 1].time) {
    return sorted[sorted.length - 1].pose;
  }

  // Find surrounding keyframes
  let prevIndex = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (currentTime >= sorted[i].time && currentTime <= sorted[i + 1].time) {
      prevIndex = i;
      break;
    }
  }

  const k1 = sorted[prevIndex];
  const k2 = sorted[prevIndex + 1];

  const timeDiff = k2.time - k1.time;
  if (timeDiff <= 0.0001) {
    return k1.pose;
  }

  const t = (currentTime - k1.time) / timeDiff;

  const bones: BoneId[] = [
    'body',
    'head',
    'leftArm',
    'rightArm',
    'leftLeg',
    'rightLeg',
    'tail',
    'accessory',
  ];

  const interpolatedPose: Partial<CharacterPose> = {};

  for (const bone of bones) {
    const transform1: BoneTransform = k1.pose[bone] || { rotation: { x: 0, y: 0, z: 0 } };
    const transform2: BoneTransform = k2.pose[bone] || { rotation: { x: 0, y: 0, z: 0 } };

    const rot = lerpVector3D(transform1.rotation, transform2.rotation, t, true);

    let pos: Vector3D | undefined;
    if (transform1.position || transform2.position) {
      const p1 = transform1.position || { x: 0, y: 0, z: 0 };
      const p2 = transform2.position || { x: 0, y: 0, z: 0 };
      pos = lerpVector3D(p1, p2, t, false);
    }

    interpolatedPose[bone] = {
      rotation: rot,
      position: pos,
    };
  }

  return interpolatedPose as CharacterPose;
}
