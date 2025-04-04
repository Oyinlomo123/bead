import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaShareAlt } from "react-icons/fa";




// State-to-City Data
const shippingRates = {
  Lagos: {
    pickup: 660,
    doorDelivery: 1400
  },
  Abuja: {
    pickup: 800,
    doorDelivery: 1500
  },
  Others: {
    pickup: 1000,
    doorDelivery: 2000
  }
};

// State-to-City Data
const stateCityMap = {
  Lagos: ["Ikeja", "Surulere", "Lekki", "Yaba", "Ajao Estate"],
  Abuja: ["Maitama", "Garki", "Wuse", "Gwarinpa"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme", "Oyigbo"],
  Oyo: ["Ibadan", "Ogbomosho", "Iseyin", "Saki"]
};

// Function to get the next two business days
const getNextBusinessDays = () => {
  const today = new Date();
  const businessDays = [];
  while (businessDays.length < 2) {
    today.setDate(today.getDate() + 1);
    const dayOfWeek = today.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {  // Exclude weekends
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
  const [selectedDelivery, setSelectedDelivery] = useState("pickup"); // Default delivery method
  const [shippingFee, setShippingFee] = useState(() => shippingRates["Lagos"]?.pickup || 0); // Default to Lagos pickup rate

  useEffect(() => {
    if (shippingRates[selectedState]) {
      setShippingFee(shippingRates[selectedState][selectedDelivery] || 0);
    } else {
      setShippingFee(shippingRates["Others"][selectedDelivery] || 0); // Fallback for undefined states
    }
  }, [selectedState, selectedDelivery]);
  

  const product = state.product;

  // Ensure images are always in an array format
  const images = Array.isArray(product.images) ? product.images : [product.image];
  
  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  const totalPrice = product.price * quantity;

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
            ₦{product.price.toLocaleString()}           
          </p>
          

              
          <p className="product-stock">✅ In stock</p>
         
          <button className="add-to-cart" onClick={handleCartClick}>
            <FaShoppingCart /> Add to Cart
          </button>
          
          <div className="promotions">
            <p>📞 Call 08131225692 To Place Your Order</p>
            <p>🚚 Enjoy cheaper shipping fees when selecting PickUp Station.</p>
          </div>

          
        </div>
      </div>
      

       

       
    </div>
  );
};

export default BeadProduct;

