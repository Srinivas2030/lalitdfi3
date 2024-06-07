import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/compass.png" alt="icon" className="navbar-logo" />
        <span className="navbar-brand">SJ Migrations</span>
      </div>
      <div className={`navbar-right ${isMenuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div
        className={`menu-icon ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <img height="40px" width="40px" src="/menu.png" alt="menu icon" />
      </div>
    </nav>
  );
};

export default NavBar;
