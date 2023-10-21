import * as THREE from "three";

import { useRef } from "react";

import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { getViewportHeightAtDepth } from "@/app/utils";

import { CAMERA_SETTINGS } from "./page";
import { SCENE_MARGIN_X_TO_VIEWPORT_RATIO } from "./ScrollableScene";

const DirectorSection = () => {
  const scroll = useScroll();
  const directorTextRef = useRef<THREE.Group | null>(null);

  const sectionZ = -3;

  const viewportHeight = getViewportHeightAtDepth(sectionZ, CAMERA_SETTINGS);
  const viewportWidth =
    viewportHeight * (window.innerWidth / window.innerHeight);
  const marginX = viewportWidth * SCENE_MARGIN_X_TO_VIEWPORT_RATIO;

  const sectionX = 0 - viewportWidth / 2 + marginX;

  useFrame(() => {
    if (directorTextRef.current) {
      const translationOffset = scroll.range(15 / 100, 74 / 100);
      directorTextRef.current.position.y = 7.2 + 2 * translationOffset;
    }
  });

  return (
    <group ref={directorTextRef} position={[sectionX, 0, sectionZ]}>
      <Text
        position={[0, 0.62, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.18}
        letterSpacing={0.55}
      >
        Created by
      </Text>
      <Text
        position={[0, 0, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.6}
        letterSpacing={0.2}
      >
        Tim
      </Text>
      <Text
        position={[0, -0.72, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={1}
      >
        Miller
      </Text>
    </group>
  );
};

export default DirectorSection;
