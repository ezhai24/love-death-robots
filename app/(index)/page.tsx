"use client";

import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas className="h-screen">
      <Box />
      <OrbitControls />
    </Canvas>
  );
}
