// src/components/CategorySection.jsx

import React, { useState } from 'react';
import './CategorySection.css';

const categories = [
  "South Indian",
  "North Indian",
  "Italian",
  "Chinese",
];

const CategorySection = ({ foodItems, filterFood }) => {
  return (
    <div className="category-container">
      <h2>Select Food Category</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className="category-btn"
            onClick={() => filterFood(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="food-items">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
