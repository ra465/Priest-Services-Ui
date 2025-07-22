import React from 'react';
import './AboutUsSection.css';
import templeImage from '../assets/temple.png';

const AboutUsSection = () => {
  return (
    <div className="aboutus-container">
      <section className="aboutus-section">
        <div className="aboutus-image">
          <img src={templeImage} alt="Temple" />
        </div>
        <div className="aboutus-content">
          <h2>About the Temple</h2>
          <p>
            Hari Hara Kshethram in Austin, TX is a traditional Hindu temple that
            serves the spiritual and cultural needs of the Indian community in
            Austin and surrounding areas. Rooted in the teachings of Sanatana
            Dharma, our temple is committed to conducting sacred rituals with
            accuracy, reverence, and clarity.
          </p>
          <button className="visit-btn">Visit</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
