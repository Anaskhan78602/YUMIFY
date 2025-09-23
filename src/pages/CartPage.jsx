import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cart, dispatch } = useContext(CartContext);

  // Calculate total price correctly with validations
  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price); // Ensure price is a number
    const quantity = item.quantity || 0; // Handle missing quantity edge cases

    // Skip invalid items
    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity <= 0) {
      console.error("Invalid price or quantity for item:", item);
      return total;
    }

    return total + price * quantity;
  }, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            {/* Display valid price or fallback */}
            <p>
              Price: ₹{isNaN(parseFloat(item.price)) || parseFloat(item.price) <= 0 ? "0.00" : parseFloat(item.price).toFixed(2)}
            </p>

            <div>
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: Math.max(item.quantity - 1, 1) },
                  })
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: item.quantity + 1 },
                  })
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
      <div className="checkout-container">
        <Link to="/checkout">
          <button className="checkout-btn" disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
