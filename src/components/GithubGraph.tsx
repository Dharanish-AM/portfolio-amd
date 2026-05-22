import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { Section } from "./Section";
import { TextReveal } from "./TextReveal";
import { useTheme } from "../context/ThemeContext";

export const GithubGraph = () => {
  const { theme } = useTheme();

  return (
    <Section id="github" className="">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <TextReveal
            text="Contribution Graph"
            className="text-3xl md:text-4xl font-bold"
          />
          <div className="mt-2 text-[var(--text-secondary)] text-lg font-normal">
            My daily coding activity and open source contributions.
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
          className="p-8 md:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] relative overflow-hidden flex justify-center items-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
          
          <div className="w-full overflow-x-auto relative z-10 flex justify-center pb-4">
            <div className="min-w-max">
              <GitHubCalendar 
                username="Dharanish-AM" 
                colorScheme={theme as "light" | "dark"}
                blockSize={14}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
