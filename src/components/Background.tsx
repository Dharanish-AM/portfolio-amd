import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Reduced stiffness for smoother, less jittery movement
  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Throttled mouse move could be better, but direct update is usually fine if the rest is optimized
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030014]">
      {/* Deep Purple Gradient Base - Static */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#030014] to-[#030014]" />

      {/* Abstract Geometric Overlay - Reduced rotation speed and complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.svg
          // Removed continuous rotation which forces re-paints
          className="absolute top-[-50%] right-[-20%] w-[1000px] h-[1000px] text-violet-900/10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path d="M50 0 L50 100" stroke="currentColor" strokeWidth="0.2" />
          <path d="M0 50 L100 50" stroke="currentColor" strokeWidth="0.2" />
        </motion.svg>
      </div>

      {/* Noise Texture - Static */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Mouse Follower Glow - Optimized will-change */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        // Reduced blur from 120px to 60px for performance
        // Added will-change-transform to promote to compositor layer
        className="absolute w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen will-change-transform"
      />

      {/* Floating Orbs - Reduced count and blur radius */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-800/10 rounded-full blur-[80px] will-change-transform"
      />

      {/* Removed 2 extra orbs to reduce layer count and composition load */}

      {/* Static deep glow instead of animated */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[80px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />
    </div>
  );
};
