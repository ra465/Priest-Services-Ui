import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  { question: "How do I book a priest for a puja or ceremony?", answer: "You can book a priest through our website or contact our support team." },
  { question: "What types of pujas and rituals can I book?", answer: "You can book Satyanarayan puja, Griha Pravesh, Navagraha, and more." },
  { question: "Are services available both at home and in the temple?", answer: "Yes, our priests are available for both home visits and temple services." },
  { question: "Do you provide items needed for the puja?", answer: "Yes, we can arrange items as per your request. Please check the options during booking." },
  { question: "Can I choose a Telugu-speaking or Tamil-speaking priest?", answer: "Yes, you can specify language preferences while booking." },
  { question: "Is online payment or donation available?", answer: "Yes, secure online payment options are available for bookings and donations." }
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="faq-item" onClick={onClick}>
    <div className="faq-question">
      <span>{faq.question}</span>
      <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && <div className="faq-answer">{faq.answer}</div>}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
