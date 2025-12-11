import { motion } from "framer-motion";
import { Award, FileText, Code, Github, Trophy } from "lucide-react";
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

export const Achievements = () => {
  const getIcon = (text: string) => {
    // ... (existing helper)
    const lowerText = text.toLowerCase();
    if (
      lowerText.includes("sih") ||
      lowerText.includes("won") ||
      lowerText.includes("secured") ||
      lowerText.includes("place") ||
      lowerText.includes("runner-up")
    )
      return Trophy;
    if (
      lowerText.includes("patent") ||
      lowerText.includes("paper") ||
      lowerText.includes("publication")
    )
      return FileText;
    if (lowerText.includes("github") || lowerText.includes("open source"))
      return Github;
    if (lowerText.includes("leetcode") || lowerText.includes("code"))
      return Code;
    return Award;
  };

  return (
    <Section id="achievements">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal
            text="Achievements & Recognition"
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            Recognition of my dedication and excellence in the field.
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
          className="grid md:grid-cols-2 gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {resumeData.achievements.map((achievement, index) => {
            const Icon = getIcon(achievement);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="group h-full p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-[var(--border-card-hover)]">
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-[var(--bg-card-hover)] text-[var(--accent-primary)] shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                        <Icon size={24} />
                      </div>

                      <div className="pt-1">
                        <p className="text-[var(--text-primary)] font-medium leading-relaxed transition-colors">
                          {achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};
