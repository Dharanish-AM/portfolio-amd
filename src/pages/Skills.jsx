import "../styles/skills.css";

import GitIcon from "../assets/git.png";
import HtmlIcon from "../assets/html.png";
import CssIcon from "../assets/css.png";
import JsIcon from "../assets/javascript.png";
import ReactIcon from "../assets/reactjs.png";
import NodeIcon from "../assets/nodejs.png";
import MongoIcon from "../assets/mongodb.png";
import ReduxIcon from "../assets/redux.png";
import FigmaIcon from "../assets/figma.png";
import FlstudioIcon from "../assets/flstudio-1.png";
import NextjsIcon from "../assets/nextjs2.png";
import TailwindIcon from "../assets/tailwindcss.png";
import TypescriptIcon from "../assets/typescript.png";
import AwsIcon from "../assets/aws.png";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const observedElements = document.querySelectorAll(
      ".tech-icon-container, .skills-point, .skills-title, .skills-text"
    );

    const handleVisibility = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.3,
    });

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="skills-container">
    <div className="up-grid"></div>
    <div className="down-grid"></div>
      <div className="skills-title">
        <div className="title-text-1">EXPERTISE</div>
        <div className="title-text-2">SKILLS.</div>
      </div>
      <div className="skills-content">
        <div className="skills-top-container">
          <div className="skills-text">
            I’m a passionate Full Stack Developer with a strong focus on building scalable, secure, and high-performance digital solutions. I specialize in designing clean and efficient architectures that connect intuitive front-end interfaces with robust back-end systems. My expertise spans across modern technologies including React, Node.js, Spring Boot, and cloud platforms like AWS and Docker. With a deep understanding of CI/CD workflows, databases, and UI/UX principles, I aim to deliver impactful, reliable, and user-centered software experiences that drive innovation and performance.
          </div>
          <div className="skills-overview-list">
            <div className="skills-point">
              Proficient in building interactive, user-friendly web and mobile
              applications using modern frameworks and libraries.
            </div>
            <div className="skills-point">
              Expert at integrating APIs and developing back-end solutions to
              support dynamic and scalable applications.
            </div>
            <div className="skills-point">
              Focused on crafting clean, maintainable code to ensure long-term
              app performance and reliability.
            </div>
            <div className="skills-point">
              Proficient in using version control systems like Git and deploying applications to cloud platforms, ensuring efficient collaboration and scalable, reliable delivery.
            </div>
            <div className="skills-point">
              Strong understanding of UI/UX principles to deliver visually
              appealing, functional designs that align with user needs.
            </div>
          </div>
        </div>

        <div className="skills-bottom-container">
          <div className="tech-container">
            <div className="tech-icon-container">
              <img src={HtmlIcon} alt="HTML Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={CssIcon} alt="CSS Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={JsIcon} alt="JavaScript Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={ReactIcon} alt="React Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={NodeIcon} alt="Node.js Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={MongoIcon} alt="MongoDB Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={ReduxIcon} alt="Redux Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={GitIcon} alt="Git Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={FigmaIcon} alt="Figma Icon" />
            </div>
            <div className="tech-icon-container">
              <img src={FlstudioIcon} alt="FL Studio Icon" />
            </div>
          <div className="tech-icon-container">
            <img src={NextjsIcon} alt="Next.js Icon" />
          </div>
          <div className="tech-icon-container">
            <img src={TailwindIcon} alt="Tailwind CSS Icon" />
          </div>
          <div className="tech-icon-container">
            <img src={TypescriptIcon} alt="TypeScript Icon" />
          </div>
          <div className="tech-icon-container">
            <img src={AwsIcon} alt="AWS Icon" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
