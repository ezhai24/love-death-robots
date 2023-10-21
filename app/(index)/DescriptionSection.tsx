import * as THREE from "three";

import { useRef } from "react";

import { Center, Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { getViewportHeightAtDepth } from "@/app/utils";

import { CAMERA_SETTINGS } from "./page";
import { SCENE_MARGIN_X_TO_VIEWPORT_RATIO } from "./ScrollableScene";

const DescriptionSection = () => {
  const scroll = useScroll();
  const descTextRef = useRef<THREE.Group | null>(null);

  const sectionZ = 2;

  const viewportHeight = getViewportHeightAtDepth(sectionZ, CAMERA_SETTINGS);
  const viewportWidth =
    viewportHeight * (window.innerWidth / window.innerHeight);
  const marginX = viewportWidth * SCENE_MARGIN_X_TO_VIEWPORT_RATIO;

  const sectionX = 0 + viewportWidth / 2 - marginX;

  useFrame(() => {
    if (descTextRef.current) {
      const translationOffset = scroll.range(38 / 100, 56 / 100);
      descTextRef.current.position.y = 6.8 - 3.2 * translationOffset;
    }
  });

  return (
    <Center
      ref={descTextRef}
      position={[sectionX, 0, sectionZ]}
      precise={false}
      left
      onCentered={() => {}}
    >
      <Text
        position={[0, 0.27, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.23}
        letterSpacing={0.2}
      >
        Sci-Fi
      </Text>
      <Text
        position={[0, 0, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.37}
      >
        Television
      </Text>
      <Text
        position={[0, -0.35, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.07}
        lineHeight={1.2}
        letterSpacing={0.05}
      >
        Terrifying creatures, wicked surprised and {`\n`}
        dark comedy converge in this NSFW anthology {`\n`}
        of animated stories.
      </Text>
    </Center>
  );
};

export default DescriptionSection;
