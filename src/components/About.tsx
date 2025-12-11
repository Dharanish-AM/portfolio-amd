import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Target, User, Terminal, Sparkles } from "lucide-react";
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

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 h-full">
          {/* Main Bio Card - Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 h-full"
          >
            <div className="h-full relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-colors duration-300 flex flex-col gap-6 group">
              <div className="relative z-10 flex items-center gap-4 mb-2">
                <div className="p-3 rounded-2xl bg-violet-400/10 text-violet-400 shadow-inner">
                  <User size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  Who I Am
                </h3>
              </div>

              <div className="relative z-10 space-y-4 text-[var(--text-secondary)] leading-relaxed text-base">
                {resumeData.personal.about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div className="relative pl-4 py-2 mt-4 border-l-2 border-violet-400/50">
                  <p className="italic text-[var(--text-primary)] font-medium text-lg">
                    "{resumeData.personal.about.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 text-violet-300 font-mono text-sm uppercase tracking-wider">
                  <Terminal size={16} />
                  <span>{resumeData.personal.about.tagline}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Column - Stacked Cards */}
          <div className="flex flex-col gap-6 h-full">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <div className="h-full relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-colors duration-300 flex flex-col justify-center gap-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-400/10 text-violet-400">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    Mission
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {resumeData.personal.mission}
                </p>
              </div>
            </motion.div>

            {/* Principles Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-[1.5]"
            >
              <div className="h-full relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-colors duration-300 flex flex-col gap-5 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-400/10 text-violet-400">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    Principles
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {resumeData.personal.principles.map((principle, index) => (
                    <div key={index} className="group/item">
                      <h4 className="font-semibold text-[var(--text-primary)] flex items-center gap-2 text-lg mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                        {principle.title}
                      </h4>
                      <p className="pl-3.5 text-base text-[var(--text-tertiary)] group-hover/item:text-[var(--text-secondary)] transition-colors">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
