import { FaShippingFast, FaAward } from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <FaShippingFast className="feature-icon" />
        <h3>Fast Delivery</h3>
        <p>Orders get delivered on or before the due date.</p>
      </div>
      <div className="feature">
        <FaAward className="feature-icon" />
        <h3>High Quality</h3>
        <p>Each product is handmade from long-lasting exotic beads.</p>
      </div>
      <div className="feature">
        {/* <FaScissors className="feature-icon" /> */}
        <h3>Bespoke Orders</h3>
        <p>Products can be personalized on request.</p>
      </div>
    </section>
  );
};

export default Features;
