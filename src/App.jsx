import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { NotificationProvider } from "./context/NotificationContext"; 
import Checkout from "./pages/Checkout"; // Ensure the path is correct
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notification from "./components/Notification";
import "./App.css"; // Import custom CSS for background styles

const App = () => {
  return (
    <div className="app-background">
      <NotificationProvider> 
        <CartProvider>
          <Router>
            <Navbar />
            <div className="app-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} /> {/* Added route */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer />
            <Notification />
          </Router>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
};

export default App;
