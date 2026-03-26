import "../styles/pricing-brands.css";
import Brands from "./Brands";
const PricingBrands = () => {
  return (
    <div className="pricing-brands">
      <div className="pricing-brands-container">
        <p className="pricing-brands-title">
          Trusted By Over 4000 Big Companies
        </p>
        <Brands />
      </div>
    </div>
  );
};

export default PricingBrands;
