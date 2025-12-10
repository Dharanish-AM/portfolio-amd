import { GraduationCap } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';
import { TiltCard } from './TiltCard';

export const Education = () => {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
           <div className="w-20 h-1 bg-violet-500 rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resumeData.education.map((edu, index) => (
            <TiltCard key={index} className="h-full">
                <div 
                  className="h-full p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] group-hover:border-violet-500/50 transition-colors duration-500 relative overflow-hidden backdrop-blur-md flex flex-col shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 group-hover:scale-110 duration-700">
                    <GraduationCap size={120} />
                  </div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--bg-card-hover)] flex items-center justify-center text-violet-400 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
                        <GraduationCap size={32} />
                    </div>

                    <div className="space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] group-hover:text-violet-400 transition-colors">{edu.degree}</h3>
                            <span className="text-sm font-medium text-violet-400 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/20 w-fit">
                                {edu.duration}
                            </span>
                        </div>
                        <p className="text-[var(--text-secondary)] font-medium text-lg leading-relaxed">{edu.institution}</p>
                    </div>
                  </div>

                  {edu.score && (
                    <div className="mt-6 pt-6 border-t border-[var(--border-card)] relative z-10 flex">
                       <div className="inline-block px-4 py-2 rounded-xl bg-violet-500/10 text-sm font-semibold text-violet-400 border border-violet-500/20 shadow-sm">
                        {edu.score}
                      </div>
                    </div>
                  )}
                </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
