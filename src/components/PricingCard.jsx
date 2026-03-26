import { CircleCheck } from "lucide-react";
import "../styles/pricing-card.css";
const PricingCard = ({ index }) => {
  return (
    <div className={`pricing-card ${index === 1 ? "popular" : ""}`}>
      <h4>FREE</h4>
      <p>Organize across all apps by hand</p>
      <div className="pricing-card-price">
        <p>0</p>
        <div>
          <span className="pricing-card-price-currency">$</span>
          <span className="pricing-card-price-amount">Per Month</span>
        </div>
      </div>
      <ul className="pricing-card-features">
        <li>
          <CircleCheck className="success-check" size={32} strokeWidth={2.25} />
          Unlimited product updates
        </li>
        <li>
          <CircleCheck className="success-check" size={32} strokeWidth={2.25} />
          Unlimited product updates
        </li>
        <li>
          <CircleCheck className="success-check" size={32} strokeWidth={2.25} />
          Unlimited product updates
        </li>
        <li>
          <CircleCheck className="success-check" size={32} strokeWidth={2.25} />
          1GB Cloud storage
        </li>
        <li>
          <CircleCheck className="success-check" size={32} strokeWidth={2.25} />
          Email and community support
        </li>
      </ul>
      <button
        className={`btn pricing-card-button ${index === 0 ? "free" : ""}`}
      >
        Try for free
      </button>
    </div>
  );
};

export default PricingCard;
