import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="section-content">
      <h2 className="section-title">About Me</h2>
      <p>
        I'm a <b><i>Full Stack Developer and AI/ML enthusiast</i></b> with expertise in <b>Python, Machine Learning, 
        and computer vision</b>. I love tackling complex challenges and innovating new solutions.
      </p>
      <img src="/me.jpeg" alt="Profile" className="profile-img" />
    </div>
  );
};

export default About;
