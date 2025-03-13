import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <Link to="#" className="social-icon">
      Instagram
      </Link>
    </nav>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Beaded Bags (50)</li>
            <li>Beaded Earrings (1)</li>
            <li>Neck Beads (1)</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: (+234) 8131225692</p>
          <p>Need help or have a question?</p>
          <p>Contact us at: <a href="mailto:Tobiojuolape23@gmail.com">Tobiojuolape23@gmail.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 everythingbytiwa.</p>
        <div className="payment-icons">
          <span>VISA</span>
          <span>MASTER</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
