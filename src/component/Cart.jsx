import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  
  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="cart-product">
                  <img src={item.images?.[0]} alt={item.name} />
                    <div>
                      <p className="product-name">{item.name}</p>
                      <p className="product-price">₦{item.price.toLocaleString()}</p>

                    </div>
                  </td>
                  <td className="cart-quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </td>
                  <td className="cart-subtotal">₦{(item.price * item.quantity).toLocaleString()} <span>${[item.dollar * item.quantity]}</span></td>
                  <td>
                    <button className="remove-item" onClick={() => removeItem(item.id)}>🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Cart Totals</h3>
            <p>Subtotal: ₦{totalPrice.toLocaleString()}</p>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
