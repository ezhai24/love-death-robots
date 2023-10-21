import * as THREE from "three";

import { useRef } from "react";

import { Center, Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { getViewportHeightAtDepth } from "@/app/utils";

import { CAMERA_SETTINGS } from "./Canvas";
import { SCENE_MARGIN_X_TO_VIEWPORT_RATIO } from "./ScrollableScene";

const DescriptionSection = () => {
  const scroll = useScroll();
  const descSectionRef = useRef<THREE.Group | null>(null);

  const sectionZ = 2;

  const viewportHeight = getViewportHeightAtDepth(sectionZ, CAMERA_SETTINGS);
  const viewportWidth =
    viewportHeight * (window.innerWidth / window.innerHeight);
  const marginX = viewportWidth * (SCENE_MARGIN_X_TO_VIEWPORT_RATIO + 0.1);

  const sectionX = 0 + viewportWidth / 2 - marginX;
  const sectionY = -viewportHeight / 2 - viewportHeight * 2.35;

  useFrame(() => {
    if (descSectionRef.current) {
      const dampFactor = 4 * scroll.range(1 / 2, 4 / 5);
      descSectionRef.current.position.y = sectionY - dampFactor;
    }
  });

  return (
    <Center
      ref={descSectionRef}
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
        Stories
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
        Terrifying creatures, wicked surprised {`\n`}
        and dark comedy converge in this NSFW {`\n`}
        anthology of animated stories.
      </Text>
    </Center>
  );
};

export default DescriptionSection;
