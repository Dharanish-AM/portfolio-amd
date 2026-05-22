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

const ProjectCard = ({ project, index, isLastOdd }: { project: any; index: number; isLastOdd?: boolean }) => {
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
      className={`h-full group/card relative ${isLastOdd ? "md:col-span-2" : ""}`}
    >
      <TiltCard className="h-full">
        <div className="h-full group relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-md shadow-lg">
          
          {project.image && (
             <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
               <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/80 to-transparent mix-blend-multiply" />
             </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
          
          <div className="relative z-10 flex flex-col h-full gap-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[var(--bg-card-hover)] text-[var(--accent-primary)] shadow-sm">
                    <Folder size={20} />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:translate-x-1 duration-300">
                        {project.name}
                      </h3>
                      {project.isFeatured && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--bg-primary)] bg-[var(--accent-primary)] rounded-full ml-2">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-2.5 py-0.5 rounded border border-[var(--accent-primary)]/20 font-semibold">
                  {project.year}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base font-normal">
                {project.description}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-[var(--border-card)] space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-semibold text-[var(--accent-primary)] bg-[var(--accent-primary)]/5 rounded-lg border border-[var(--accent-primary)]/10 flex items-center gap-1.5 hover:bg-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/30 transition-colors cursor-default"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/50 transition-all border border-[var(--border-card)] px-3 py-2 rounded-xl bg-[var(--bg-primary)]/40 hover:bg-[var(--accent-primary)]/5 shadow-sm"
                  >
                    <Github size={14} />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/50 transition-all border border-[var(--border-card)] px-3 py-2 rounded-xl bg-[var(--bg-primary)]/40 hover:bg-[var(--accent-primary)]/5 shadow-sm ml-auto"
                  >
                    <ArrowUpRight size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
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
    <Section id="projects" animate={false}>
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
          {resumeData.projects.slice(0, visibleCount).map((project, index, arr) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isLastOdd={arr.length % 2 !== 0 && index === arr.length - 1}
            />
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
