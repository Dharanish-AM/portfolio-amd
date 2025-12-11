import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, type ReactElement } from "react";

export const Hero = () => {
  const { theme } = useTheme();
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Build the code string
  const codeLines = [
    `const profile = {`,
    `  name: "${resumeData.hero.name}",`,
    `  role: "${resumeData.hero.role}",`,
    `  mission: "${resumeData.hero.mission}",`,
    `  specialties: [`,
    `    ${resumeData.hero.specialties.map((s) => `"${s}"`).join(", ")}`,
    `  ],`,
    `  principles: [`,
    `    ${resumeData.hero.principles.map((p) => `"${p}"`).join(", ")}`,
    `  ],`,
    `  status: "${resumeData.hero.status}"`,
    `};`,
  ];

  const fullCode = codeLines.join("\n");

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 10; // milliseconds per character - faster!
    const startDelay = 600; // initial delay before typing starts

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= fullCode.length) {
          setDisplayedCode(fullCode.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [fullCode]);

  // Function to render code with syntax highlighting with different colors per property
  const renderSyntaxHighlightedCode = (code: string) => {
    const colors = {
      keyword: theme === "dark" ? "var(--accent-primary)" : "#7c3aed",
      operator: theme === "dark" ? "#64748b" : "#94a3b8",
      bracket: theme === "dark" ? "#facc15" : "#ca8a04",
      name: theme === "dark" ? "#4ade80" : "#16a34a",
      role: theme === "dark" ? "#60a5fa" : "#2563eb",
      mission: theme === "dark" ? "#fb923c" : "#ea580c",
      array: theme === "dark" ? "#fef08a" : "#ca8a04",
      status: theme === "dark" ? "var(--accent-primary)" : "#7c3aed",
      property: theme === "dark" ? "#cbd5e1" : "#334155",
    };

    const lines = code.split('\n');
    const result: ReactElement[] = [];
    
    lines.forEach((line, lineIndex) => {
      const trimmed = line.trim();
      
      // Parse each line based on its content
      if (trimmed.startsWith('const')) {
        // const profile = {
        const parts = line.split(/(\bconst\b|\bprofile\b|=|{)/g).filter(Boolean);
        parts.forEach((part, i) => {
          if (part === 'const') {
            result.push(<span key={`${lineIndex}-${i}`} style={{ color: colors.keyword }}>{part}</span>);
          } else if (part === '=') {
            result.push(<span key={`${lineIndex}-${i}`} style={{ color: colors.operator }}>{part}</span>);
          } else if (part === '{') {
            result.push(<span key={`${lineIndex}-${i}`} style={{ color: colors.bracket }}>{part}</span>);
          } else {
            result.push(<span key={`${lineIndex}-${i}`}>{part}</span>);
          }
        });
      } else if (trimmed.startsWith('name:')) {
        // name: "..."
        const match = line.match(/^(\s*)(name)(:)(\s*)(".*?")(,?)$/);
        if (match) {
          result.push(<span key={`${lineIndex}-0`}>{match[1]}</span>);
          result.push(<span key={`${lineIndex}-1`}>{match[2]}</span>);
          result.push(<span key={`${lineIndex}-2`} style={{ color: colors.operator }}>{match[3]}</span>);
          result.push(<span key={`${lineIndex}-3`}>{match[4]}</span>);
          result.push(<span key={`${lineIndex}-4`} style={{ color: colors.name }}>{match[5]}</span>);
          result.push(<span key={`${lineIndex}-5`} style={{ color: colors.operator }}>{match[6]}</span>);
        } else {
          result.push(<span key={lineIndex}>{line}</span>);
        }
      } else if (trimmed.startsWith('role:')) {
        const match = line.match(/^(\s*)(role)(:)(\s*)(".*?")(,?)$/);
        if (match) {
          result.push(<span key={`${lineIndex}-0`}>{match[1]}</span>);
          result.push(<span key={`${lineIndex}-1`}>{match[2]}</span>);
          result.push(<span key={`${lineIndex}-2`} style={{ color: colors.operator }}>{match[3]}</span>);
          result.push(<span key={`${lineIndex}-3`}>{match[4]}</span>);
          result.push(<span key={`${lineIndex}-4`} style={{ color: colors.role }}>{match[5]}</span>);
          result.push(<span key={`${lineIndex}-5`} style={{ color: colors.operator }}>{match[6]}</span>);
        } else {
          result.push(<span key={lineIndex}>{line}</span>);
        }
      } else if (trimmed.startsWith('mission:')) {
        const match = line.match(/^(\s*)(mission)(:)(\s*)(".*?")(,?)$/);
        if (match) {
          result.push(<span key={`${lineIndex}-0`}>{match[1]}</span>);
          result.push(<span key={`${lineIndex}-1`}>{match[2]}</span>);
          result.push(<span key={`${lineIndex}-2`} style={{ color: colors.operator }}>{match[3]}</span>);
          result.push(<span key={`${lineIndex}-3`}>{match[4]}</span>);
          result.push(<span key={`${lineIndex}-4`} style={{ color: colors.mission }}>{match[5]}</span>);
          result.push(<span key={`${lineIndex}-5`} style={{ color: colors.operator }}>{match[6]}</span>);
        } else {
          result.push(<span key={lineIndex}>{line}</span>);
        }
      } else if (trimmed.startsWith('status:')) {
        const match = line.match(/^(\s*)(status)(:)(\s*)(".*?")$/);
        if (match) {
          result.push(<span key={`${lineIndex}-0`}>{match[1]}</span>);
          result.push(<span key={`${lineIndex}-1`}>{match[2]}</span>);
          result.push(<span key={`${lineIndex}-2`} style={{ color: colors.operator }}>{match[3]}</span>);
          result.push(<span key={`${lineIndex}-3`}>{match[4]}</span>);
          result.push(<span key={`${lineIndex}-4`} style={{ color: colors.status }}>{match[5]}</span>);
        } else {
          result.push(<span key={lineIndex}>{line}</span>);
        }
      } else if (trimmed.includes('"Full-Stack"') || trimmed.includes('"Keep it simple"')) {
        // Array content lines
        result.push(<span key={lineIndex} style={{ color: colors.array }}>{line}</span>);
      } else if (trimmed.includes('[') || trimmed.includes(']')) {
        // Array brackets
        const parts = line.split(/(\[|\]|,)/g);
        parts.forEach((part, i) => {
          if (part === '[' || part === ']') {
            result.push(<span key={`${lineIndex}-${i}`} style={{ color: colors.operator }}>{part}</span>);
          } else if (part === ',') {
            result.push(<span key={`${lineIndex}-${i}`} style={{ color: colors.operator }}>{part}</span>);
          } else {
            result.push(<span key={`${lineIndex}-${i}`}>{part}</span>);
          }
        });
      } else if (trimmed === '};') {
        const match = line.match(/^(\s*)(})(;)$/);
        if (match) {
          result.push(<span key={`${lineIndex}-0`}>{match[1]}</span>);
          result.push(<span key={`${lineIndex}-1`} style={{ color: colors.bracket }}>{match[2]}</span>);
          result.push(<span key={`${lineIndex}-2`} style={{ color: colors.operator }}>{match[3]}</span>);
        } else {
          result.push(<span key={lineIndex}>{line}</span>);
        }
      } else {
        result.push(<span key={lineIndex}>{line}</span>);
      }
      
      if (lineIndex < lines.length - 1) {
        result.push(<span key={`newline-${lineIndex}`}>{'\n'}</span>);
      }
    });

    return <>{result}</>;
  };
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background Gradients removed for global Background component */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium mb-4">
              Hello, I'm
            </h2>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-[var(--accent-primary)]"
            >
              {resumeData.personal.name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <div className="h-10 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }}
                className="text-2xl md:text-3xl text-[var(--text-tertiary)] font-light"
              >
                {resumeData.personal.role}
              </motion.h2>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl"
          >
            An architect of the web, blending systems engineering with creative
            design. I don't just build applications; I craft resilient digital
            ecosystems that thrive under pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-medium hover:scale-105 transition-transform shadow-lg shadow-white/10"
            >
              View Projects
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/17laRS8CTAlXNJon7XP5yal49vzY4rIqD/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] rounded-full font-medium hover:bg-[var(--bg-card-hover)] transition-all hover:scale-105 backdrop-blur-sm"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-8 flex items-center gap-6 text-[var(--text-secondary)]"
          >
            <div className="flex items-center gap-2 bg-[var(--success)]/10 border border-[var(--success)]/20 px-4 py-2 rounded-full cursor-default hover:bg-[var(--success)]/20 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse shadow-[0_0_10px_var(--success)]" />
              <span className="text-[var(--success)] font-medium text-sm">
                Open to work
              </span>
            </div>
            <div className="text-sm">
              Location: {resumeData.personal.location}
            </div>
          </motion.div>
        </div>

        {/* Abstract Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative perspective-1000"
        >
          <TiltCard className="w-full">
            <div className={`relative z-10 w-full rounded-3xl ${
              theme === "dark" ? "bg-[var(--bg-card)]/80" : "bg-white/80"
            } backdrop-blur-2xl border border-[var(--border-card)] p-8 flex flex-col justify-between overflow-hidden group hover:border-[var(--border-card-hover)] transition-colors duration-500 shadow-2xl ${
              theme === "dark" ? "shadow-black/50" : "shadow-gray-300/50"
            }`}>
              {/* Decorative Elements */}

              {/* Header removed to make space for code */}
              <div className="mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)] font-mono ml-2">
                    profile.js
                  </div>
                </div>
              </div>

              <div className="font-mono text-xs md:text-sm relative z-10 backdrop-blur-sm bg-[#1e1e2e]/90 p-6 rounded-2xl border border-white/10 shadow-inner overflow-hidden min-h-[320px]"
                style={{
                  backgroundColor: theme === "dark" ? "rgba(30, 30, 46, 0.9)" : "rgba(248, 250, 252, 0.95)",
                  borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  color: theme === "dark" ? "#cbd5e1" : "#334155"
                }}
              >
                <div className="whitespace-pre-wrap">
                  {renderSyntaxHighlightedCode(displayedCode)}
                  {!isTypingComplete && (
                    <span 
                      className="inline-block w-[2px] h-[1em] ml-[1px] align-middle"
                      style={{ 
                        backgroundColor: theme === "dark" ? "#a78bfa" : "#7c3aed",
                        animation: "blink 1s step-end infinite"
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};
