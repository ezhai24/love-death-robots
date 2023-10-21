"use client";

import Canvas from "./Canvas";
import TrailerModal from "./TrailerModal";

export default function Home() {
  return (
    <>
      <Canvas />
      <TrailerModal className="absolute bottom-10 left-[5%] z-10" />
    </>
  );
}
