import React from 'react';
import './ServicesSection.css';
import HomeImage from '../assets/Home.png';

const ServicesSection = () => {
  return (
    <section className="services-container">
      <div className="services-content">
        <h2>Services Offered by Our Priests</h2>
        <p>
          Our temple priests are available to perform the following rituals.
          Each ceremony is carried out with care and precision, ensuring
          spiritual benefits and scriptural correctness.
        </p>
      </div>
      <div className="services-image">
        <img src={HomeImage} alt="Priest logo" />
      </div>
    </section>
  );
};

export default ServicesSection;
