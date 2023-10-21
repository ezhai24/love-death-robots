import { useState } from "react";

import { ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import Scene from "./Scene";

export const SCENE_MARGIN_TOP = 0.4;
export const SCENE_MARGIN_BOTTOM = 1.25;

export const ScrollableScene = () => {
  const { viewport } = useThree();
  const [xbotHeight, setXbotHeight] = useState(0);

  const numPages =
    (xbotHeight + SCENE_MARGIN_TOP + SCENE_MARGIN_BOTTOM) / viewport.height;

  const onCalculateXbotHeight = (height: number) => setXbotHeight(height);

  return (
    <ScrollControls pages={numPages} damping={2}>
      <Scene onCalculateXbotHeight={onCalculateXbotHeight} />
    </ScrollControls>
  );
};
