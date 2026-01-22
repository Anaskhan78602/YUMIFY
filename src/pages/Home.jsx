import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import HeroSection from "../components/HeroSection";
import FoodCard from "../components/FoodCard";
import "./Home.css";

/* Cloudinary image URLs (MUST be strings, NOT imports) */
const pizzaImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/pizza_o3cm3c.jpg";
const northIndianImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/North-Indian_d5nimo.jpg";
const burgerImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/burger_qeuoj3.jpg";
const biryaniImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/biryani_ddrpu0.jpg";
const chineseImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199889/pasta_xq68s1.jpg";
const cakeImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/cake_xonsvv.jpg";
const noodlesImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/noodles_shymux.jpg";
const momoImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/momo_ghvha0.jpg";
const dosaImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199922/dosa_bcsq8d.jpg";
const choleImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/chole_oq5yqp.jpg";
const kebabImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/kebab_bhomgt.jpg";
const rollImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199934/roll_eijwop.jpg";
const pohaImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/poha_ycommj.jpg";
const parathaImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/paratha_la8g0x.jpg";
const teaImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199934/tea_vewlc3.jpg";
const coffeeImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199916/coffee_kxsmum.jpg";
const lassiImage =
  "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/lassi_imtefz.jpg";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Hardcoded food items with Cloudinary images (same as ImageSlider logic)
  const allFoodItems = [
    { id: 1, name: "Pizza", price: 399, category: "Pizza", image: pizzaImage },
    { id: 2, name: "Burger", price: 199, category: "Burger", image: burgerImage },
    { id: 3, name: "North Indian", price: 199, category: "North Indian", image: northIndianImage },
    { id: 4, name: "Biryani", price: 299, category: "Biryani", image: biryaniImage },
    { id: 5, name: "Chinese", price: 250, category: "Chinese", image: chineseImage },
    { id: 6, name: "Cake", price: 350, category: "Cake", image: cakeImage },
    { id: 7, name: "Noodles", price: 180, category: "Noodles", image: noodlesImage },
    { id: 8, name: "Momo", price: 120, category: "Momo", image: momoImage },
    { id: 9, name: "Dosa", price: 120, category: "Dosa", image: dosaImage },
    { id: 10, name: "Chole Bhature", price: 150, category: "Chole Bhature", image: choleImage },
    { id: 11, name: "Kebab", price: 200, category: "Kebab", image: kebabImage },
    { id: 12, name: "Rolls", price: 150, category: "Rolls", image: rollImage },
    { id: 13, name: "Poha", price: 100, category: "Poha", image: pohaImage },
    { id: 14, name: "Paratha", price: 80, category: "Paratha", image: parathaImage },
    { id: 15, name: "Tea", price: 50, category: "Tea", image: teaImage },
    { id: 16, name: "Coffee", price: 60, category: "Coffee", image: coffeeImage },
    { id: 17, name: "Lassi", price: 70, category: "Lassi", image: lassiImage },
  ];

  const [allItems] = useState(allFoodItems);

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
    { image: teaImage, name: "Tea" },
    { image: coffeeImage, name: "Coffee" },
    { image: lassiImage, name: "Lassi" },
  ];

  const filteredMenuItems = selectedCategory
    ? allItems.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : allItems;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const section = document.getElementById("food-cards-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <ImageSlider slides={foodCategories} />

      <section className="food-category-section">
        <h2 className="category-title">Order our best food options</h2>
        <div className="category-scroller">
          {foodCategories.map((category, index) => (
            <div
              key={index}
              className="category-item"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <HeroSection />

      <section className="popular-dishes">
        <h2>Popular Dishes</h2>
        <div className="dishes">
          {filteredMenuItems.map((item) => (
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
      </section>

      <section className="food-cards-section" id="food-cards-section">
        <h2>Our Delicious Menu</h2>
        <div className="food-cards">
          {filteredMenuItems.map((item) => (
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
      </section>
    </div>
  );
};

export default Home;
