import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      className={`group/glow relative overflow-hidden rounded-3xl will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};
