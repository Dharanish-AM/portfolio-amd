import { motion } from "framer-motion";
import {
  Award,
  FileText,
  Code,
  Github,
  Trophy,
  BadgeCheck,
  ExternalLink,
  ShieldCheck,
  Cloud,
  Layers,
  Monitor,
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

const renderIcon = (text: string, size = 24) => {
  const lowerText = text.toLowerCase();
  let IconComponent = Award;
  if (
    lowerText.includes("sih") ||
    lowerText.includes("won") ||
    lowerText.includes("secured") ||
    lowerText.includes("place") ||
    lowerText.includes("runner-up") ||
    lowerText.includes("futurepreneur")
  ) {
    IconComponent = Trophy;
  } else if (
    lowerText.includes("patent") ||
    lowerText.includes("paper") ||
    lowerText.includes("publication")
  ) {
    IconComponent = FileText;
  } else if (lowerText.includes("github") || lowerText.includes("open source")) {
    IconComponent = Github;
  } else if (lowerText.includes("leetcode") || lowerText.includes("code")) {
    IconComponent = Code;
  }
  return <IconComponent size={size} />;
};

const getCertStyles = (id?: string) => {
  switch (id) {
    case "aws":
      return {
        badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        glowClass: "hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
      };
    case "aviatrix":
      return {
        badgeBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
        glowClass: "hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
      };
    case "secops":
      return {
        badgeBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
        glowClass: "hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
      };
    case "ibm":
      return {
        badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-400",
        glowClass: "hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
      };
    default:
      return {
        badgeBg: "bg-violet-500/10 border-violet-500/30 text-violet-400",
        glowClass: "hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]",
      };
  }
};

const renderCertIcon = (id?: string, size = 24) => {
  let IconComponent = BadgeCheck;
  switch (id) {
    case "aws":
      IconComponent = Cloud;
      break;
    case "aviatrix":
      IconComponent = Layers;
      break;
    case "secops":
      IconComponent = ShieldCheck;
      break;
    case "ibm":
      IconComponent = Monitor;
      break;
  }
  return <IconComponent size={size} />;
};

const AchievementCard = ({
  achievement,
  isLastOdd,
}: {
  achievement: { title: string; description: string; link?: string };
  isLastOdd?: boolean;
}) => {
  const isPatent = achievement.title.toLowerCase().includes("patent");
  const isPaper = achievement.title.toLowerCase().includes("paper");

  return (
    <motion.div variants={itemVariants} className={`h-full ${isLastOdd ? "md:col-span-2" : ""}`}>
      <div className="h-full group relative p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] hover:shadow-[0_0_25px_rgba(139,92,246,0.1)] transition-all duration-300 flex flex-col justify-between gap-4">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-3 rounded-2xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/10">
            {renderIcon(achievement.title, 24)}
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
        {achievement.link && (
          <div className="relative z-10 flex mt-2 pl-14">
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xl bg-violet-400/10 text-violet-400 hover:bg-violet-400 hover:text-white border border-violet-400/20 transition-all duration-300"
            >
              {isPatent ? "View Patent" : isPaper ? "Read Paper" : "Explore More"}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CertificationCard = ({
  cert,
  isLastOdd,
}: {
  cert: { name: string; provider: string; year: string; id?: string; link?: string };
  isLastOdd?: boolean;
}) => {
  const styles = getCertStyles(cert.id);
  return (
    <motion.div variants={itemVariants} className={`h-full ${isLastOdd ? "md:col-span-2" : ""}`}>
      <div className={`h-full group relative p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--border-card-hover)] transition-all duration-300 flex flex-col justify-between gap-6 ${styles.glowClass}`}>
        <div className="flex items-start gap-4 relative z-10">
          <div className={`p-3 rounded-2xl border ${styles.badgeBg} transition-transform duration-300 group-hover:scale-110`}>
            {renderCertIcon(cert.id, 24)}
          </div>
          <div className="space-y-2 flex-1">
            <h4 className="font-bold text-[var(--text-primary)] leading-tight text-lg transition-colors group-hover:text-[var(--accent-primary)]">
              {cert.name}
            </h4>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {cert.provider}
              </p>
              <p className="text-xs text-[var(--text-tertiary)] font-mono">
                {cert.year}
              </p>
            </div>
          </div>
        </div>
        {cert.link && (
          <div className="relative z-10 flex mt-2 pl-14">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-violet-400/10 text-violet-400 hover:bg-violet-400 hover:text-white border border-violet-400/20 transition-all duration-300"
            >
              <span>Verify Credential</span>
              <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const Achievements = () => {
  return (
    <Section id="achievements" animate={false}>
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
            className="h-1 bg-[var(--accent-primary)] rounded-full"
          />
        </div>

        <div className="flex flex-col gap-12">
          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-card)] pb-6">
                <div className="p-2 rounded-xl bg-violet-400/10 text-violet-400">
                  <Trophy size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Awards
                </h3>
              </div>

              <motion.div
                className="grid gap-5 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {resumeData.achievements.map((achievement, index) => (
                  <AchievementCard
                    key={index}
                    achievement={achievement}
                    isLastOdd={resumeData.achievements.length % 2 !== 0 && index === resumeData.achievements.length - 1}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-card)] pb-6">
                <div className="p-2 rounded-xl bg-violet-400/10 text-violet-400">
                  <BadgeCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Certifications
                </h3>
              </div>

              <motion.div
                className="grid gap-5 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {resumeData.certifications.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    cert={cert}
                    isLastOdd={resumeData.certifications.length % 2 !== 0 && index === resumeData.certifications.length - 1}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
