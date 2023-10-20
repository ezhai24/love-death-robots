import * as THREE from "three";

import { motion } from "framer-motion";
import { useRef } from "react";

import { Scroll, useScroll, Svg, Text, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import { externalRoutes } from "../routes";

import Xbot from "./Xbot";

const Scene = () => {
  const xbotRef = useRef<THREE.Group | null>(null);

  const directorTextRef = useRef<THREE.Group | null>(null);
  const descTextRef = useRef<THREE.Group | null>(null);
  const watchTextRef = useRef<THREE.Group | null>(null);

  const scroll = useScroll();

  useFrame(() => {
    if (xbotRef.current) {
      const rotationOffset =
        THREE.MathUtils.degToRad(-90) -
        THREE.MathUtils.degToRad(scroll.offset * 360);
      xbotRef.current.rotation.y = rotationOffset;
    }

    if (directorTextRef.current) {
      const translationOffset = scroll.range(15 / 100, 74 / 100);
      directorTextRef.current.position.y = 7.2 + 2 * translationOffset;
    }

    if (descTextRef.current) {
      const translationOffset = scroll.range(38 / 100, 56 / 100);
      descTextRef.current.position.y = 6.8 - 3.2 * translationOffset;
    }

    if (watchTextRef.current) {
      const translationOffset = scroll.range(60 / 100, 40 / 100);
      watchTextRef.current.position.y = 4.2 - 2.6 * translationOffset;
    }
  });

  return (
    <Scroll>
      <Xbot ref={xbotRef} scale={0.25} />

      <Svg
        position={[-4.91, 16, -3]}
        src="/assets/ldrTitleLogo.svg"
        scale={0.132}
      />

      <group ref={directorTextRef} position={[-4.5, 7.2, -3]}>
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

      <group ref={descTextRef} position={[0.4, 6.8, 2]}>
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
      </group>

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
    </Scroll>
  );
};

export default Scene;
