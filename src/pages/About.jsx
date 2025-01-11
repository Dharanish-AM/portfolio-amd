import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="title">
        <div className="title-one">INTRODUCTION</div>
        <div className="title-two">About.</div>
      </div>
      <div className="about-content">
        <div className="left-container-about">
          <div className="radial-about"></div>
          <div className="about-image-container"></div>
          <div className="about-image"></div>
        </div>
        <div className="right-container-about"></div>
      </div>
    </div>
  );
}
