"use client";

import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";

export default function Home() {
  return (
    <Canvas
      className="h-screen"
      camera={{ fov: 10, position: [0, 2.7, 5], rotation: [0, 0, 0] }}
    >
      <directionalLight position={[1, 10, 10]} />

      <Scene />
    </Canvas>
  );
}
