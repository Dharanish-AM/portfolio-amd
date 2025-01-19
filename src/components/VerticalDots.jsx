import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function VerticalDots() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section);
        return {
          section,
          offset: element.getBoundingClientRect().top,
        };
      });

      const active = sectionOffsets.find(
        ({ offset }) => offset >= 0 && offset < window.innerHeight / 2
      );
      if (active) {
        setActiveSection(active.section);
        setIsVisible(active.section !== "home"); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "45vw",
        right: "2vw",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 100,
        opacity: isVisible ? 1 : 0, 
        transition: "opacity 0.5s ease-in-out", 
      }}
    >
      {sections.map((section) => (
        <div
          key={section}
          onClick={() => handleDotClick(section)}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: activeSection === section ? "#CBF21E" : "#D3D3D3",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            transform: activeSection === section ? "scale(1.2)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
}
