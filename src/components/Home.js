import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="section-content">
      <h2 className="section-title">Welcome to My Portfolio</h2>
      <p className="home-description">
        I'm <i><b>Keerthana Panchumarthi</b></i> – a Full Stack Developer and AI/ML enthusiast 
        passionate<br/> about building intelligent tech solutions.
      </p>
      <br></br>
      <img
        className="home-hero"
        src="https://i.pinimg.com/736x/d7/eb/21/d7eb21feffb16e6cb3aea235c3501910.jpg"
        alt="Hero" width={10} height={450}
      />
    </div>
    
  );
};

export default Home;

