import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgs from "../assets/imgs.jpeg"; 
import bead1 from "../assets/bead1.png"
import bead2 from "../assets/bead2.jpg"
import bead3 from "../assets/bead3.jpg"
import bead4 from "../assets/bead4.jpg"
import bead5 from "../assets/bead5.jpg"
import bead6 from "../assets/bead6.jpg"
import bead7 from "../assets/bead7.jpg"
import bead8 from "../assets/bead8.jpg"
import bead9 from "../assets/bead9.jpg"
import bead10 from "../assets/bead10.jpg"
import bead11 from "../assets/bead11.jpg"
import bead12 from "../assets/bead12.jpg"
import bead13 from "../assets/bead13.jpg"
import bead20 from "../assets/bead20.jpg"
import bead16 from "../assets/bead16.jpg"


const products = [
  { id: 1, name: "Bag Tutu – Brown", price: 40000, category: "Beaded Bags", image: bead16},
  { id: 2, name: "Gold x Red", price: 90000, category: "Beaded Bags", image: bead1 },
  { id: 3, name: "Spiky two color bag", price: 90000, category: "Beaded Bags", image: bead2 },
  { id: 4, name: "Bag – Brown", price: 40000,  category: "Beaded Bags", image: bead3 },
  { id: 5, name: "Olaedo  x Red", price: 90000, category: "Beaded Bags", image: bead4 },
  { id: 6, name: "Olaedo", price: 75000, category: "Beaded Bags", image: bead5 },
  { id: 7, name: "Olaedo", price: 75000, category: "Beaded Bags", image: bead6},
  { id: 8, name: "Bag Tutu – Brown", price: 40000, category: "Beaded Bags", image: bead7 },
  { id: 9, name: "Olaedo – Gold x Red", price: 90000, category: "Beaded Bags", image: bead8 },
  { id: 10, name: "Olaedo", price: 75000, category: "Beaded Bags", image: bead9},
  { id: 11, name: "Olaedo", price: 75000, category: "Beaded Bags", image: bead10},
  { id: 12, name: "Bag Tutu – Brown", price: 40000, category: "Beaded Bags", image: bead11 },
  { id: 13, name: "Olaedo – Gold x Red", price: 90000, category: "Beaded Bags", image: bead12 },
  { id: 14, name: "Olaedo", price: 75000, category: "Beaded Bags", image: bead13 },

];

const ITEMS_PER_PAGE = 9;
const popularProducts = [
  { id: 15, name: "Bag Tutu ~ Pink", dollar: 40, price: 40000, image: bead3 },
  { id: 16, name: "Flower Bucket Bag ~ Choco Brown", price: 38500, image: bead5 },
  { id: 17, name: "Ifunaya ~ Pink x Red", price: 60000, image: bead20},
];

const categories = ["Beaded Bags (20)", "Beaded Earrings (1)", "Neck Beads (1)"];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);



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
    <div className="shop-container">
      {/* Sidebar */}
      <aside className="shop-sidebar">
        <h3>Popular Products</h3>
        {popularProducts.map((product) => (
          <div key={product.id} className="sidebar-product">
            <img src={product.image} alt={product.name} onClick={() => navigate("/bead", { state: { product } })} />
            <div>
              <p>{product.name}</p>
              <span>₦{product.price.toLocaleString()}</span> 
              <span>(${product.dollar})</span>
            </div>
          </div>
        ))}

        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="shop-main">
        <input type="text" placeholder="Search products..." className="search-bar" />
        <div className="sort-bar">
          <span>SHOWING 1-9 OF 20 RESULTS</span>
          <select>
            <option>Default sorting</option>
          </select>
        </div>

        <div className="product-grid"  >
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={() => navigate("/bead", { state: { product } })}>
           <img src={product.image} alt={product.name}  />
            <h4>{product.name}</h4>
            <p className="price">₦{product.price.toLocaleString()}</p>
            <p className="category">{product.category}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>

       {/* Pagination */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt; Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next &gt;
        </button>
      </div>
    </div>
      </div>
  );
};

export default Shop;
