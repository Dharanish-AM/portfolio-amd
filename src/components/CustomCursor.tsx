import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);

      const target = e.target as HTMLElement;
      if (target) {
        setIsPointer(
          target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            target.closest("a") !== null ||
            target.closest("button") !== null ||
            target.closest(".hover-target") !== null ||
            target.closest("[role='button']") !== null
        );
      }
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[100] hidden md:block mix-blend-difference bg-white"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[100] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isPointer ? 2.5 : 0,
          opacity: isPointer ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <span className="text-[3px] font-bold text-black tracking-widest mt-0.5">VIEW</span>
      </motion.div>
    </>
  );
};
