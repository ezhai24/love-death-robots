import * as THREE from "three";

import { useRef } from "react";

import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const DescriptionSection = () => {
  const scroll = useScroll();
  const descTextRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (descTextRef.current) {
      const translationOffset = scroll.range(38 / 100, 56 / 100);
      descTextRef.current.position.y = 6.8 - 3.2 * translationOffset;
    }
  });

  return (
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
  );
};

export default DescriptionSection;
