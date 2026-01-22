import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMenuItems } from "../Services/api";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import "./Menu.css";

// Define remote images as constants (DO NOT use import for URLs)
const pizzaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/pizza_o3cm3c.jpg";
const northIndianImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/North-Indian_d5nimo.jpg";
const burgerImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/burger_qeuoj3.jpg";
const biryaniImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/biryani_ddrpu0.jpg";
const chineseImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199889/pasta_xq68s1.jpg";
const cakeImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/cake_xonsvv.jpg";
const noodlesImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/noodles_shymux.jpg";
const momoImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/momo_ghvha0.jpg";
const dosaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199922/dosa_bcsq8d.jpg";
const choleImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/chole_oq5yqp.jpg";
const kebabImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/kebab_bhomgt.jpg";
const rollImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199934/roll_eijwop.jpg";
const pohaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/poha_ycommj.jpg";
const parathaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/paratha_la8g0x.jpg";
const teaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199934/tea_vewlc3.jpg";
const lassiImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/lassi_imtefz.jpg";
const coffeeImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199916/coffee_kxsmum.jpg";

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
    { image: teaImage, name: "Tea" },
    { image: coffeeImage, name: "Coffee" },
    { image: lassiImage, name: "Lassi" },
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
          <FoodCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
