import React from "react";
import "./HowItWorks.css";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

const steps = [
  { image: step1, text: "Submit request online", bgColor: "#fff5e6" },
  { image: step2, text: "Get Confirmation", bgColor: "#e6ffe6" },
  { image: step3, text: "Get Details and Prepared", bgColor: "#e6ffe6" },
  { image: step4, text: "Ceremony performed at temple or home", bgColor: "#fff5e6" }
];

const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <h2>How It Works ?</h2>
      <div className="steps">
        {steps.map((step, i) => (
          <div className="step-card" key={i} style={{ backgroundColor: step.bgColor }}>
            <div className="icon-wrapper">
              <img src={step.image} alt={`Step ${i + 1}`} />
            </div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
