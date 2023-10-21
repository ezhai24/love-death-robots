const r3fCameraDefaults = {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: [0, 0, 5],
};

export const getViewportHeightAtDepth = (
  depth: number,
  camera: { fov?: number; position?: [x: number, y: number, z: number] } = {},
) => {
  const defaults = r3fCameraDefaults;

  // compensate for cameras not positioned at z=0
  const cameraPostion = camera.position ?? defaults.position;
  const cameraOffset = cameraPostion[2];
  if (depth < cameraOffset) depth -= cameraOffset;
  else depth += cameraOffset;

  // vertical fov in radians
  const fov = camera.fov ?? defaults.fov;
  const vFov = (fov * Math.PI) / 180;

  // Math.abs to ensure the result is always positive
  return 2 * Math.tan(vFov / 2) * Math.abs(depth);
};

export const getViewportWidthAtDepth = (
  depth: number,
  aspect: number,
  camera: { fov?: number; position?: [x: number, y: number, z: number] } = {},
) => {
  const height = getViewportHeightAtDepth(depth, camera);
  return height * aspect;
};
