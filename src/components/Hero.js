import React from "react";
import "../assets/styles/Hero.css";
import Nurse from "../assets/images/nurse.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content reveal">
        <div className="hero-text">
          <h1 className="hero-heading">MEDICAL TRAINING<br/>HUB</h1>
          <p className="hero-subheading">
            We will provide excellent training and help
            <br />
            you get certified
          </p>
        </div>
        <a className="hero-button" href="#/form">REGISTER NOW</a>
      </div>
    </div>
  );
}

export default Hero;
