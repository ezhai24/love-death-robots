import { ScrollControls } from "@react-three/drei";
import Scene from "./Scene";

export const ScrollableScene = () => {
  return (
    <ScrollControls pages={1.93} damping={2}>
      <Scene />
    </ScrollControls>
  );
};
