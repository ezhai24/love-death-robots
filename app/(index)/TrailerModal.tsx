import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { externalRoutes } from "../routes";

interface Props {
  className?: string;
}
const TrailerModal = (props: Props) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className={`${className} text-botgray flex items-center text-2xl hover:cursor-pointer `}
      >
        <FaPlay />
        <div className="ml-2 text-sm leading-snug md:text-base">
          <div>Watch the</div>
          <div>S3 Trailer</div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="trailerModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/80"
          >
            <div
              onClick={closeModal}
              className="text-botgray absolute right-5 top-5 hover:cursor-pointer"
            >
              <IoCloseOutline fontSize="32px" />
            </div>
            <iframe
              className="aspect-video max-h-[90%] w-11/12"
              src={externalRoutes.ytLDRS3Trailer}
              title="YouTube video player for Love, Death & Robots Season 3 trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TrailerModal;
