import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Brand Logo" />
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : "close"}`}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <FaSearch className="icon" />
          <FaUser className="icon" />
         <Link to="/Cart"><FaShoppingBag className="icon" /></Link>
         
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Nav;
