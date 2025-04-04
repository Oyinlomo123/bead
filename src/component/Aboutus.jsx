import React from 'react'
import ceo from "../assets/ceo.jpg"


const Aboutus = () => {
  return (
    <div>
        <section className="about-section">
            <h1 className="about-title">About Us</h1>
        </section>
        <section className="about-container">
            {/* Left - Image */}
            <div className="about-image">
                <img src={ceo} alt="Ojuolape Oluwafunmilayo Tobiloba" />
            </div>

            {/* Right - Text Content */}
            <div className="about-text">
                <h2>hey! you found me <span>😊</span></h2>
                <p>
                TEWATHEBEADMAKER is An African born brand where Handmade bags are made to be unique, 
                and impossible to ignore—that’s what my beaded bags are all about. I design one-of-a-kind 
                statement pieces that blend craftsmanship with creativity, making sure you carry something
                 that stands out. Every bead is carefully placed, every pattern is intentional, and every bag
                  is made with love. If you love fashion that’s bold, 
                artistic, and full of personality, you’re in the right place!”
                </p>
               
                <p className="about-name">Ojuolape Oluwafunmilayo Tobiloba</p>
                <p className="about-role">CEO, Director</p>
            </div>
        </section>
        <div className="newsletter-container" >
            <h2>Subscribe to Our Newsletter</h2>
            <div className="newsletter-form">
                <input type="email" placeholder="Your Email Address *" required/>
                <button type="submit">SUBSCRIBE</button>
            </div>
        </div>

    </div>
  )
}

export default Aboutus