import "../styles/contact.css";
// eslint-disable-next-line no-unused-vars
import ParticlesComponent from "../components/ParticlesComponent";

export default function Contact() {
  return (
    <div className="contact-container">
    <div className="pattern-contact">
      
    </div>
      {/* <ParticlesComponent id="particels"  /> */}
      <div className="contact-left">
        <div className="contact-title">
          <div className="contact-main-title">Let&apos;s Get In Touch!</div>
          <div className="contact-subtitle">
            Always open to new opportunities. Feel free to get in touch and
            let&apos;s discuss how we can collaborate.
          </div>
        </div>
        <div className="contact-info-container">
          <div className="contact-row">
            <div className="phone-icon"></div>
            <div className="contact-text">+91 8668030261</div>
          </div>
          <div className="contact-row">
            <div className="mail-icon"></div>
            <div className="contact-text">dharanish816@gmail.com</div>
          </div>
          <div className="contact-row">
            <div className="location-icon"></div>
            <div className="contact-text">Coimbatore, India</div>
          </div>
        </div>
      </div>
      <div className="contact-right"></div>
    </div>
  );
}
