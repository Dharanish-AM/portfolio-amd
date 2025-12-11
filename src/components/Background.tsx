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
        <div className="absolute top-[-50%] right-[-20%] w-[1000px] h-[1000px] text-[var(--accent-primary)]/10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M44.5,-76.4C58.9,-69.3,71.9,-59.1,81.3,-46.8C90.7,-34.5,96.6,-20.1,95.6,-6.1C94.6,7.9,86.7,21.5,77.4,33.4C68.1,45.3,57.4,55.5,45.4,63.4C33.4,71.3,20.1,77,-6.2,87.7C-32.5,98.4,-71.8,114.1,-93.6,100.8C-115.4,87.5,-119.7,45.2,-114.3,9.4C-108.9,-26.4,-93.8,-55.7,-74.6,-74.2C-55.4,-92.7,-32.1,-100.4,-11.2,-94.9C9.7,-89.4,30.1,-83.5,44.5,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
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
        className="absolute w-[600px] h-[600px] bg-[var(--accent-primary)]/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen will-change-transform"
      />

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] bg-[var(--accent-primary)]/10 rounded-full blur-[60px] pointer-events-none mix-blend-screen will-change-transform"
        style={{ top: "10%", left: "-10%" }}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--accent-primary)]/10 rounded-full blur-[80px] will-change-transform"
      />

      {/* Removed 2 extra orbs to reduce layer count and composition load */}

      {/* Static deep glow instead of animated */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[80px]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />
    </div>
  );
};
