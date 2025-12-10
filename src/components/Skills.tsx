import { Code2, Cloud, Server, Wrench } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';
import { TiltCard } from './TiltCard';

export const Skills = () => {
  const categories = [
    { name: "Languages & Frameworks", icon: Code2, skills: resumeData.skills.languages },
    { name: "Cloud & Databases", icon: Cloud, skills: resumeData.skills.cloud },
    { name: "System Design & DevOps", icon: Server, skills: resumeData.skills.systemDesign },
    { name: "Security & Tools", icon: Wrench, skills: resumeData.skills.tools },
  ];

  return (
    <Section id="skills">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
           <div className="w-20 h-1 bg-[var(--accent-primary)] rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
             <TiltCard key={index} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] group-hover:border-[var(--accent-primary)]/50 transition-all duration-500 relative overflow-hidden backdrop-blur-md flex flex-col hover:shadow-lg hover:shadow-[var(--accent-primary)]/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card-hover)] flex items-center justify-center text-[var(--accent-primary)] shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <category.icon size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{category.name}</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <div 
                                   key={skill}
                                   className="px-4 py-2 bg-[var(--bg-primary)]/50 border border-[var(--border-card)] rounded-xl text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:bg-[var(--accent-primary)]/20 hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
                                >
                                    {skill}
                                </div>
                            ))}
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
