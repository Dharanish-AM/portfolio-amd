import { motion } from "framer-motion";

export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />
      
      {/* Moving Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[120px]" 
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[100px]" 
      />

      <motion.div 
        animate={{ 
           scale: [1, 1.3, 1],
           opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px]"
      />
    </div>
  );
};
