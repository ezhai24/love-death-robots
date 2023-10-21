import * as THREE from "three";

import { useRef } from "react";

import { Scroll, useScroll, Svg, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import { SCENE_MARGIN_X_TO_VIEWPORT_RATIO } from "./ScrollableScene";
import { getViewportHeightAtDepth } from "../utils";
import { CAMERA_SETTINGS } from "./Canvas";

const ScrollProgress = () => {
  const progressRef = useRef<THREE.Group | null>(null);

  const scroll = useScroll();
  const { viewport } = useThree();

  const positionZ = 3;

  const viewportHeight = getViewportHeightAtDepth(positionZ, CAMERA_SETTINGS);
  const viewportWidth =
    viewportHeight * (window.innerWidth / window.innerHeight);
  const marginX = viewportWidth * SCENE_MARGIN_X_TO_VIEWPORT_RATIO;
  const positionX = 0 + viewportWidth / 2 - marginX;

  const progressHeight = viewportHeight * 0.5;
  const progressStart = progressHeight / 2;

  useFrame(() => {
    if (progressRef.current) {
      const progress = scroll.range(0, 1);
      const progressOffset = progress * progressHeight;
      progressRef.current.position.y = progressStart - progressOffset;
    }
  });

  return (
    <group position={[positionX, 0, positionZ]}>
      <Center
        ref={progressRef}
        position={[0, progressStart, 0]}
        rotation={[0, 0, 0.1]}
      >
        <Svg src="/assets/xbotHead.svg" scale={0.0012} />
      </Center>

      <Center position={[0, 0, 0]}>
        <mesh>
          <planeGeometry args={[0.003, progressHeight, 1]} />
          <meshStandardMaterial />
        </mesh>
      </Center>
    </group>
  );
};

export default ScrollProgress;
