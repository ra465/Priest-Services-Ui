import React from 'react';
import './BookingForm.css';
import priestImage from '../assets/priest.png';

const BookingForm = () => {
  return (
    <div className="container">
      <div className="booking-section">
        <div className="booking-left">
          <h2 className="booking-title">Ready to Book a Priest?</h2>
          <div className="booking-image">
            <img src={priestImage} alt="Priest" />
          </div>
        </div>
        <div className="booking-right">
          <p className="booking-desc">
            We are here to serve your spiritual needs—whether you're performing a simple home puja or organizing a major Vedic event. Our temple priests bring authenticity, discipline, and peace of mind to every ceremony.
          </p>

          <form className="booking-form">
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email Address" />
              <input type="tel" name="phone" placeholder="Mobile Number" />
            </div>
            <div className="form-row">
              <select name="service" defaultValue="" required>
                <option value="" disabled hidden>Service</option>
                <option value="griha-pravesh">Griha Pravesh</option>
                <option value="satyanarayan">Satyanarayan Puja</option>
              </select>
              <select name="location" defaultValue="" required>
                <option value="" disabled hidden>Location</option>
                <option value="home">At Home</option>
                <option value="temple">In Temple</option>
              </select>
            </div>
            <input type="text" name="address" placeholder="Enter Address..." />
            <textarea name="message" rows="4" placeholder="Message"></textarea>
            <button type="submit" className="booking-button">Book a Priest</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
