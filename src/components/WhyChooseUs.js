import React from "react";
import "./WhyChooseUs.css";
import GroupImage from "../assets/Group.png";

const WhyChooseUs = () => {
  return (
    <div className="whychoose-container">
      <div className="whychoose-inner">
        <div className="heading">
          <h2>Why Choose Our Temple Priests?</h2>
        </div>

        <div className="whychoose-content">
          <div className="whychoose-list">
            <ul>
              <li>Deep understanding of Vedic scriptures and ritual procedures</li>
              <li>Can conduct ceremonies in multiple languages (Telugu, Tamil, Sanskrit, Hindi, and English)</li>
              <li>Offer flexible scheduling and onsite services across Austin</li>
              <li>Provide clear instructions and puja material lists to devotees</li>
              <li>Known for discipline, spiritual integrity, and experience</li>
            </ul>
          </div>

          <div className="whychoose-image">
            <img src={GroupImage} alt="Group of Priests" />
            <button className="book-button">Book a Priest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
