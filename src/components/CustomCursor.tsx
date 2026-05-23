import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringSpringConfig = { stiffness: 350, damping: 28, mass: 0.6 };
  const springRingX = useSpring(mouseX, ringSpringConfig);
  const springRingY = useSpring(mouseY, ringSpringConfig);

  const dotSpringConfig = { stiffness: 800, damping: 35, mass: 0.2 };
  const springDotX = useSpring(mouseX, dotSpringConfig);
  const springDotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

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

    window.addEventListener("mousemove", mouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--accent-primary)]/30 pointer-events-none z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{
          x: springRingX,
          y: springRingY,
        }}
        animate={{
          scale: isPointer ? 1.6 : 1,
          borderColor: isPointer
            ? "var(--accent-primary)"
            : "rgba(167, 139, 250, 0.3)",
          backgroundColor: isPointer
            ? "rgba(167, 139, 250, 0.08)"
            : "rgba(167, 139, 250, 0)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--accent-primary)] pointer-events-none z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_var(--accent-primary)]"
        style={{
          x: springDotX,
          y: springDotY,
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
          opacity: isPointer ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </>
  );
};
