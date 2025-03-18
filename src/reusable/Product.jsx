import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bead13 from "../assets/bead13.jpg"
import bead20 from "../assets/bead20.jpg"
import bead16 from "../assets/bead16.jpg"

const products = [
  { id: 1, name: "Beaded Bracelet", description: "Handcrafted natural bead bracelet.", price: 29999, image: bead13 },
  { id: 4, name: "Wooden Necklace", description: "Elegant wooden bead necklace.", price: 49999, image: bead16 },
  { id: 3, name: "Gemstone Ring", description: "Stylish ring with natural gemstones.", price: 19999, image: bead20 },
  { id: 5, name: "Gemstone ", description: "Stylish ring with natural gemstones.", price: 59999, image: bead20 },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    
  };


  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} onClick={() => navigate("/bead", { state: { product } })} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">₦{product.price.toLocaleString()}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
      <button className="view-cart-btn" onClick={() => navigate("/cart")}>
        View Cart
      </button>
    </div>
  );
};

export default Product;
