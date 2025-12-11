import { Code2, Server, Wrench, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TiltCard } from "./TiltCard";
import { TextReveal } from "./TextReveal";

export const Skills = () => {
  const categories = [
    {
      name: "Languages & Frameworks",
      icon: Code2,
      skills: resumeData.skills.languages,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
    {
      name: "Cloud & Databases",
      icon: Database,
      skills: resumeData.skills.cloud,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
    {
      name: "System Design & DevOps",
      icon: Server,
      skills: resumeData.skills.systemDesign,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
    {
      name: "Security & Tools",
      icon: Wrench,
      skills: resumeData.skills.tools,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  return (
    <Section id="skills">
      <div className="flex flex-col gap-12 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

        <div className="space-y-4 relative z-10">
          <TextReveal
            text="Technical Skills"
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            Tools and technologies I use to build specific, scalable solutions.
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-[var(--accent-primary)] rounded-full"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 relative z-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TiltCard className="h-full">
                <div
                  className={`h-full p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-all duration-500 relative overflow-hidden backdrop-blur-xl flex flex-col hover:shadow-2xl`}
                >
                  {/* Abstract Tech Grid Background */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-5 border-b border-white/5 pb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl ${category.bg} flex items-center justify-center ${category.color} shadow-lg ring-1 ring-white/5 hover:scale-110 hover:rotate-6 transition-all duration-500`}
                      >
                        <category.icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] hover:text-[var(--text-primary)] transition-colors">
                        {category.name}
                      </h3>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.2,
                          },
                        },
                      }}
                    >
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 bg-[var(--bg-primary)]/40 border border-white/5 rounded-xl text-[var(--text-secondary)] text-sm font-medium hover:text-white hover:bg-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/30 transition-colors cursor-default shadow-sm backdrop-blur-sm`}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
