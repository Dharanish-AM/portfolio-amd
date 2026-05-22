import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Achievements } from "./components/Achievements";
import { Education } from "./components/Education";
import { GithubGraph } from "./components/GithubGraph";
import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-violet-500/30">
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <GithubGraph />
        <Skills />
        <Contact />
      </main>

      <footer className="w-full border-t border-[var(--border-card)] bg-[var(--bg-secondary)]/50 backdrop-blur-xl relative z-10 py-8 px-6 text-center">
        <p className="text-sm text-[var(--text-tertiary)] tracking-wide">
          © 2026 Dharanish A M. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
