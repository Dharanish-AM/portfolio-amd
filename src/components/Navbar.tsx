import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => {
        if (prev !== isScrolled) return isScrolled;
        return prev;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = ["home", "about", "education", "experience", "projects", "achievements", "skills", "contact"];
    targets.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      targets.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 border backdrop-blur-xl rounded-full ${
        scrolled
          ? "top-4 w-[95%] max-w-7xl bg-[var(--bg-card)] border-[var(--border-card-hover)] py-2 shadow-2xl shadow-black/40"
          : "top-4 md:top-6 w-[95%] md:w-[98%] max-w-[85rem] bg-[var(--bg-card)]/50 border-[var(--border-card)] py-2 md:py-2 shadow-none"
      }`}
    >
      <div className="w-full px-5 md:px-8 flex justify-between items-center h-10 md:h-10">
        <a
          href="#home"
          className="text-2xl font-bold text-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors tracking-tight"
        >
          D15
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 text-sm font-semibold tracking-wide relative px-1 py-1 ${
                  isActive
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent-primary)] rounded-full" />
                )}
              </a>
            );
          })}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[var(--border-card)]">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer border border-[var(--border-card)]"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="text-[var(--text-primary)] cursor-pointer p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-xl border border-[var(--border-card)] rounded-3xl p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 text-lg font-semibold ${
                  isActive
                    ? "text-[var(--accent-primary)] pl-2 border-l-2 border-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
