import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Whether you have a question or feedback, reach out to us.
        </p>
      </div>
      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>+91 98765 43210</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <p>support@yumify.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>123 Yumify Street, Foodie City, India</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
