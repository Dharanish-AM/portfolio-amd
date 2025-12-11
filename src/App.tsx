import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Achievements } from "./components/Achievements";

import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-violet-500/30">
      <CustomCursor />
      <ScrollProgress />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center text-[var(--text-tertiary)] text-sm border-t border-[var(--border-card)] bg-[var(--bg-primary)] relative z-10">
        <p>© {new Date().getFullYear()} Dharanish A M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
