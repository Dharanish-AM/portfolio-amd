import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  useEffect(() => {
    setActiveLink("Home");
  }, []);

  return (
    <div className="navbar-container">
      <div className="title-top">Portfolio</div>
      <div className="navbar-links-container">
        <a
          href="#home"
          className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </a>

        <a
          href="#about"
          className={`nav-link ${activeLink === "About" ? "active" : ""}`}
          onClick={() => handleLinkClick("About")}
        >
          About
        </a>
        <a
          href="#skills"
          className={`nav-link ${activeLink === "Skills" ? "active" : ""}`}
          onClick={() => handleLinkClick("Skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeLink === "Projects" ? "active" : ""}`}
          onClick={() => handleLinkClick("Projects")}
        >
          Projects
        </a>
        <div className="contact-box">
          <a
            href="#contact"
            className={`nav-link`}
            onClick={() => handleLinkClick("Contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
