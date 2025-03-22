import React from 'react';
import './Projects.css';


const projectsData = [
  {
    title: 'Hands-Free PC Control',
    link: 'https://github.com/HelloKeerthana/Hands-Free-PC-Control',
    description: 'Implemented a gesture-based mouse control system using OpenCV, MediaPipe, and PyAutoGUI. Control cursor and perform actions with hand gestures.'
  },
  {
    title: 'Dual Hue Color Detection',
    link: 'https://github.com/HelloKeerthana/ColorDetection',
    description: 'Developed a real-time color detection system using OpenCV to identify and distinguish two distinct colors.'
  },
  {
    title: 'SDG Awareness Website',
    link: 'https://github.com/HelloKeerthana/SdgAwareness',
    description: 'Built a website aligned with the Sustainable Development Goals to promote awareness and provide actionable insights.'
  },
  {
    title: 'Solubility Prediction using Linear Regression & Random Forest',
    link: 'https://github.com/HelloKeerthana/Solubility-Prediction-Using-Linear-Regression-and-Random-Forest-Models',
    description: 'Developed models to predict aqueous solubility of chemical compounds using Linear Regression and Random Forest. Evaluated performance with R2 Score and Mean Squared Error.'
  }
];

const Projects = () => {
  return (
    <div className="section-content">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
