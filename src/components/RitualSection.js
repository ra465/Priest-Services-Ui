import React from 'react';
import './RitualSection.css';
import ArchanaIcon from '../assets/Archana.png';
import HomaIcon from '../assets/Homa.png';
import KalyanaUtsavamIcon from '../assets/Kalyana Utsavam.png';
import DailyPujasIcon from '../assets/Daily Temple Pujas.png';
import GruhaPraveshamIcon from '../assets/Gruha Pravesham.png';
import AnnaprasanaIcon from '../assets/Annaprasana.png';
import AksharabhyasamIcon from '../assets/Aksharabhyasam.png';
import PatraPujaIcon from '../assets/Patra Puja.png';

const ritualsData = [
  {
    title: 'Temple-Based Rituals',
    items: [
      { name: 'Archana', description: 'Devotees may offer their names and prayers to specific deities through this personalized ritual.', icon: ArchanaIcon },
      { name: 'Homa', description: 'Specially scheduled fire offerings (e.g., Chandi Homa, Sudarshana Homa) are conducted in the temple to invoke divine blessings.', icon: HomaIcon },
      { name: 'Kalyana Utsavam', description: 'A symbolic divine marriage ceremony is performed for deities such as Lord Vishnu and Goddess Lakshmi within the temple premises.', icon: KalyanaUtsavamIcon },
      { name: 'Daily Temple Pujas', description: 'Includes morning and evening worship with Suprabhatam, Naivedyam, Aarti, and Deepa Arati as per temple routine.', icon: DailyPujasIcon }
    ]
  },
  {
    title: 'Home and Family Ceremonies',
    items: [
      { name: 'Gruha Pravesham', description: 'Housewarming ritual with Vastu Puja and Ganapati Homa for protection, positivity, and a positive start in a new home.', icon: GruhaPraveshamIcon },
      { name: 'Annaprasana', description: 'A joyful event where a child is offered solid food for the first time, accompanied by prayers for good health and growth.', icon: AnnaprasanaIcon },
      { name: 'Aksharabhyasam', description: 'The formal initiation of a child into education is conducted before they begin school.', icon: AksharabhyasamIcon },
      { name: 'Patra Puja', description: 'Includes morning and evening worship with Suprabhatam, Naivedyam, Aarti, and Deepa Arati as per temple routine.', icon: PatraPujaIcon }
    ]
  }
];

const RitualCard = ({ name, description, icon }) => (
  <div className="ritual-card">
    <div className="ritual-icon">
      <img src={icon} alt={name} />
    </div>
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
);

const RitualCategory = ({ title, items }) => (
  <div className="ritual-category">
    <h3 className="category-title">{title}</h3>
    <div className="ritual-grid">
      {items.map((ritual, index) => (
        <RitualCard key={index} {...ritual} />
      ))}
    </div>
  </div>
);

const RitualSection = () => {
  return (
    <section className="ritual-section">
      {ritualsData.map((cat, index) => (
        <RitualCategory key={index} {...cat} />
      ))}
    </section>
  );
};

export default RitualSection;
