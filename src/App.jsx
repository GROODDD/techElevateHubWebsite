import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Offer from "./pages/Offer";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    offer: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <div>
        <div ref={sections.home}>
          <Home />
        </div>
        <div ref={sections.about}>
          <AboutUs />
        </div>
        <div ref={sections.services}>
          <Services />
        </div>
        <div ref={sections.offer}>
          <Offer />
        </div>
        <div ref={sections.contact}>
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
