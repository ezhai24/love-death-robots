import * as THREE from "three";

import { motion } from "framer-motion";
import { useRef } from "react";

import { Text, useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { externalRoutes } from "@/app/routes";
import { getViewportHeightAtDepth } from "@/app/utils";

import { CAMERA_SETTINGS } from "./Canvas";
import { SCENE_MARGIN_X_TO_VIEWPORT_RATIO } from "./ScrollableScene";

const WatchNowSection = () => {
  const scroll = useScroll();
  const watchSectionRef = useRef<THREE.Group | null>(null);

  const sectionZ = 2;

  const viewportHeight = getViewportHeightAtDepth(sectionZ, CAMERA_SETTINGS);
  const viewportWidth =
    viewportHeight * (window.innerWidth / window.innerHeight);
  const marginX = viewportWidth * (SCENE_MARGIN_X_TO_VIEWPORT_RATIO + 0.1);

  const sectionX = 0 - viewportWidth / 2 + marginX;
  const sectionY = -viewportHeight / 2 - viewportHeight * 3.25;

  useFrame(() => {
    if (watchSectionRef.current) {
      const dampFactor = 4 * scroll.range(2 / 3, 1);
      watchSectionRef.current.position.y = sectionY - dampFactor;
    }
  });

  return (
    <group ref={watchSectionRef} position={[sectionX, 0, sectionZ]}>
      <Text
        position={[0, 0.23, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.07}
        letterSpacing={0.55}
      >
        Watch online
      </Text>
      <Text
        position={[0, 0, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.23}
        letterSpacing={0.2}
      >
        Only on
      </Text>
      <Text
        onClick={() => console.log("clicked")}
        position={[0, -0.27, 0]}
        anchorX="left"
        color="white"
        font="/fonts/Bebas-Regular.ttf"
        fontSize={0.37}
      >
        Netflix
      </Text>
      <Html zIndexRange={[9, 0]} position={[0, -0.55, 0]}>
        <motion.a
          href={externalRoutes.netflixLDRTitle}
          whileHover={{
            backgroundColor: "var(--color-botred)",
            color: "#fff",
          }}
          className="absolute whitespace-nowrap rounded-full border-2 border-solid border-botgray bg-transparent px-10 py-3 text-botgray"
        >
          Watch now
        </motion.a>
      </Html>
    </group>
  );
};

export default WatchNowSection;
