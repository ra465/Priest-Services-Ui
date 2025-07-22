import React from 'react';
import './Hero.css';
import heroImage from '../assets/ganesha.png'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Priest services at<br />Hari hara kshethram</h1>
          <p>
            We offer priest services for a wide range of ceremonies both inside the temple and at
            devotees’ homes. Every ritual is conducted according to Vedic traditions, with proper
            mantras, discipline, and personal guidance.
          </p>
          <button className="cta-button">Book a Priest</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Lord Ganesha" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
