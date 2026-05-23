import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  isAccent: boolean;
}

export const Background = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const themeRef = useRef(theme);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 80 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const targetCount = Math.min(Math.max(Math.floor((window.innerWidth * window.innerHeight) / 15000), 40), 100);
      
      if (particles.length < targetCount) {
        const toAdd = targetCount - particles.length;
        for (let i = 0; i < toAdd; i++) {
          particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.1,
            isAccent: Math.random() > 0.6
          });
        }
      } else if (particles.length > targetCount) {
        particles.length = targetCount;
      }

      particles.forEach(p => {
        if (p.x > window.innerWidth) p.x = Math.random() * window.innerWidth;
        if (p.y > window.innerHeight) p.y = Math.random() * window.innerHeight;
      });
    };

    resizeCanvas();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const maxDist = 120;
      const maxDistSq = maxDist * maxDist;
      const mouseMaxDist = 180;
      const mouseMaxDistSq = mouseMaxDist * mouseMaxDist;
      const isDark = themeRef.current === "dark";

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > window.innerWidth) p1.vx *= -1;
        if (p1.y < 0 || p1.y > window.innerHeight) p1.vy *= -1;

        const colorStr = isDark
          ? (p1.isAccent ? "167, 139, 250" : "129, 140, 248")
          : (p1.isAccent ? "124, 58, 237" : "79, 70, 229");

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorStr}, ${p1.alpha})`;
        ctx.fill();

        if (mouseRef.current.active) {
          const dx = p1.x - mouseRef.current.x;
          const dy = p1.y - mouseRef.current.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < mouseMaxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / mouseMaxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${colorStr}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(167, 139, 250, ${alpha})`
              : `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      <div 
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage: theme === "dark"
            ? `radial-gradient(rgba(167, 139, 250, 0.15) 1.5px, transparent 1.5px)`
            : `radial-gradient(rgba(124, 58, 237, 0.15) 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className={`absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none mix-blend-screen will-change-transform ${
            theme === "dark"
              ? "bg-gradient-to-r from-violet-600/10 to-indigo-600/10"
              : "bg-gradient-to-r from-violet-400/5 to-indigo-400/5"
          }`}
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none mix-blend-screen will-change-transform ${
            theme === "dark"
              ? "bg-gradient-to-tr from-fuchsia-600/10 to-violet-600/10"
              : "bg-gradient-to-tr from-fuchsia-300/10 to-violet-300/10"
          }`}
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none mix-blend-screen will-change-transform ${
            theme === "dark"
              ? "bg-gradient-to-bl from-cyan-600/10 to-blue-600/10"
              : "bg-gradient-to-bl from-cyan-300/10 to-blue-300/10"
          }`}
        />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />
    </div>
  );
};
