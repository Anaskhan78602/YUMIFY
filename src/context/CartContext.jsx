import React, { createContext, useReducer, useEffect } from "react";

// Retrieve and validate cart data from localStorage
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  if (!savedCart) return [];
  try {
    const parsedCart = JSON.parse(savedCart);
    // Ensure all items have valid price and quantity
    return parsedCart.filter(
      (item) =>
        typeof item.price === "number" &&
        !isNaN(item.price) &&
        item.price >= 0 &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);
    
      if (existingItemIndex >= 0) {
        // Update quantity of the existing item
        return state.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    
      // If the item is new, add it to the cart
      return [
        ...state,
        { ...action.payload, quantity: 1 },
      ];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
          : item
      );
      case "SET_CART": // Add this case to set the cart from localStorage
      return action.payload;
    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, getCartFromLocalStorage());

  useEffect(() => {
    // Save only valid items to localStorage
    const validCart = cart.filter(
      (item) =>
        typeof item.price === "number" &&
        !isNaN(item.price) &&
        item.price >= 0 &&
        item.quantity > 0
    );
    localStorage.setItem("cart", JSON.stringify(validCart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
