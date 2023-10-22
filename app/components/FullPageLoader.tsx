import { useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

import { useProgress } from "@react-three/drei";

const FullPageLoader = () => {
  const { progress } = useProgress();

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      animate(
        [
          [".eye", { height: 5 }, { duration: 0.2 }],
          [".eye", { height: 40 }, { duration: 0.2 }],
          [".eye", { height: 5 }, { delay: 1, duration: 0.2 }],
          [".eye", { height: 40 }, { duration: 0.2 }],
          [".eye", { height: 5 }, { delay: 0.3, duration: 0.2 }],
          [".eye", { height: 40 }, { duration: 0.2 }],
        ],
        { repeat: Infinity, repeatDelay: 2 },
      );
    };
    animateLoader();
  });

  return (
    <motion.div
      ref={scope}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.5 }}
      className="absolute z-20 flex h-screen w-full flex-col items-center justify-center gap-24 bg-black"
    >
      {/* Face */}
      <div className="flex flex-col">
        {/* Eyes */}
        <div className="m-6 flex h-10 items-center gap-36">
          <motion.div
            initial={{ height: 40 }}
            className="eye w-10 rounded-full bg-white"
          />
          <motion.div
            initial={{ height: 40 }}
            className="eye w-10 rounded-full bg-white"
          />
        </div>

        {/* Mouth */}
        <div className="mx-auto h-2 w-10 rounded-full bg-white" />
      </div>

      {/* Progress bar */}
      <div className="text-botgray/50 absolute bottom-36 text-center text-xl">
        Loading: {Math.trunc(progress)}%
      </div>
    </motion.div>
  );
};

export default FullPageLoader;
