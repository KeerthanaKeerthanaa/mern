import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onContactClick }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'Home' : location.pathname.slice(1);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title">Keerthana Panchumarthi</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><button className="contact-btn" onClick={onContactClick}>Contact Me</button></li>
        </ul>
      </div>
      <div className="breadcrumb">
        {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
      </div>
    </nav>
  );
};

export default Navbar;
