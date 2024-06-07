import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const aboutRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutTop = aboutRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // if (aboutTop < windowHeight * 0.75) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" ref={aboutRef} className={`about show`}>
      <h1>About Us</h1>
      <div className="reason-container">
        <div className="reason-item">
          <div className="icon-container">
            <img src="money.png" alt="Low Cost" className="reason-icon" />
          </div>
          <div className="reason-text">
            <h2>Budget Friendly</h2>
            <p>
              Experience exceptional value with our services, priced
              significantly lower than the market standard.
            </p>
          </div>
        </div>
        <div className="reason-item">
          <div className="icon-container">
            <img
              src="customer_service.png"
              alt="Customer Service"
              className="reason-icon"
            />
          </div>
          <div className="reason-text">
            <h2>Premium Service</h2>
            <p>
              Discover why 2000+ satisfied customers rave about our unparalleled
              service!
            </p>
          </div>
        </div>
        <div className="reason-item">
          <div className="icon-container">
            <img
              src="connections.png"
              alt="More Connections"
              className="reason-icon"
            />
          </div>
          <div className="reason-text">
            <h2>Extensive Contacts</h2>
            <p>
              Unlock exclusive access to our extensive network, guaranteeing you
              unparalleled deals and connections tailored just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
