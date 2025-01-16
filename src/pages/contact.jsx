import "../styles/contact.css";
import { useEffect, useRef } from "react";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } 
    );

    const elements = contactRef.current.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  return (
    <div className="contact-container" ref={contactRef}>
      <div className="pattern-contact"></div>
      <div className="contact-left">
        <div className="contact-title animate slide-in">
          <div className="contact-main-title">Let&apos;s Get In Touch!</div>
          <div className="contact-subtitle">
            Always open to new opportunities. Feel free to get in touch and
            let&apos;s discuss how we can collaborate.
          </div>
        </div>
        <div className="contact-info-container animate fade-in">
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
      <div className="contact-right animate fade-in-up">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
