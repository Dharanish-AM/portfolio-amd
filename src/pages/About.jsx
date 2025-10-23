import { useEffect } from "react";
import "../styles/about.css";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elementsToObserve = document.querySelectorAll(
      ".radial-about, .about-image-container, .about-image, .card-1, .card-2, .title"
    );
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-container">
      <div className="title">
        <div className="title-one">INTRODUCTION</div>
        <div className="title-two">About.</div>
      </div>
      <div className="about-content">
        <div className="dot-pattern"></div>
        <div className="left-container-about">
          <div className="radial-about"></div>
          <div className="about-image-container"></div>
          <div className="about-image"></div>
        </div>
        <div className="right-container-about">
          <div className="row-1">
            <div className="card-1">
              <div className="card-title">
                <div className="education-icon card-icon"></div>
                Education
              </div>
              <div className="card-content">
                <ul>
                  <li>
                    <span className="strong">Bachelor of Computer Science</span>
                    <span className="details">
                      - Sri Eshwar College of Engineering, 2023 – 2027 <i>(8.12 CGPA)</i>
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      Higher Secondary Certificate (HSC)
                    </span>
                    <span className="details">
                      - PKD Matriculation Higher Secondary School, 2021 – 2023 <i>(75.5%)</i>
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      Secondary School Leaving Certificate (SSLC)
                    </span>
                    <span className="details">
                      - PKD Matriculation Higher Secondary School, 2020 – 2021
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-1">
              <div className="card-title">
                <div className="achievements-icon card-icon"></div>
                Achievements
              </div>
              <div className="card-content">
                <ul>
                  <li>
                    <span className="strong">
                      SIH 2024 &amp; 2025
                    </span>
                    <span className="details">
                      - Consecutively nominated after clearing prelims to represent the institution with innovative solutions.
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      Futurepreneur 2024 (StartupTN)
                    </span>
                    <span className="details">
                      - Secured 3rd place (Coimbatore zone) for developing a high-impact startup idea.
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      Udhayam 2024
                    </span>
                    <span className="details">
                      - Presented IoT automation solutions designed for elderly and differently-abled individuals.
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      Coding Carnival
                    </span>
                    <span className="details">
                      - Secured 1st Runner-Up among 3200+ participants on Engineers’ Day.
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      GitHub &amp; Leetcode
                    </span>
                    <span className="details">
                      - 13+ Innovative Real-World Projects (7+ Solo Projects) with 900+ Commits, Leetcode: 110+ problems.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="card-2">
              <div className="card-title">
                <div className="experience-icon card-icon"></div>
                Experience
              </div>
              <div className="card-content">
                <ul>
                  <li>
                    <span className="strong">Full Stack Developer Intern</span>
                    <span className="details">
                      - RAMPeX Technologies (ongoing): Engaged in full-stack
                      development, contributing to both front-end and back-end
                      solutions.
                    </span>
                  </li>
                  <li>
                    <span className="strong">Freelance Developer</span>
                    <span className="details">
                      - Specialized in delivering front-end, back-end, and
                      mobile app solutions to clients.
                    </span>
                  </li>
                  <li>
                    <span className="strong">
                      Founder, NETIZENS IT SOLUTION
                    </span>
                    <span className="details">
                      - Co-founder and partner, leading a technology solutions
                      company focused on innovative services.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
