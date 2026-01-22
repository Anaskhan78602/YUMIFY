import React from "react";
import "./SearchBar.css";

// Define cloud URLs as constants
const pizzaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/pizza_o3cm3c.jpg";
const pastaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199889/pasta_xq68s1.jpg";
const sushiImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199888/sushi_hbsplx.jpg";
const pizzaMargheritaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/pizza-margherita.jpg";
const northIndianImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/North-Indian_d5nimo.jpg";
const burgerImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/burger_qeuoj3.jpg";
const biryaniImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199913/biryani_ddrpu0.jpg";
const chineseImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199889/Chinese.jpg";
const cakeImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/cake_xonsvv.jpg";
const samosaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199888/samosa_mkmet5.jpg";
const noodlesImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199928/noodles_shymux.jpg";
const momoImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/momo_ghvha0.jpg";
const dosaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199922/dosa_bcsq8d.jpg";
const choleImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199914/chole_oq5yqp.jpg";
const kebabImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/kebab_bhomgt.jpg";
const rollImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199934/roll_eijwop.jpg";
const pohaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/poha_ycommj.jpg";
const parathaImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199929/paratha_la8g0x.jpg";
const idliImage = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199887/idli_r8oqpp.jpg";
const tea = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199934/tea_vewlc3.jpg";
const lassi = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199923/lassi_imtefz.jpg";
const coffee = "https://res.cloudinary.com/dqi2t1vld/image/upload/v1768199916/coffee_kxsmum.jpg";

const SearchBar = ({ searchQuery, setSearchQuery, suggestions }) => {

  // Map dish names to their images
  const getImageForDish = (name) => {
    switch (name.toLowerCase()) {
      case "pizza": return pizzaImage;
      case "north indian": return northIndianImage;
      case "burger": return burgerImage;
      case "biryani": return biryaniImage;
      case "chinese": return chineseImage;
      case "cake": return cakeImage;
      case "noodles": return noodlesImage;
      case "momo": return momoImage;
      case "dosa": return dosaImage;
      case "chole bhature": return choleImage;
      case "kebab": return kebabImage;
      case "samosa": return samosaImage;
      case "idli": return idliImage;
      case "pasta": return pastaImage;
      case "sushi": return sushiImage;
      case "pizza margherita": return pizzaMargheritaImage;
      case "roll": return rollImage;
      case "poha": return pohaImage;
      case "paratha": return parathaImage;
      case "tea": return tea;
      case "lassi": return lassi;
      case "coffee": return coffee;
      default: return ""; // fallback
    }
  };

  const handleSuggestionClick = (item) => {
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
              onClick={() => handleSuggestionClick(item)}
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
