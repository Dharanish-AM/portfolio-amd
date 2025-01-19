import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const sections = ["Home", "About", "Skills", "Projects"];

  
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            section,
            offset: rect.top,
          };
        }
        return null;
      });

      
      const active = sectionOffsets.find(
        ({ offset }) => offset >= 0 && offset < window.innerHeight / 2
      );

      if (active) {
        setActiveLink(active.section);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    const section = document.getElementById(linkName.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-container">
      <div className="title-top">Portfolio</div>
      <div className="navbar-links-container">
        {sections.map((section) => (
          <a
            key={section}
            className={`nav-link ${activeLink === section ? "active" : ""}`}
            onClick={() => handleLinkClick(section)}
          >
            {section}
          </a>
        ))}
        <div className="contact-box">
          <a
            className={`nav-link ${activeLink === "Contact" ? "active" : ""}`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
