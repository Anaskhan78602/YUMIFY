import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2200); // Change image every 2.2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides]);

  // Function to handle redirection to the menu page when an image is clicked
  const handleImageClick = () => {
    navigate("/menu"); // Navigate to the menu page
  };

  if (slides.length === 0) {
    return <div>No slides available</div>; // Render fallback if no slides are available
  }

  return (
    <div className="container">
      {/* Left side: Image Slider Box */}
      <div className="slider-box">
        <div className="slider" onClick={handleImageClick}>
          <img 
            src={slides[currentIndex]?.image} 
            alt="Slider"
            loading="lazy" // Prioritize loading the first image
            width="100%" // Set width and height to avoid layout shifts
            height="100%" 
            style={{ objectFit: 'cover' }} // Ensure the image covers the area without stretching
          />
         
          {/* Fixed "Order Now" Button */}
          <button className="order-btn">Order Now</button>
        </div>
      </div>

      {/* Right side: Discount Section */}
      <div className="discount-section">
        <h3>Special Discount!</h3>
        <p>Get 20% off on your first order. Don't miss this limited-time offer.</p>
        <button>Claim Discount</button>
      </div>
    </div>
  );
};

export default ImageSlider;
