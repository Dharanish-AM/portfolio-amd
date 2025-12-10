import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-violet-500/0 group-hover:bg-violet-500/5 transition-colors duration-500" />
      {children}
    </motion.div>
  );
};
