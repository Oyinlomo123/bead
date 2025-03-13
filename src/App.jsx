import Cart from './component/Cart';
import Home from './component/Home'
import React, { useState, useEffect } from "react";
import Nav from  './component/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './reusable/Product';
import BeadProduct from './component/BeadProduct';
import Shop from "./component/Shop";
import Footer from './reusable/Footer';
import { CartProvider } from "./component/CartContext";
import Aboutus from './component/Aboutus';

function App() {
  
  return (
    <>
      <CartProvider>
        <Router>
        <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bead" element={<BeadProduct/>} />
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<Aboutus/>}/>
          </Routes>
          <Footer/>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
