import React, { useState } from 'react';
import ContactModal from './ContactModal';
import './Links.css';

const Links = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="links" className="links">
        <h3>Connect with me 🍀</h3>
        <div className="img-link">
          <img src="data:image/png;base64,PUT_LINKEDIN_BASE64_HERE" alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/keerthana-panchumarthi-9a9589296/" target="_blank" rel="noopener noreferrer">
            <button className="link-btn" id="linkedin">LinkedIn</button>
          </a>
        </div>
        <div className="img-link">
          <img src="data:image/png;base64,PUT_GITHUB_BASE64_HERE" alt="GitHub" />
          <a href="https://github.com/HelloKeerthana" target="_blank" rel="noopener noreferrer">
            <button className="link-btn" id="git">GitHub</button>
          </a>
        </div>
        <div className="img-link">
          <img src="data:image/png;base64,PUT_GMAIL_BASE64_HERE" alt="Gmail" />
          <a href="mailto:keerthana10506@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="link-btn" id="gmail">Gmail</button>
          </a>
        </div>
        <img
          src="https://i.pinimg.com/originals/2a/e4/80/2ae480f827920b1fcb1caeb22b95f180.gif"
          alt="gojo"
        />
        <button className="button" onClick={() => scrollToSection('links')}>Home</button>
        <button className="button contact-btn" onClick={() => setIsModalOpen(true)}>Contact Me</button>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Links;
