import React from "react";
import "./SearchBar.css";

       // Import images
       import pizzaImage from "../assets/images/categories/pizza.jpg";
       import pastaImage from "../assets/images/foodcard/pasta.jpg";
       import sushiImage from "../assets/images/foodcard/sushi.jpg";
       import pizzaMargheritaImage from "../assets/images/foodcard/pizza-margherita.jpg";
       import northIndianImage from "../assets/images/categories/North-Indian.jpg";
       import burgerImage from "../assets/images/categories/burger.jpg";
       import biryaniImage from "../assets/images/categories/biryani.jpg";
       import chineseImage from "../assets/images/categories/Chinese.jpg";
       import cakeImage from "../assets/images/categories/cake.jpg";
       import samosaImage from "../assets/images/foodcard/samosa.jpg";
       import noodlesImage from "../assets/images/categories/noodles.jpg";
       import momoImage from "../assets/images/categories/momo.jpg";
       import dosaImage from "../assets/images/categories/dosa.jpg";
       import choleImage from "../assets/images/categories/chole.jpg";
       import kebabImage from "../assets/images/categories/kebab.jpg";
       import rollImage from "../assets/images/categories/roll.jpg";
       import pohaImage from "../assets/images/categories/poha.jpg";
       import parathaImage from "../assets/images/categories/paratha.jpg";
       import idliImage from "../assets/images/foodcard/idli.jpg";
       import tea from "../assets/images/categories/tea.jpg";
       import lassi from "../assets/images/categories/lassi.jpg";
       import coffee from "../assets/images/categories/coffee.jpg";
// (Import the rest of the images as before...)

const SearchBar = ({ searchQuery, setSearchQuery, suggestions }) => {


  // Function to map suggestion names to images
  const getImageForDish = (name) => {
    switch (name.toLowerCase()) {
      case "pizza":
        return pizzaImage;
      case "north indian":
        return northIndianImage;
      case "burger":
        return burgerImage;
      case "biryani":
        return biryaniImage;
      case "chinese":
        return chineseImage;
      case "cake":
        return cakeImage;
      case "noodles":
        return noodlesImage;
      case "momo":
        return momoImage;
      case "dosa":
        return dosaImage;
      case "chole bhature":
        return choleImage;
      case "kebab":
        return kebabImage;
      case "samosa":
        return samosaImage;
      case "idli":
        return idliImage;
      case "pasta":
        return pastaImage;
      case "sushi":
        return sushiImage;
      case "pizza margherita":
        return pizzaMargheritaImage;
      case "roll":
        return rollImage;
      case "poha":
        return pohaImage;
      case "paratha":
        return parathaImage;
      case "tea":
        return tea;
      case "lassi":
        return lassi;
      case "coffee":
        return coffee;
      default:
        return ""; // Return empty if no image found
    }
  };                                                                           



  const handleSuggestionClick = (item) => {
    // Scroll to the food card section of the clicked item
    const targetFoodCard = document.getElementById(`food-card-${item.id}`);
    if (targetFoodCard) {
      targetFoodCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for dishes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(item)} // Scroll down on click
            >
              <img
                src={getImageForDish(item.name)}
                alt={item.name}
                className="suggestion-image"
              />
              <div className="suggestion-info">
                <p className="suggestion-name">{item.name}</p>
                <p className="suggestion-price">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
