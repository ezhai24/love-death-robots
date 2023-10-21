"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { ScrollableScene } from "./ScrollableScene";
import TrailerModal from "./TrailerModal";

export default function Home() {
  return (
    <>
      <Canvas className="h-screen" camera={{ fov: 50 }}>
        <Environment files="/assets/abandoned-city.hdr" background blur={0.1} />
        <directionalLight intensity={1.5} position={[4, 0, 5]} />

        <ScrollableScene />
      </Canvas>

      <TrailerModal className="absolute bottom-10 left-[5%] z-10" />
    </>
  );
}
