import Cart from './component/Cart';
import Home from './component/Home'
import React, { useState } from "react";
import Nav from  './component/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './reusable/Product';
import BeadProduct from './component/BeadProduct';
import Shop from "./component/Shop";
import Footer from './reusable/Footer';

function App() {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );
  return (
    <>
      <Router>
      <Nav updateCartCount={setCartCount}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart updateCartCount={setCartCount} />} />
          <Route path="/bead" element={<BeadProduct/>} />
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
