import * as THREE from "three";
import { useRef } from "react";

import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import Xbot from "./Xbot";

const Scene = () => {
  const xbotRef = useRef<THREE.Group | null>(null);
  const scroll = useScroll();

  useFrame(() => {
    const rotationOffset =
      THREE.MathUtils.degToRad(-90) -
      THREE.MathUtils.degToRad(scroll.offset * 360);
    if (xbotRef.current) {
      xbotRef.current.rotation.y = rotationOffset;
    }
  });

  return (
    <Scroll>
      <Xbot ref={xbotRef} scale={0.25} />
    </Scroll>
  );
};

export default Scene;
