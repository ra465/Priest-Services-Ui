import React from 'react';
import './Locations.css';

import Austin from '../assets/austin.png';
import RoundRock from '../assets/round-rock.png';
import Georgetown from '../assets/georgetown.png';
import CedarPark from '../assets/cedar-park.png';
import Hutto from '../assets/hutto.png';
import Leander from '../assets/leander.png';
import Pflugerville from '../assets/pflugerville.png';
import CentralTexas from '../assets/central-texas.png';
import MapImage from '../assets/map.png';

const locations = [
  { name: 'Austin', img: Austin },
  { name: 'Round Rock', img: RoundRock },
  { name: 'Georgetown', img: Georgetown },
  { name: 'Cedar Park', img: CedarPark },
  { name: 'Hutto', img: Hutto },
  { name: 'Leander', img: Leander },
  { name: 'Pflugerville', img: Pflugerville },
  { name: 'Central Texas', img: CentralTexas },
];

const Locations = () => {
  return (
    <section className="locations-section">
      <h2>Locations We Serve</h2>
      <div className="locations-container">

        <div className="locations-left">
          <p className="subtitle">Our services are available in:</p>
          <div className="location-grid">
            {locations.map((loc, index) => (
              <div className="location-item" key={index}>
                <img src={loc.img} alt={loc.name} />
                <span>{loc.name}</span>
              </div>
            ))}
          </div>
          <button className="view-button">View Services</button>
        </div>

        <div className="locations-right">
          <img src={MapImage} alt="Map" className="map-image" />
        </div>

      </div>
    </section>
  );
};

export default Locations;
