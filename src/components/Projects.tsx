import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Folder,
  Code,
  Database,
  Server,
  Cloud,
  Terminal,
  Layers,
  Atom,
  Box,
  Cpu,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "react":
    case "react native":
    case "next.js":
      return (
        <Atom
          size={14}
          className="group-hover/chip:rotate-180 transition-transform duration-500"
        />
      );
    case "typescript":
    case "javascript":
    case "python":
      return <Code size={14} />;
    case "node.js":
    case "express":
      return <Server size={14} />;
    case "mongodb":
    case "postgresql":
      return <Database size={14} />;
    case "aws":
    case "firebase":
    case "google cloud":
      return <Cloud size={14} />;
    case "docker":
    case "kubernetes":
      return <Box size={14} />;
    case "graphql":
      return <Layers size={14} />;
    case "machine learning":
    case "tensorflow":
      return <Cpu size={14} />;
    default:
      return <Terminal size={14} />;
  }
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full group/card relative"
    >
      <TiltCard className="h-full">
        <div className="h-full group relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] group-hover:border-[var(--border-card-hover)] transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-md shadow-lg">
          <div className="relative z-10 flex flex-col h-full gap-6">
            <div className="flex justify-between items-start">
              {/* Project Icon/Logo Area - Minimal */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[var(--bg-card-hover)] text-[var(--accent-primary)]">
                    <Folder size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:translate-x-1 duration-300 flex items-center gap-2">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 transition-all hover:scale-110 shadow-sm"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 transition-all hover:scale-110 shadow-sm"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--text-tertiary)] bg-[var(--bg-primary)]/30 px-2 py-0.5 rounded border border-[var(--border-card)]">
                  {project.year}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-[var(--border-card)]">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium text-[var(--accent-primary)] bg-[var(--accent-primary)]/5 rounded-lg border border-[var(--accent-primary)]/10 flex items-center gap-1.5 hover:bg-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/30 transition-colors cursor-default"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProjects = resumeData.projects.length;
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, totalProjects));
  };

  return (
    <Section id="projects">
      <div ref={containerRef} className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal
            text="Featured Projects"
            className="text-3xl md:text-4xl font-bold"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            A showcase of my technical journey and problem-solving capabilities.
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-[var(--accent-primary)] rounded-full"
          />
        </div>

        <motion.div style={{ y }} className="grid gap-8 md:grid-cols-2">
          {resumeData.projects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {visibleCount < totalProjects && (
          <div className="flex justify-center pt-8">
            <button
              onClick={handleViewMore}
              className="group flex items-center justify-center gap-2 px-8 py-3 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] rounded-full font-medium hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-primary)]/30 transition-all hover:scale-105 backdrop-blur-sm"
            >
              View More Projects
              <ChevronDown
                size={20}
                className="group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};
