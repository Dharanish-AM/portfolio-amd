import Navbar from "../components/Navbar";
import "../styles/home.css";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://docs.google.com/document/d/17laRS8CTAlXNJon7XP5yal49vzY4rIqD/export?format=pdf';
    link.download = 'CV.pdf';
    link.click();
  };
  return (
    <div className="home-container">
      <div className="up-gradient"></div>
      <Navbar />

      <div className="home-content">
        <div className="radial-gradient"></div>
        <div className="curl"></div>
        <div className="curl two"></div>
        <div className="left-container">
          <div className="css-blurry-gradient-1"></div>
          <div className="v-line-container">
            <div className="line-circle"></div>
            <div className="line"></div>
          </div>
          <div className="details">
            <div className="name-info-container">
              <div className="greeting-name">
                <div className="hi-greeting">Hi,</div>
                <div className="name-greeting">
                  <span>I’m&nbsp;</span>
                  <span className="name typing-effect">Dharanish A M👋🏻</span>
                </div>
              </div>

              <div className="short-info">
                I’m a software engineer and designer dedicated to crafting efficient, user-centric solutions that drive innovation and deliver tangible impact.
              </div>
            </div>
            <div className="social-container">
              <div className="icons">
                <a href="https://github.com/Dharanish-AM" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={"2.2vw"} color="#a6a6a6" />
                </a>
              </div>
              <div className="icons">
                <a href="https://www.linkedin.com/in/dharanish-a-m-40a797295/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={"2.2vw"} color="#a6a6a6" />
                </a>
              </div>
              <div className="icons">
                <a href="https://www.instagram.com/dharanish_15_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={"2.2vw"} color="#a6a6a6" />
                </a>
              </div>
              <div className="icons">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dharanish816@gmail.com&su=Subject&body=Hello%20Dharanish,%20I%20wanted%20to%20get%20in%20touch." target="_blank" rel="noopener noreferrer">
                  <FaEnvelope size={"2.2vw"} color="#a6a6a6" />
                </a>
              </div>



              <button className="download-cv" onClick={downloadCV}>
                Download CV
              </button>
            </div>

          </div>
        </div>
        <div className="right-container">
          <div className="css-blurry-gradient-2"></div>
          <div className="image-container">
            <div className="circle"></div>
            <div className="profile"></div>
          </div>
        </div>
        {/* <div className="dot-pattern"></div> */}
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>

      </div>

      <div className="down-gradient"></div>
    </div>
  );
}
