import { ScrollControls } from "@react-three/drei";
import Scene from "./Scene";

export const SCENE_MARGIN_TOP = 0.4;

export const ScrollableScene = () => {
  return (
    <ScrollControls pages={1.93} damping={2}>
      <Scene />
    </ScrollControls>
  );
};
