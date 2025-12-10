import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030014]">
      {/* Deep Purple Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-[#030014] to-[#030014]" />
      
      {/* Abstract Geometric Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.svg
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.4, rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-50%] right-[-20%] w-[1000px] h-[1000px] text-violet-900/10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
           <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
           <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" transform="rotate(20 50 50)" />
           <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" transform="rotate(40 50 50)" />
           <path d="M50 0 L50 100" stroke="currentColor" strokeWidth="0.2" />
           <path d="M0 50 L100 50" stroke="currentColor" strokeWidth="0.2" />
           <path d="M15 15 L85 85" stroke="currentColor" strokeWidth="0.2" />
           <path d="M85 15 L15 85" stroke="currentColor" strokeWidth="0.2" />
         </motion.svg>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none mix-blend-overlay" />
      
      {/* Mouse Follower Glow */}
      <motion.div 
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        className="absolute w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-800/20 rounded-full blur-[130px]" 
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -70, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-indigo-700/20 rounded-full blur-[120px]" 
      />

      <motion.div 
        animate={{ 
           scale: [1, 1.3, 1],
           opacity: [0.2, 0.4, 0.2],
           x: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-fuchsia-800/15 rounded-full blur-[100px]"
      />

      {/* Additional Deep Glows for richness */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] pointer-events-none" />
    </div>
  );
};
