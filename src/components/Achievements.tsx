import { Award, FileText, Code, Github, Trophy } from 'lucide-react';
import { Section } from './Section';
import { resumeData } from '../data/resume';
import { TiltCard } from './TiltCard';

export const Achievements = () => {
  const getIcon = (text: string) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('sih') || lowerText.includes('won') || lowerText.includes('secured') || lowerText.includes('place') || lowerText.includes('runner-up')) return Trophy;
    if (lowerText.includes('patent') || lowerText.includes('paper') || lowerText.includes('publication')) return FileText;
    if (lowerText.includes('github') || lowerText.includes('open source')) return Github;
    if (lowerText.includes('leetcode') || lowerText.includes('code')) return Code;
    return Award;
  };

  return (
    <Section id="achievements">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
           <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
             Achievements & Recognition</h2>
           <div className="w-20 h-1 bg-[var(--accent-primary)] rounded-full" />
        </div>
       <div className="grid md:grid-cols-2 gap-6 relative z-10">
        {resumeData.achievements.map((achievement, index) => {
          const Icon = getIcon(achievement);
          
          return (
            <TiltCard key={index} className="h-full">
              <div className="group h-full p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-[var(--accent-primary)]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--bg-card-hover)] text-[var(--accent-primary)] shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                    <Icon size={24} />
                  </div>
                  
                  <div className="pt-1">
                    <p className="text-[var(--text-primary)] font-medium leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
                      {achievement}
                    </p>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[var(--accent-primary)]/10 rounded-full blur-2xl group-hover:bg-[var(--accent-primary)]/20 transition-colors" />
              </div>
            </TiltCard>
          );
        })}
      </div>
      </div>
    </Section>
  );
};
