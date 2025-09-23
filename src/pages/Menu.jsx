import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMenuItems } from "../Services/api";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import "./Menu.css";

// Import category images
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

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMenuItems();
      setMenuItems(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredSuggestions = menuItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, menuItems]);

  const foodCategories = [
    { image: pizzaImage, name: "Pizza" },
    { image: northIndianImage, name: "North Indian" },
    { image: burgerImage, name: "Burger" },
    { image: biryaniImage, name: "Biryani" },
    { image: chineseImage, name: "Chinese" },
    { image: cakeImage, name: "Cake" },
    { image: noodlesImage, name: "Noodles" },
    { image: momoImage, name: "Momos" },
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

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];

    return (matchesSearch || matchesCategory) && matchesPrice && !isNaN(item.price);
  });

  const handlePriceRangeChange = (e) => {
    const [min, max] = e.target.value.split(",").map(Number);
    setPriceRange([min, max]);
  };

  const handleCategoryClick = (category) => {
    navigate(`/menu/${category}`);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        suggestions={suggestions}
      />

      <div className="price-filter">
        <h2>Filter by Price</h2>
        <select onChange={handlePriceRangeChange} value={`${priceRange[0]},${priceRange[1]}`}>
          <option value="0,100">₹0 - ₹100</option>
          <option value="100,200">₹100 - ₹200</option>
          <option value="200,500">₹200 - ₹500</option>
          <option value="500,1000">₹500 - ₹1000</option>
        </select>
      </div>

      <section className="food-category-section">
        <h2 className="category-title">Order our best food options</h2>
        <div className="category-scroller">
          {foodCategories.map((category, index) => (
            <div
              className="category-item"
              key={index}
              onClick={() => handleCategoryClick(category.name)}
            >
              <img src={category.image} alt={category.name} className="category-image" />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div id="food-cards-section" className="menu-items">
        {filteredItems.map((item) => (
          <FoodCard key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
