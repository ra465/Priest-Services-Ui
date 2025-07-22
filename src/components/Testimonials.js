import React from "react";
import "./Testimonials.css";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";
import T4 from "../assets/T4.png";

const testimonials = [
  {
    image: T1,
    quote:
      "I appreciated the option to choose a Telugu-speaking priest for my parents. The rituals felt authentic, and everything was coordinated professionally.",
    name: "Ravi T",
    designation: "Georgetown, TX",
  },
  {
    image: T2,
    quote:
      "The priest performed our Gruha Pravesham with so much devotion and attention to detail. We felt blessed to start our new journey on such a divine note.",
    name: "Radha",
    designation: "Austin, TX",
  },
  {
    image: T3,
    quote:
      "We booked a Satyanarayana Vratam for our family, and the experience was seamless from booking to completion. The priest explained every mantra and its meaning.",
    name: "Deepa & Karthik",
    designation: "Round Rock, TX",
  },
  {
    image: T4,
    quote:
      "We booked a Satyanarayana Vratam for our family, and the experience was seamless from booking to completion. The priest explained every mantra and its meaning.",
    name: "Ramaraju",
    designation: "Round Rock, TX",
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-heading">What our devotees Says !</h2>
        <div className="testimonial-row">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote">
                <span className="quote-icon">“</span>
                <p>{t.quote}</p>
              </div>
              <div className="testimonial-user">
                <img src={t.image} alt={t.name} />
                <div>
                  <p className="name">{t.name}</p>
                  <p className="designation">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
