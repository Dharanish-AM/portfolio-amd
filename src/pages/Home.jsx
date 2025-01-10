import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="up-gradient"></div>
      <Navbar />
      <div className="home-content">
        <div className="radial-gradient"></div>
        <div className="curl" ></div>
        <div className="left-container">
          <div className="v-line-container">
            <div className="line-circle"></div>
            <div className="line"></div>
          </div>
          <div className="name-info-container">
            <div className="greeting-name">
              <div className="hi-greeting">Hi,</div>
              <div className="name-greeting">
                I’m <span className="name">Dharanish A M!</span> 👋
              </div>
            </div>
            <div className="short-info">
              I’m a full-stack developer dedicated to crafting efficient,
              scalable solutions that drive innovation and deliver tangible
              impact.
            </div>
            <div className="social-container">
              <div className="icons github"></div>
              <div className="icons linkedin"></div>
              <div className="icons behance"></div>
              <div className="icons mail"></div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="image-container">
            <div className="circle"></div>
            <div className="profile"></div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="mouse"></div>
      </div>
      <div className="down-gradient"></div>
    </div>
  );
}
