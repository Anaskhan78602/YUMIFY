import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { NotificationContext } from "../context/NotificationContext";
import { motion } from "framer-motion";
import "./FoodCard.css";

const FoodCard = ({ id, name, price, category, image }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);

  // Debug: Check what image value is being received
  console.log(`FoodCard ${name}: image =`, image);

  const handleBuyItem = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, quantity: 1 },
    });
    navigate("/checkout");
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price, quantity: 1 },
    });
    showNotification("Item added to cart");
  };

  return (
    <motion.div
      className="food-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="food-card-image">
        <img
          src={image || "https://via.placeholder.com/250x180?text=No+Image"}
          alt={name}
          loading="lazy"
          onError={(e) => {
            console.error(`Image failed to load for ${name}:`, image);
            e.target.src = "https://via.placeholder.com/250x180?text=Image+Error";
          }}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      <h3>{name}</h3>
      <p>Price: ₹{price.toLocaleString()}</p>

      <div className="food-card-buttons">
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={handleBuyItem}>Buy Item</button>
      </div>
    </motion.div>
  );
};

export default FoodCard;
