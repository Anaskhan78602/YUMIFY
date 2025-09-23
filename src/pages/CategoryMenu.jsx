import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get category from URL
import { fetchMenuItems } from "../Services/api"; // Ensure API can fetch all or filtered data
import FoodCard from "../components/FoodCard";
import "./CategoryMenu.css";

const CategoryMenu = () => {
  const { category } = useParams(); // Get category from URL
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchMenuItems(); // Fetch all or filtered items
        setMenuItems(data);
      } catch (err) {
        setError("Failed to load menu items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = menuItems.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-menu">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Foods</h1>

      {loading ? (
        <p>Loading menu items...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : filteredItems.length > 0 ? (
        <div className="menu-items">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              price={`₹${item.price}`}
              category={item.category}
            />
          ))}
        </div>
      ) : (
        <p>No items available in this category.</p>
      )}
    </div>
  );
};

export default CategoryMenu;
