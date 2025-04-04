import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import beads21 from "../assets/beads21.jpeg"
import bead22 from "../assets/bead22.jpeg"
import beads22 from "../assets/beads22.jpeg"
import bead23 from "../assets/bead23.jpeg"
import beads23 from "../assets/beads23.jpeg"
import bead21 from "../assets/bead21.jpeg"
import beadss21 from "../assets/beadss21.jpeg"
import bead26 from "../assets/bead26.jpeg"

const products = [
  { id: 1, name: "Fads Beaded Bag", description: " Main body consists of acrylic beads ,handle purely made with pure crystal gems stones only.",
     price: 85000, dollar:85, images:[bead21, beads21, beadss21] },
  { id: 4, name: "Wooden Necklace", description: "A round circular beaded bag which is made with crystals acrylic beads for both front and back panel and pearl beads by the side ,a beauty’ that comes with a wooden bamboo handle",
     price: 70000, dollar:70, images:[beads22, bead22]},
  { id: 3, name: "DEM’s Beaded Bag", description: "Semi Circle two colour Beaded bag embedded with tiny crystal to finish its look", 
    price: 65000, dollar:65, images: [bead23, beads23] },
  { id: 5, name: "Hermes beaded bag", description: "Hermes beaded bag made purely with plastic acrylic beads and pure crystal gem stones ,embedded with the Hermes lock accessories Comes with original detachable chains ", 
    price: 165000, dollar:165, images: [bead26] },
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
             <img src={product.images?.[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₦{product.price.toLocaleString()} 
                <span>(${product.dollar})</span></p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Product;
