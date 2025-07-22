import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import RitualSection from './components/RitualSection';
import WhyChooseUs from './components/WhyChooseUs';
import Locations from './components/Locations';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import BookingForm from './components/BookingForm';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Hero/>
  <AboutUsSection/>
  <ServicesSection/>
  <RitualSection/>
  <WhyChooseUs/>
  <Locations/>
  <HowItWorks/>
  <Testimonials/>
  <FAQSection/>
  <BookingForm/>
  
    </div>
  );
}

export default App;
