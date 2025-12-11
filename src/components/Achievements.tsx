import { motion } from "framer-motion";
import {
  Award,
  FileText,
  Code,
  Github,
  Trophy,
  BadgeCheck,
} from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resume";
import { TextReveal } from "./TextReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const getIcon = (text: string) => {
  const lowerText = text.toLowerCase();
  if (
    lowerText.includes("sih") ||
    lowerText.includes("won") ||
    lowerText.includes("secured") ||
    lowerText.includes("place") ||
    lowerText.includes("runner-up") ||
    lowerText.includes("futurepreneur")
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
  if (lowerText.includes("leetcode") || lowerText.includes("code")) return Code;
  return Award;
};

const AchievementCard = ({
  achievement,
}: {
  achievement: { title: string; description: string };
}) => {
  const Icon = getIcon(achievement.title);

  return (
    <motion.div variants={itemVariants} className="h-full">
      <div className="h-full group relative p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-colors duration-300 flex flex-col gap-4">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-3 rounded-2xl bg-violet-400/10 text-violet-400 border border-violet-400/10">
            <Icon size={24} />
          </div>
          <div className="space-y-2 flex-1">
            <h4 className="font-bold text-[var(--text-primary)] leading-tight text-lg transition-colors">
              {achievement.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationCard = ({
  cert,
}: {
  cert: { name: string; provider: string; year: string };
}) => {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <div className="h-full group relative p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-colors duration-300 flex flex-col gap-2">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h4 className="font-semibold text-[var(--text-primary)] text-base leading-snug transition-colors">
              {cert.name}
            </h4>
            <p className="text-sm text-[var(--text-tertiary)] mt-1 font-mono">
              {cert.provider}
            </p>
          </div>
          <span className="text-xs font-mono font-medium text-violet-300 bg-violet-400/10 px-2 py-0.5 rounded border border-violet-400/10">
            {cert.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <Section id="achievements">
      <div className="flex flex-col gap-16">
        <div className="space-y-4">
          <TextReveal
            text="Achievements & Certifications"
            className="text-3xl md:text-4xl font-bold"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg">
            Milestones that mark my journey of learning and excellence.
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 bg-violet-400 rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Awards Column - Takes up more space */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-violet-400/10 text-violet-400">
                <Trophy size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Awards
              </h3>
            </div>

            <motion.div
              className="grid gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {resumeData.achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} />
              ))}
            </motion.div>
          </div>

          {/* Certifications Column - Compact Side Panel */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-violet-400/10 text-violet-400">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                Certifications
              </h3>
            </div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {resumeData.certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
