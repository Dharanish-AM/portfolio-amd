import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

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

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const totalProjects = resumeData.projects.length;

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, totalProjects));
  };

  return (
    <Section id="projects">
      <div className="flex flex-col gap-12">
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

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {resumeData.projects.slice(0, visibleCount).map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full group relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] group-hover:border-[var(--border-card-hover)] transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-md shadow-lg">
                  <div className="relative z-10 flex flex-col h-full gap-8">
                    <div className="flex justify-between items-start">
                      <div className="w-14 h-14 rounded-2xl bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--accent-primary)] shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Folder size={28} />
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 transition-all hover:scale-110 shadow-sm"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:translate-x-1 duration-300 flex items-center gap-2">
                          {project.name}
                          {project.status === "Ongoing" && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
                              Ongoing
                            </span>
                          )}
                        </h3>
                        <span className="text-sm font-mono text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)]/70 transition-colors">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-[var(--border-card)]">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
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
          ))}
        </motion.div>

        {visibleCount < totalProjects && (
          <div className="flex justify-center pt-8">
            <button
              onClick={handleViewMore}
              className="group flex items-center justify-center gap-2 px-8 py-3 bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-card)] rounded-full font-medium hover:bg-[var(--bg-card-hover)] hover:border-violet-500/30 transition-all hover:scale-105 backdrop-blur-sm"
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
