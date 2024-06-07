import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/travel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to SJ Migrations</h1>
        <p>Your journey starts here</p>
      </div>
    </section>
  );
};

export default Hero;
