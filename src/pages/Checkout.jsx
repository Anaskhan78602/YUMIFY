import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { NotificationContext } from "../context/NotificationContext";
import jsPDF from "jspdf";
import "./Checkout.css";

const Checkout = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { showNotification } = useContext(NotificationContext);

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price);
    const quantity = item.quantity;
    return total + price * quantity;
  }, 0);

  // Handle Place Order
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch({ type: "CLEAR_CART" }); // Clear the cart after placing the order
    showNotification("Order placed successfully");
    localStorage.removeItem("cart"); // Clear cart from localStorage
  };

  // Handle Receipt Generation
  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Order Receipt", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let y = 40; // Initial vertical position
    cart.forEach((item) => {
      doc.text(
        `${item.name} - ₹${item.price} x ${item.quantity} = ₹${(
          item.price * item.quantity
        ).toFixed(2)}`,
        20,
        y
      );
      y += 10;
    });
    doc.text(`Total: ₹${totalPrice.toFixed(2)}`, 20, y + 10);

    doc.save("receipt.pdf"); // Save the PDF as "receipt.pdf"
  };

  // Persist cart data in localStorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Store cart in localStorage
    }
  }, [cart]);

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      dispatch({ type: "SET_CART", payload: savedCart }); // Set cart from localStorage
    }
  }, [dispatch]);

  // Remove Item from Cart
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    showNotification("Item removed from cart");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 && !orderPlaced ? (
        <p>Your cart is empty! Add some items to proceed.</p>
      ) : orderPlaced ? (
        <div className="order-success">
          <h2>Order Successfully Placed!</h2>
          <p>Thank you for shopping with us!</p>
          <p id="wait">Kindly, Wait For Your Order   !!!</p>
        </div>
      ) : (
        <div className="checkout-details">
          <h2>Order Summary</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span className="item-name">{item.name}</span>
                <span className="item-price">
                  ₹{item.price} x {item.quantity} = ₹
                  {(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className="remove-item-button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
          <h3 className="total-price">Total = ₹{totalPrice.toFixed(2)}</h3>
          <div className="checkout-buttons">
            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
            <button className="generate-receipt-button" onClick={generateReceipt}>
              Generate Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
