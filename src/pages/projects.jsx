import { useState, useEffect, useRef } from "react";
import "../styles/projects.css";

export default function Projects() {
  const [projects] = useState([
    {
      title: "TownTrolley",
      description:
        "A dynamic platform that directly connects farmers with customers to conveniently purchase locally produced goods, empowering local agriculture.",
      tech: ["#React", "#Express", "#Node", "#MongoDB", "#Leaflet"],
      github: "https://github.com/JeyaprakashRajesh/TownTrolley",
    },
    {
      title: "Earthing Healthiness Monitor",
      description:
        "A system that detects earth leakage currents using sensors and LoRa technology, providing real-time monitoring on a dashboard.",
      tech: ["#React", "#Express", "#Node", "#MongoDB", "#LoRa", "#Sensors"],
      github: "https://github.com/Dharanish-AM/Earthing-Healthiness-Monitor",
    },
    {
      title: "BioKey",
      description:
        "A cloud-based mobile media storage platform featuring fingerprint authentication and a password vault for enhanced security.",
      tech: ["#React Native", "#Node", "#NodeMCU", "#Fingerprint", "#MongoDB"],
      github: "https://github.com/Dharanish-AM/BioKey",
    },
    {
      title: "Eatzly",
      description:
        "A mobile food ordering platform that enables QR code-based ordering, seamless menu browsing, and quick, hassle-free payments.",
      tech: ["#React", "#Express", "#Node", "#MongoDB", "#QR Codes"],
      github: "https://github.com/JeyaprakashRajesh/Eatzly",
    },
  ]);

  const projectRefs = useRef([]);
  const titleRef = useRef(null);
  const content1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (content1Ref.current) observer.observe(content1Ref.current);

    projectRefs.current.forEach((project) => {
      observer.observe(project);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="projects-container">
      <div className="tag-icon"></div>
      <div className="projects-title" ref={titleRef}>
        <div className="projects-title-1">MY WORKS</div>
        <div className="projects-title-2">Projects.</div>
      </div>
      <div className="projects-content">
        <div className="projects-content-1" ref={content1Ref}>
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </div>
        <div className="projects-content-2">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card"
              style={{ "--animation-delay": `${index * 0.2}s` }} 
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-github"
                title="View on GitHub"
              ></a>
              <div className="card-top">
                <div className="project-card-title">{project.title}</div>
                <div className="project-card-description">
                  {project.description}
                </div>
              </div>
              <div className="project-card-tech">
                {project.tech.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
