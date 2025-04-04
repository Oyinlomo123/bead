import React, { useState } from "react";
import { FaMailBulk, FaSearchLocation, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import Product from "../reusable/Product";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Service Configuration (Replace with your credentials)
    const serviceID = "service_jvi646b";
    const templateID = "template_63hgf2e";
    const publicKey = "v2vhKpkN42IxemG75";

    const emailParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone, // Sending phone number
      subject: formData.subject,
      message: formData.message, // Sending message
    };
  
      
    try {
      await emailjs.send(serviceID, templateID, emailParams, publicKey);
      setSuccessMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <section className="about-section">
        <h1 className="about-title">Contact Us</h1>
      </section>
      <section className="contact-section">
        <div>
          <FaSearchLocation className="icon" />
          <h1>
            Physical Address <br /> <span>No 10b santum drive valley view estate, <br/>ikorodu, Lagos, Nigeria</span>
          </h1>
        </div>
        <div>
          <FaMailBulk className="icon" />
          <h1>
            Email Address <br /> <span>Tobiojuolape23@gmail.com</span>
          </h1>
        </div>
        <div>
          <FaPhone className="icon" />
          <h1>
            Phone Numbers <br /> <span>(+234) 8131225692</span>
          </h1>
        </div>
      </section>
      <div className="contact-container">
        <h2>Send us a message</h2>
        <p>Do you want to share your views with us? Let’s get in touch!</p>
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            value={formData.subject}
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

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <Product />
    </div>
  );
};

export default Contact;
