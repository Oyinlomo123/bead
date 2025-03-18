import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import { useContext } from "react";
import { CartContext } from "../component/CartContext";

import { useNavigate } from "react-router-dom";

const Nav = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext); // ✅ Get cart from context

  // Ensure cart is defined before using length
  const cartItemCount = cart ? cart.length : 0;
  return (
    <nav className="nav" >
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Brand Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : "close"}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaUser className="icon" />
          <Link to="/cart" className="cart-icon">
        <FaShoppingCart className="icon" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </Link>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        </div>

        
      </div>
    </nav>
  );
};

export default Nav;
