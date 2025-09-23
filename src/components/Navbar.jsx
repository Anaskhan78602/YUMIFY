import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHome, FaUtensils, FaShoppingCart, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import Logo from "../assets/images/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={(Logo)} alt="Default" />
        YUMIFY</div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome /> Home {/* Home icon */}
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <FaUtensils /> Menu {/* Menu icon */}
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart /> Cart {/* Cart icon */}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle /> About {/* About icon */}
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope /> Contact {/* Contact icon */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
