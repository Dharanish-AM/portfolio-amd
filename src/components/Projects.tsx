import { Github, Folder, Code, Database, Server, Cloud, Terminal, Layers, Atom, Box, Cpu } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';
import { TiltCard } from './TiltCard';

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react') || t.includes('remix') || t.includes('next')) return <Atom size={14} />;
  if (t.includes('node') || t.includes('express') || t.includes('spring')) return <Server size={14} />;
  if (t.includes('database') || t.includes('mongo') || t.includes('sql') || t.includes('redis')) return <Database size={14} />;
  if (t.includes('aws') || t.includes('cloud') || t.includes('deploy')) return <Cloud size={14} />;
  if (t.includes('docker') || t.includes('kubernetes') || t.includes('container')) return <Box size={14} />;
  if (t.includes('python') || t.includes('java') || t.includes('c++')) return <Code size={14} />;
  if (t.includes('ai') || t.includes('llm') || t.includes('neural')) return <Cpu size={14} />;
  if (t.includes('redux') || t.includes('tail')) return <Layers size={14} />;
  return <Terminal size={14} />;
};

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
           <div className="w-20 h-1 bg-[var(--accent-primary)] rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resumeData.projects.map((project, index) => (
            <TiltCard key={index} className="h-full">
                <div 
                  className="h-full group relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] group-hover:border-violet-500/50 transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-md shadow-lg"
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-500" />

                  <div className="relative z-10 flex flex-col h-full gap-8">
                     <div className="flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--accent-primary)] shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Folder size={28} />
                        </div>
                        <div className="flex gap-4">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/10 transition-all hover:scale-110 shadow-sm">
                                    <Github size={20} />
                                </a>
                            )}

                        </div>
                     </div>

                     <div className="space-y-3">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2">
                                {project.name}
                                {project.status === "Ongoing" && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">Ongoing</span>
                                )}
                            </h3>
                            <span className="text-sm font-mono text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)]/70 transition-colors">{project.year}</span>
                        </div>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                            {project.description}
                        </p>
                     </div>

                     <div className="mt-auto pt-6 border-t border-[var(--border-card)]">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="px-3 py-1.5 text-xs font-medium text-[var(--accent-primary)] bg-[var(--accent-primary)]/5 rounded-lg border border-[var(--accent-primary)]/10 flex items-center gap-1.5 hover:bg-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/30 transition-colors cursor-default">
                                    {getTechIcon(tech)}
                                    {tech}
                                </span>
                            ))}
                        </div>
                     </div>
                  </div>
                </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
