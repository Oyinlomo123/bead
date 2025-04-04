import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgs from "../assets/imgs.jpeg"; 
import bead1 from "../assets/bead1.png"
import bead2 from "../assets/bead2.jpg"
import beads2 from "../assets/beads2.jpeg"
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
import bead14 from "../assets/bead14.jpg"
import bead15 from "../assets/bead15.jpg"
import bead28 from "../assets/bead28.jpeg"
import bead25 from "../assets/bead25.jpeg"
import bead24 from "../assets/bead24.jpeg"
import beads24 from "../assets/beads24.jpeg"
import bead16 from "../assets/bead16.jpg"
import bead17 from "../assets/bead17.jpg"
import bead18 from "../assets/bead18.jpg"
import bead19 from "../assets/bead19.jpg"
import beads21 from "../assets/beads21.jpeg"
import bead22 from "../assets/bead22.jpeg"
import beads22 from "../assets/beads22.jpeg"
import bead23 from "../assets/bead23.jpeg"
import beads23 from "../assets/beads23.jpeg"
import bead21 from "../assets/bead21.jpeg"
import beadss21 from "../assets/beadss21.jpeg"


const products = [
  { id: 1, name: "Spiky two color bag",description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 90000,  category: "Beaded Bags", images: [bead1]},
  { id: 2, name: "Tay Beaded Bag",description:"pure Acrylic beads coupled with acrylic tear drop beads", price: 100000, category: "Beaded Bags", images: [bead2, beads2] },
  { id: 3, name: "Doyin  Beaded Bag",description:"pure Acrylic beads coupled with acrylic tear drop beads ", price: 110000,  category: "Beaded Bags", images: [bead3] },
  { id: 4, name: "SHE in Black beaded bag ",description:"pure crystal gemstone incorporated with multiple gem stone beads", price: 130000,  category: "Beaded Bags", images: [bead4]},
  { id: 5, name: "SHE beaded bag",description:" pure crystal gemstone incorporated with multiple gem stone beads", price: 130000, category: "Beaded Bags", images: [bead5, bead6, bead28] },
  { id: 6, name: "Lovie beaded bag", description:"crystal gem stones coupled with round crystal beads ,with pure crystal gem stones beaded strings ", price: 70000,  category: "Beaded Bags", images: [bead25] },
  { id: 7, name: "Maisha bag", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 85000, category: "Beaded Bags", images: [bead7] },
  { id: 8, name: "Berry Bag", description:"Cherry beads with crystal beads", price: 75000, category: "Beaded Bags", images: [bead8] },
  { id: 9, name: "CEO", description:" plastic beads ,with inner linen pocket and outer beaded pocket ", price: 150000, category: "Beaded Bags", images: [bead9, bead10] },
  { id: 11, name: "Silver Aluminum", description:" Aluminum beads used comes with a beaded handle strap", price: 40000, category: "Beaded Bags", images: [bead11] },
  { id: 12, name: "Bag Tutu – Brown", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 40000, category: "Beaded Bags", images: [bead12] },
  { id: 13, name: "Olaedo – Gold x Red", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 90000, category: "Beaded Bags", images: [bead13] },
  { id: 14, name: "Olaedo", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [bead14] },
  { id: 15, name: "CURR’s Beaded", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [beads24, bead24] },
  { id: 16, name: "Olaedo", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [bead16] },
  { id: 17, name: "bagg tutu", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [bead15] },
  { id: 18, name: "Oshe classic", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [bead17] },
  { id: 19, name: "Olaedo", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [bead18] },
  { id: 20, name: "Olaedo", description:"lorem bbbbbbbbbbbbbbbbbbbbbbbbbbbbb", price: 75000, category: "Beaded Bags", images: [bead19] },
  
   { id: 22, name: "Fads Beaded Bag", description: " Main body consists of acrylic beads ,handle purely made with pure crystal gems stones only.",
       price: 85000, images:[bead21, beads21, beadss21] },
    { id: 24, name: "Wooden Necklace", description: "A round circular beaded bag which is made with crystals acrylic beads for both front and back panel and pearl beads by the side ,a beauty’ that comes with a wooden bamboo handle",
       price: 70000, images:[beads22, bead22]},
    { id: 23, name: "DEM’s Beaded Bag", description: "Semi Circle two colour Beaded bag embedded with tiny crystal to finish its look", 
      price: 65000,  images: [bead23, beads23] },
      { id: 15, name: "3 tone color spiky beaded bag", price: 120000, images: [ bead14] },
      { id: 16, name: "Stoned beaded bag in gold", price: 130000, images:[  bead10] },
      { id: 17, name: "Ifunaya ~ Pink x Red", price: 60000, images: [bead20, bead11]},
];

const ITEMS_PER_PAGE = 9;
const popularProducts = [
  { id: 15, name: "3 tone color spiky beaded bag", price: 120000, images: [ bead14] },
  { id: 16, name: "Stoned beaded bag in gold", price: 130000, images:[  bead10] },
  { id: 17, name: "Ifunaya ~ Pink x Red", price: 60000, images: [bead20, bead11]},
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
      alert("Product is already in the cart!");
    }else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart!");
    }
  };
 

  return (
    <>
      <section className="about-section">
            <h1 className="about-title">shop</h1>
      </section>
      <div className="shop-container">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <h3>Popular Products</h3>
          {popularProducts.map((product) => (
            <div key={product.id} className="sidebar-product">
              <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt={product.name} onClick={() => navigate("/bead", { state: { product } })} />
              <div>
                <p>{product.name}</p>
                <span>₦{product.price.toLocaleString()}</span> 
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

          <div className="product-grid">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="product-card" >
                <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt={product.name} onClick={() => navigate("/bead", { state: { product } })}/>
                <h4>{product.name}</h4>
                <p className="price">₦{product.price.toLocaleString()} </p>
                <button onClick={(event) => addToCart(product, event)} >Add to cart</button>
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
    </>
  );
};

export default Shop;
