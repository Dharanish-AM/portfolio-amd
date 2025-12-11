import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Terminal } from "lucide-react";
import { Section } from "./Section";
import { TextReveal } from "./TextReveal";

export const About = () => {
  return (
    <Section id="about">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal
            text="About Me"
            className="text-3xl md:text-4xl font-bold"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            Get to know me better.
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-violet-400 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="relative p-8 md:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-colors duration-300 flex flex-col gap-8 group">
            <div className="relative z-10 space-y-4 text-[var(--text-secondary)] leading-relaxed text-base">
              {resumeData.personal.about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="relative pl-4 py-2 mt-4 border-l-2 border-violet-400/50">
                <p className="italic text-[var(--text-primary)] font-medium text-lg">
                  "{resumeData.personal.about.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 text-violet-400 font-mono text-sm uppercase tracking-wider">
                <Terminal size={16} />
                <span>{resumeData.personal.about.tagline}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
