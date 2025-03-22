import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactModal from './components/ContactModal';
import './App.css';

const App = () => {
  // Manage modal open/close at the App level so Navbar can trigger it.
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar onContactClick={() => setIsModalOpen(true)} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
