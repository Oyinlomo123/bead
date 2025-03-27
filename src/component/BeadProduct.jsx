import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaShareAlt } from "react-icons/fa";




// State-to-City Data
const stateCityMap = {
  Lagos: ["Ikeja", "Surulere", "Lekki", "Yaba","aja"],
  Abuja: ["Maitama", "Garki", "Wuse", "Gwarinpa"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme", "Oyigbo"],
  Oyo: ["Ibadan", "Ogbomosho", "Iseyin", "Saki"],
};

// Function to get the next two business days
const getNextBusinessDays = () => {
  const today = new Date();
  const businessDays = [];
  while (businessDays.length < 2) {
    today.setDate(today.getDate() + 1);
    const dayOfWeek = today.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      businessDays.push(today.toDateString());
    }
  }
  return businessDays;
};

const BeadProduct = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [pickupDate, deliveryDate] = getNextBusinessDays();
  const [selectedState, setSelectedState] = useState("Lagos");
  const [selectedCity, setSelectedCity] = useState(stateCityMap["Lagos"][0]);

  useEffect(() => {
    setSelectedCity(stateCityMap[selectedState][0]);
  }, [selectedState]);


  const product = state.product;

  // Ensure images are always in an array format
  const images = Array.isArray(product.images) ? product.images : [product.image];
  
  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  


  if (!state || !state.product) {
    return <p>Product not found</p>;
  }


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

  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("Medium");
  
  
  return (
    <div className="product-page">
         <div className="product-container">
        <div 
          className="image-slider" 
        >
          <img src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} className="main-image" />
          <div className="thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
  </div>
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <h5>{product.description}</h5>
          <p className="product-price">
            ₦{product.price.toLocaleString()} <span className="old-price">${product.dollar }</span>
           
          </p>
           {/* Select Bag Color */}
           <div className="product-option">
              <p><strong>Color:</strong></p>
              <div className="color-options">
                {["Black", "Brown", "Red", "Blue"].map((color) => (
                  <label
                    key={color}
                    className={`checkbox-label ${selectedColor === color ? "active" : ""}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <input type="checkbox" value={color} checked={selectedColor === color} readOnly />
                    {color}
                  </label>
                ))}
              </div>
              </div>

              {/* Select Bag Size */}
              <div className="product-option">
              <p><strong>Size:</strong></p>
              <div className="size-options">
                {["Small", "Medium", "Large"].map((size) => (
                  <label
                    key={size}
                    className={`checkbox-label ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <input type="checkbox" value={size} checked={selectedSize === size} readOnly />
                    {size}
                  </label>
                ))}
              </div>
              </div>
          <p className="product-stock">✅ In stock</p>
          <div className="rating">⭐ ⭐ ⭐ ⭐ ☆ (14 verified ratings)</div>
          <button className="add-to-cart" onClick={handleCartClick}>
            <FaShoppingCart /> Add to Cart
          </button>
          
          <div className="promotions">
            <p>📞 Call 08131225692 To Place Your Order</p>
            <p>🚚 Enjoy cheaper shipping fees when selecting PickUp Station.</p>
          </div>

          
        </div>
      </div>
      
      <div className="delivery-section">
        <h3>DELIVERY & RETURNS</h3>
        <div className="location-select">
        <p>
            <strong>Choose your state:</strong>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
              {Object.keys(stateCityMap).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </p>
          <p>
            <strong>Select City:</strong>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              {stateCityMap[selectedState].map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </p>
        </div>
        
        <div className="delivery-options">
          <div className="pickup">
            <h4>Pickup Station</h4>
            <p>Delivery Fees: <strong>₦660</strong></p>
            <p>Ready for pickup between <strong>{pickupDate} and {deliveryDate}.</strong></p>
          </div>

          <div className="door-delivery">
            <h4>Door Delivery</h4>
            <p>Delivery Fees: <strong>₦1,400</strong></p>
            <p>Delivered between <strong>{pickupDate} and {deliveryDate}.</strong></p>
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