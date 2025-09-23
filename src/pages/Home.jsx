import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider"; // Import the ImageSlider
import HeroSection from "../components/HeroSection";
import FoodCard from "../components/FoodCard";


// Import the images for categories
import pizzaImage from "../assets/images/categories/pizza.jpg";
import northIndianImage from "../assets/images/categories/North-Indian.jpg";
import burgerImage from "../assets/images/categories/burger.jpg";
import biryaniImage from "../assets/images/categories/biryani.jpg";
import chineseImage from "../assets/images/categories/Chinese.jpg";
import cakeImage from "../assets/images/categories/cake.jpg";
import noodlesImage from "../assets/images/categories/noodles.jpg";
import momoImage from "../assets/images/categories/momo.jpg";
import dosaImage from "../assets/images/categories/dosa.jpg";
import choleImage from "../assets/images/categories/chole.jpg";
import kebabImage from "../assets/images/categories/kebab.jpg";
import rollImage from "../assets/images/categories/roll.jpg";
import pohaImage from "../assets/images/categories/poha.jpg";
import parathaImage from "../assets/images/categories/paratha.jpg";
import tea from "../assets/images/categories/tea.jpg";
import lassi from "../assets/images/categories/lassi.jpg";
import coffee from "../assets/images/categories/coffee.jpg";

// Import the API function
import { fetchMenuItems } from "../Services/api";

import "./Home.css";

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  // Fetch the menu items from the API
  useEffect(() => {
    const getMenuItems = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);
    };
    getMenuItems();
  }, []);

  // Define the images and text for the category section
  const foodCategories = [
    { image: pizzaImage, name: "Pizza" },
    { image: northIndianImage, name: "North Indian" },
    { image: burgerImage, name: "Burger" },
    { image: biryaniImage, name: "Biryani" },
    { image: chineseImage, name: "Chinese" },
    { image: cakeImage, name: "Cake" },
    { image: noodlesImage, name: "Noodles" },
    { image: momoImage, name: "Momo" },
    { image: dosaImage, name: "Dosa" },
    { image: choleImage, name: "Chole Bhature" },
    { image: kebabImage, name: "Kebab" },
    { image: rollImage, name: "Rolls" },
    { image: pohaImage, name: "Poha" },
    { image: parathaImage, name: "Paratha" },
    { image: tea, name: "Tea" },
    { image: coffee, name: "Coffee" },
    { image: lassi, name: "Lassi" },
  ];

  // Filter menu items by selected category
  const filteredMenuItems = selectedCategory
    ? menuItems.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase())
    : menuItems;

  // Scroll to the food cards section when category is selected
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const foodCardsSection = document.getElementById("food-cards-section");
    if (foodCardsSection) {
      foodCardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      {/* Add the ImageSlider component with category-based data */}
      <ImageSlider slides={foodCategories} />

      {/* Food Category Scroller */}
      <section className="food-category-section">
        <h2 className="category-title">Order our best food options</h2>
        <div className="category-scroller">
          {foodCategories.map((category, index) => (
            <div
              className="category-item"
              key={index}
              onClick={() => handleCategoryClick(category.name)} // Handle category click
            >
              <img src={category.image} alt={category.name} className="category-image" />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <HeroSection />

      {/* Popular Dishes */}
      <section className="popular-dishes">
        <h2>Popular Dishes</h2>
        <div className="dishes">
          {filteredMenuItems.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id} // Ensure id is passed to FoodCard
              category={item.category} // Ensure category is passed correctly
            />
          ))}
        </div>
      </section>

      {/* Food Cards Section */}
      <section className="food-cards-section" id="food-cards-section">
        <h2>Our Delicious Menu</h2>
        <div className="food-cards">
          {filteredMenuItems.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              price={item.price} // Ensure price is passed correctly
              category={item.category} // Ensure category is passed correctly
              id={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
