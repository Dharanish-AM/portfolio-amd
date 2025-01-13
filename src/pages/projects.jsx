import { useState } from "react";
import "../styles/projects.css";

export default function Projects() {
  const [projects] = useState([
    {
      title: "TownTrolley",
      description:
        "TownTrolley is a web application that allows users to book and manage their town's public transportation.",
      tech: ["#React", "#Express", "#Node", "#MongoDB"],
      github: "https://github.com/user/TownTrolley",
    },
    {
      title: "Earthing Healthiness Monitor",
      description:
        "This project monitors earthing health using smart sensors and displays real-time stats on a user-friendly dashboard.",
      tech: ["#React", "#Express", "#Node", "#MongoDB"],
      github: "https://github.com/user/EarthingMonitor",
    },
    {
      title: "BioKey",
      description:
        "BioKey is a cloud-based storage app secured with fingerprint authentication for sensitive data.",
      tech: ["#React", "#Node", "#MongoDB", "#Wi-Fi Direct"],
      github: "https://github.com/user/BioKey",
    },
    {
      title: "Eatzly",
      description:
        "Eatzly is a platform that connects food enthusiasts with local restaurants for a seamless dining experience.",
      tech: ["#React", "#Express", "#Node", "#MongoDB"],
      github: "https://github.com/user/Eatzly",
    },
  ]);

  return (
    <div className="projects-container">
      <div className="tag-icon"></div>
      <div className="projects-title">
        <div className="projects-title-1">MY WORKS</div>
        <div className="projects-title-2">Projects.</div>
      </div>
      <div className="projects-content">
        <div className="projects-content-1">
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. They reflect my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </div>
        <div className="projects-content-2">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
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
