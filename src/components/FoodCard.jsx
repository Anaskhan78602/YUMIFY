import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { NotificationContext } from "../context/NotificationContext";
import { motion } from "framer-motion";
import "./FoodCard.css";

// Food image imports
import pizzaImage from "../assets/images/foodcard/pizza.jpg";
import burgerImage from "../assets/images/foodcard/burger.jpg";
import pastaImage from "../assets/images/foodcard/pasta.jpg";
import sushiImage from "../assets/images/foodcard/sushi.jpg";
import tacosImage from "../assets/images/foodcard/tacos.jpg";
import dosaImage from "../assets/images/categories/dosa.jpg";
import samosaImage from "../assets/images/foodcard/samosa.jpg";
import noodlesImage from "../assets/images/foodcard/noodles.jpg";
import idliImage from "../assets/images/foodcard/idli.jpg";
import pizzaMargheritaImage from "../assets/images/foodcard/pizza-margherita.jpg";
import choleBhatureImage from "../assets/images/foodcard/chole-bhature.jpg";

const FoodCard = ({ id, name, price, category }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);
  const { showNotification } = useContext(NotificationContext);

  const handleBuyItem = (item) => {
    // Make sure only serializable properties are passed
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
  
    dispatch({
      type: "ADD_TO_CART",
      payload: cartItem,  // Ensure this object is serializable
    });
    navigate("/checkout"); // Redirect to checkout page
  };
  
  const addToCart = () => {
    const item = { id, name, price, quantity: 1 };
    dispatch({ type: "ADD_TO_CART", payload: item });
    showNotification("Item added to cart");
  };

  const foodImages = {
    pizza: pizzaImage,
    burger: burgerImage,
    pasta: pastaImage,
    sushi: sushiImage,
    tacos: tacosImage,
    dosa: dosaImage,
    samosa: samosaImage,
    noodles: noodlesImage,
    idli: idliImage,
    "pizza margherita": pizzaMargheritaImage,
    "chole bhature": choleBhatureImage,
  };

  const foodImage = foodImages[name.toLowerCase()] || null;

  return (
    <motion.div className="food-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <div className="food-card-image">
      <img
        src={foodImage}
        alt={name}
        loading="lazy"
        onLoad={(e) => e.currentTarget.classList.add("loaded")}
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
      <button onClick={() => handleBuyItem({ id, name, price, category })}>
  Buy Item
</button>

    </div>
  </motion.div>
  
  );
};

export default FoodCard;
