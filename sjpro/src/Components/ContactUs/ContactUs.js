import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact Us</h1>
      <div className="block">
        <img src="./contact_us.jpg" alt="Contact US" className="contact_img" />
        <div className="contact-info">
          <p>
            <span className="highlight">
              <img src="./address.png" alt="Address Icon" className="icon" />{" "}
              Address:
            </span>
            Office No. 312 Emirates Post Office Building Baniyas Square Daira
            Dubai UAE
          </p>
          <p>
            <span className="highlight">
              <img src="./call.png" alt="Phone Icon" className="icon" /> Phone:
            </span>
            9991309493, +9715574-09786
          </p>
          <p>
            <span className="highlight">
              <img src="./email.png" alt="Email Icon" className="icon" /> Email:
            </span>
            sjmigrationsolutions@gmail.com
          </p>
          <p>
            <span className="highlight">
              <img src="./linkedin.png" alt="LinkedIn Icon" className="icon" />{" "}
              LinkedIn:
            </span>
            yoursite
          </p>
          <p>
            <span className="highlight">
              <img
                src="./instagram.png"
                alt="Instagram Icon"
                className="icon-insta"
              />{" "}
              Instagram:
            </span>
            <a
              href="https://www.instagram.com/s_j_migration_solutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              s_j_migration_solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
