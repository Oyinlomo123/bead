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
                    Everthingbytewa is a brand that was born in my mother’s dining room. Every night,
                    I would sit there with a little torch, hunched over, fully immersed in my creativity as I brought
                    another piece of beaded jewelry to life—each one inspired by something special.
                </p>
                <p>
                    It all started as a little girl’s dream, but now I am proud to share it with you. 
                    Thank you for being a part of this journey.
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