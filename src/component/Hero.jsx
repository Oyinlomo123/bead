
import imgs from "../assets/imgs.jpeg";


  

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
      <div className="hero-content">
        <h4>HANDCRAFTED BEADED ACCESSORIES</h4>
        <h2>Elegant, African-Inspired, Timeless</h2>
        <p>
        Every piece is meticulously handcrafted with love and precision, bringing you the perfect<br/>
        blend of elegance and sophistication. Designed to make a statement, our accessories celebrate <br/>
        artistry, culture, and timeless beauty, ensuring you stand out with grace and confidence!
        </p>
      </div>

      <div className="hero-image">
        <img src={imgs} alt="Luxury Handmade Beaded Bag" />
      </div>
    </section>

      {/* Product Grid */}
      
    </>
  );
};

export default Hero;
