import "../styles/pricing-cards.css";
import PricingCard from "./PricingCard";
const PricingCards = () => {
  return (
    <div className="pricing-cards">
      <div className="pricing-cards-container">
        <div className="common-title">
          <h3>Pricing</h3>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="pricing-cards-time">
            <p>Monthly</p>
            <div className="switch-icon">
              <div className="switch-icon-circle"></div>
            </div>
            <p>Yearly</p>
            <div className="pricing-discount">Save 25%</div>
          </div>
        </div>
        <div className="cards-container">
          {Array.from({ length: 3 }).map((_, index) => (
            <PricingCard key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
