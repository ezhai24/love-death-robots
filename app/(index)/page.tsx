"use client";

import { AnimatePresence } from "framer-motion";

import { useProgress } from "@react-three/drei";

import FullPageLoader from "@/app/components/FullPageLoader";

import Canvas from "./Canvas";
import TrailerModal from "./TrailerModal";

export default function Home() {
  const { progress } = useProgress();

  return (
    <>
      <AnimatePresence>
        {progress < 100 && <FullPageLoader key="loader" />}
      </AnimatePresence>

      <Canvas />
      <TrailerModal className="absolute bottom-10 left-[5%] z-10" />
    </>
  );
}
