import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";

export const Education = () => {
  const college = resumeData.education.find(
    (e) => e.institution === "Sri Eshwar College of Engineering"
  );

  if (!college) return null;

  return (
    <Section id="education">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal text="Education" className="text-3xl md:text-4xl font-bold" />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            Formal academics focusing on core computing foundations.
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-[var(--accent-primary)] rounded-full"
          />
        </div>

        <TiltCard className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] transition-all duration-500 backdrop-blur-md overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-[var(--accent-primary)]" size={24} />
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    {college.degree}
                  </h3>
                </div>
                <p className="text-xl text-[var(--accent-primary)] font-medium">
                  {college.institution}
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                  {college.score}
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] bg-[var(--bg-primary)]/50 px-4 py-2 rounded-full border border-[var(--border-card)] shadow-inner">
                    <Calendar size={16} className="text-[var(--accent-primary)]" />
                    {college.duration}
                  </div>
                  {college.location && (
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-tertiary)] bg-[var(--bg-primary)]/50 px-4 py-2 rounded-full border border-[var(--border-card)] shadow-inner">
                      <MapPin size={16} className="text-[var(--accent-primary)]" />
                      {college.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </Section>
  );
};
