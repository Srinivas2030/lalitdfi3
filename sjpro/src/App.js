import React from "react";
import NavBar from "./Components/Navbar";
import "./index.css";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <ContactUs />
    </>
  );
}

export default App;
