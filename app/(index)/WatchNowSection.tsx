import * as THREE from "three";

import { motion } from "framer-motion";
import { useRef } from "react";

import { Text, useScroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { externalRoutes } from "../routes";

const WatchNowSection = () => {
  const scroll = useScroll();
  const watchTextRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (watchTextRef.current) {
      const translationOffset = scroll.range(60 / 100, 40 / 100);
      watchTextRef.current.position.y = 4.2 - 2.6 * translationOffset;
    }
  });

  return (
    <group ref={watchTextRef} position={[-1.7, 0, 2]}>
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
      <Html
        transform
        zIndexRange={[9, 0]}
        scale={0.15}
        position={[0.29, -0.65, 0]}
      >
        <motion.a
          href={externalRoutes.netflixLDRTitle}
          whileHover={{
            backgroundColor: "var(--color-botred)",
            color: "#fff",
          }}
          className="border-botgray text-botgray rounded-full border-2 border-solid bg-transparent px-10 py-3"
        >
          Watch now
        </motion.a>
      </Html>
    </group>
  );
};

export default WatchNowSection;
