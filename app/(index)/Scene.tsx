import * as THREE from "three";

import { useRef } from "react";

import { Scroll, useScroll, Svg, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import DescriptionSection from "./DescriptionSection";
import DirectorSection from "./DirectorSection";
import WatchNowSection from "./WatchNowSection";
import Xbot from "./Xbot";

interface Props {
  onCalculateXbotHeight?: (height: number) => void;
}
const Scene = (props: Props) => {
  const { onCalculateXbotHeight } = props;

  const xbotRef = useRef<THREE.Group | null>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (xbotRef.current) {
      const rotationOffset =
        THREE.MathUtils.degToRad(-90) -
        THREE.MathUtils.degToRad(scroll.offset * 360);
      xbotRef.current.rotation.y = rotationOffset;
    }
  });

  return (
    <Scroll>
      <Xbot
        ref={xbotRef}
        scale={0.25}
        onCalculateXbotHeight={onCalculateXbotHeight}
      />

      <Center position={[0, 0.5, -3]}>
        <Svg
          position={[0, 0, 0]}
          src="/assets/ldrTitleLogo.svg"
          scale={0.132}
        />
      </Center>

      <DirectorSection />
      <DescriptionSection />
      <WatchNowSection />
    </Scroll>
  );
};

export default Scene;
