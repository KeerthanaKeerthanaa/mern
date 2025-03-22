import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Me</h2>
        <div className="modal-links">
          <div className="modal-link">
            <FaLinkedin size={40} className="icon" />
            <a href="https://www.linkedin.com/in/keerthana-panchumarthi-9a9589296/" target="_blank" rel="noopener noreferrer">
              <button className="link-btn">LinkedIn</button>
            </a>
          </div>
          <div className="modal-link">
            <FaGithub size={40} className="icon" />
            <a href="https://github.com/HelloKeerthana" target="_blank" rel="noopener noreferrer">
              <button className="link-btn">GitHub</button>
            </a>
          </div>
          <div className="modal-link">
            <MdEmail size={40} className="icon" />
            <a href="mailto:keerthana10506@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="link-btn">Email</button>
            </a>
          </div>
        </div>
        <img
          className="gojo-gif"
          src="https://i.pinimg.com/originals/2a/e4/80/2ae480f827920b1fcb1caeb22b95f180.gif"
          alt="Gojo"
        /><br></br><br></br><br></br>
        <button className="button close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
