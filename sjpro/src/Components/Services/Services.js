import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1>Our Services</h1>
      <div className="card-container">
        <div className="card">
          <img src="visa-work.jpg" alt="Visa Work" className="card-image" />
          <div className="card-text">
            <h2>Visa Work</h2>
            <p>
              We provide comprehensive visa services to help you with your work
              visa needs.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="family_tour.jpg"
            alt="Family Tour Package"
            className="card-image"
          />
          <div className="card-text">
            <h2>Family Tour Package</h2>
            <p>
              Create lasting memories with our extraordinary family tour
              packages for an unforgettable vacation experience.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            height={200}
            src="honeymoon_tour.jpg"
            alt="Honeymoon Package"
            className="card-image"
          />
          <div className="card-text">
            <h2>Honeymoon Package</h2>
            <p>
              Experience the pinnacle of romance with our luxurious honeymoon
              packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
