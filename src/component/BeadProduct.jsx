import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaShareAlt } from "react-icons/fa";

const BeadProduct = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [location, setLocation] = useState("Lagos");
  const [city, setCity] = useState("Lekki-Ajah");

  if (!state || !state.product) {
    return <p>Product not found</p>;
  }

  const product = state.product;

  const handleCartClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if the product is already in the cart
    const productExists = cart.find((item) => item.id === product.id);
  
    if (productExists) {
      alert("Product is already in the cart!");
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart!");
    }
  };
  

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">
            ₦{product.price.toLocaleString()} <span className="old-price">₦{(product.price / (1 - product.discount / 100)).toFixed(2)}</span>
            <span className="discount">-{product.discount}%</span>
          </p>
          <p className="product-stock">✅ In stock</p>
          <p className="shipping">+ Shipping from ₦660 to {city}</p>
          <div className="rating">⭐ ⭐ ⭐ ⭐ ☆ (1954 verified ratings)</div>
          <button className="add-to-cart" onClick={handleCartClick}>
            <FaShoppingCart /> Add to Cart
          </button>
          
          <div className="promotions">
            <p>📞 Call 07060000000 To Place Your Order</p>
            <p>💰 Need extra money? Loan up to N500,000 on the JumiaPay app.</p>
            <p>🚚 Enjoy cheaper shipping fees when selecting PickUp Station.</p>
          </div>

          <div className="share-product">
            <FaShareAlt /> Share this product
          </div>
        </div>
      </div>
      
      <div className="delivery-section">
        <h3>DELIVERY & RETURNS</h3>
        <div className="location-select">
          <label>Choose your state</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
          </select>
          
          <label>Choose your city</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {location === "Lagos" && (
              <>
                <option value="Lekki-Ajah">Lekki-Ajah</option>
                <option value="Ikeja">Ikeja</option>
              </>
            )}
            {location === "Abuja" && (
              <>
                <option value="Garki">Garki</option>
                <option value="Wuse">Wuse</option>
              </>
            )}
            {location === "Port Harcourt" && (
              <>
                <option value="Trans Amadi">Trans Amadi</option>
                <option value="Rumuokoro">Rumuokoro</option>
              </>
            )}
          </select>
        </div>
        
        <div className="delivery-options">
          <div className="pickup">
            <h4>Pickup Station</h4>
            <p>Delivery Fees: <strong>₦660</strong></p>
            <p>Ready for pickup between <strong>07 March - 10 March</strong></p>
          </div>

          <div className="door-delivery">
            <h4>Door Delivery</h4>
            <p>Delivery Fees: <strong>₦1,400</strong></p>
            <p>Delivered between <strong>07 March - 10 March</strong></p>
          </div>
        </div>

        <div className="return-policy">
          <h4>Return Policy</h4>
          <p>✅ Free return within 7 days for all eligible items.</p>
        </div>
      </div>
    </div>
  );
};

export default BeadProduct;
