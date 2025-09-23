import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return; // Avoid running the interval if there are no slides

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides]);

  if (slides.length === 0) {
    return <div></div>; // Render fallback if no slides are available
  }

  return (
    <div className="container">
      <div className="discount-container">
        {/* Image Slider Box */}
        <div className="slider-box">
          <div
            className="slider"
            style={{
              backgroundImage: `url(${slides[currentIndex]?.image})`,
            }}
          >
            <div className="overlay">
              <h2>{slides[currentIndex]?.text}</h2>
            </div>

            {/* Fixed "Order Now" Button */}
            <button className="order-btn">Order Now</button>
          </div>
        </div>

        {/* Discount Section */}
        <div className="discount-section">
          <h3>Special Discount!</h3>
          <p>Get 20% off on your first order. Don't miss this limited-time offer.</p>
          <button>Claim Discount</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
