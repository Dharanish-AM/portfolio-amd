import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { resumeData } from "../data/resume";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-card)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center h-20">
        <a
          href="#home"
          className="text-2xl font-bold text-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-colors tracking-tight"
        >
          D15
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[var(--border-card)]">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-card)] p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-2">
            {resumeData.personal.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
