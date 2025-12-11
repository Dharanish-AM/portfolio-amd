import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect
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
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Smooth ease
    },
  },
};

export const Education = () => {
  return (
    <Section id="about" className="relative">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal
            text="Education"
            className="text-3xl md:text-4xl font-bold"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            My academic journey and continuous pursuit of knowledge.
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
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {resumeData.education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <TiltCard className="h-full">
                <div className="h-full p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] group-hover:border-[var(--border-card-hover)] transition-colors duration-500 relative overflow-hidden backdrop-blur-md flex flex-col shadow-lg">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 group-hover:scale-110 duration-700">
                    <GraduationCap size={120} />
                  </div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--bg-card-hover)] flex items-center justify-center text-violet-400 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
                      <GraduationCap size={32} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] transition-colors">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-medium text-violet-400 px-3 py-1 bg-violet-500/10 rounded-full border border-violet-500/20 w-fit">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] font-medium text-lg leading-relaxed">
                        {edu.institution}
                      </p>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
