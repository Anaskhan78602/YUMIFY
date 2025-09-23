import React from "react";
import "./About.css";
import { FaSmile, FaLightbulb, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About Yumify</h1>
        <p className="about-subtitle">

<h2>"Savor the Flavor, Anytime, Anywhere!"</h2>
          Crafted with passion, one line of code at a time.
        </p>
      </div>
      <div className="about-content">
        <div className="section">
          <h2 className="section-title">The Story Behind Yumify</h2>
          <p>
            Yumify was born from a vision: to make food delivery not just
            convenient but delightful. Built entirely by me, this website
            combines creativity and technology to bring you a unique user
            experience.
          </p>
        </div>
        <div className="features-section">
          <h2 className="section-title">What Makes Yumify Special?</h2>
          <div className="features">
            <div className="feature">
              <FaLightbulb className="feature-icon" />
              <h3>Innovative Design</h3>
              <p>
                Yumify features vibrant visuals and smooth navigation for an
                engaging experience.
              </p>
            </div>
            <div className="feature">
              <FaSmile className="feature-icon" />
              <h3>Personal Touch</h3>
              <p>
                Every detail reflects individual creativity, making Yumify truly
                unique.
              </p>
            </div>
            <div className="feature">
              <FaUser className="feature-icon" />
              <h3>Single Creator</h3>
              <p>
                Designed and developed entirely by one person, showcasing
                passion and dedication.
              </p>
            </div>
          </div>
        </div>
        <div className="future-section">
          <h2 className="section-title">The Future of Yumify</h2>
          <p>
            This is just the beginning. New features and enhancements are
            constantly in the works to make Yumify your favorite food delivery
            destination.
          </p>
        </div>
        <div className="thank-you">
          <h2 className="section-title">Thank You!</h2>
          <p>
            Your support inspires me to continue growing and improving Yumify.
            Together, let’s make food delivery extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
