import { Environment } from "@react-three/drei";
import { Canvas as R3FCanvas } from "@react-three/fiber";

import { ScrollableScene } from "./ScrollableScene";

export const CAMERA_SETTINGS = { fov: 50 };

const Canvas = () => {
  return (
    <R3FCanvas className="h-screen" camera={CAMERA_SETTINGS}>
      <Environment files="/assets/abandoned-city.hdr" background blur={0.1} />
      <directionalLight intensity={1.5} position={[4, 0, 5]} />

      <ScrollableScene />
    </R3FCanvas>
  );
};

export default Canvas;
