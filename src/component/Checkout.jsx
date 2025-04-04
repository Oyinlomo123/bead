import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";



// State-to-City Data
const stateCityMap = {
  Lagos: ["Ikeja", "Surulere", "Lekki", "Yaba", "aja"],
  Abuja: ["Maitama", "Garki", "Wuse", "Gwarinpa"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Eleme", "Oyigbo"],
  Oyo: ["Ibadan", "Ogbomosho", "Iseyin", "Saki"],
  Others: ["Other Cities"],
};

// Function to get delivery fees (dummy data)
const shippingRates = {
  Lagos: { pickup: 1000, door: 1500 },
  Abuja: { pickup: 1200, door: 1700 },
  Rivers: { pickup: 1300, door: 1800 },
  Oyo: { pickup: 1100, door: 1600 },
  Others: { pickup: 1500, door: 2000 },
};

const Checkout = () => {
  const publicKey = "pk_test_e58eed5170cabc62bcaf4348a4a9ee672c327b8f"; // Replace with your actual key
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "Lagos", // Default state
    phone: "",
    email: "",
  });

  const [cart, setCart] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  useEffect(() => {
    calculateTotal(cart);
  }, [cart, shippingFee]);

  // Function to calculate the total price including delivery fee
  const calculateTotal = (cart) => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + shippingFee;
    setTotalPrice(total);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({ ...formData, state: selectedState });
    // Update the city options based on the selected state
    setShippingFee(shippingRates[selectedState]?.pickup || 0); // Set default delivery fee based on state
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setFormData({ ...formData, city: selectedCity });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Paystack configuration
  const paystackConfig = {
    email: formData.email,
    amount: totalPrice * 100, // Convert NGN to kobo
    currency: "NGN",
    publicKey,
    text: `Place Order ₦${totalPrice.toLocaleString()}`,
    onSuccess: (response) => {
      alert("Payment Successful! Transaction Reference: " + response.reference);
      localStorage.removeItem("cart"); // Clear cart after payment
      setCart([]); // Reset state
    },
    onClose: () => {
      alert("Transaction was not completed");
    },
  };

  return (
    <div className="checkout-container">
      <h2>Billing Details</h2>
      <form>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          
        </div>

        <input
          type="text"
          name="address"
          placeholder="House number and street name"
          value={formData.address}
          onChange={handleChange}
          required
        />

              <div className="input-group">
          <select
            name="state"
            value={formData.state}
            onChange={handleStateChange}
            required
          >
            {Object.keys(stateCityMap).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            name="city"
            value={formData.city}
            onChange={handleCityChange}
            required
          >
            {stateCityMap[formData.state].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
      </form>

      <h2>Your Order</h2>
      <div className="order-summary">
        {cart.length > 0 ? (
          cart.map((item) => (
            <p key={item.id}>
              {item.name} x {item.quantity} = <strong>₦{(item.price * item.quantity).toLocaleString()}</strong>
            </p>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p>Total: <strong>₦{totalPrice.toLocaleString()}</strong></p>
      </div>

      {cart.length > 0 && <PaystackButton className="paystack-button" {...paystackConfig} />}
    </div>
  );
};

export default Checkout;
