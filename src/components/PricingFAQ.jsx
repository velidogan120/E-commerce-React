import "../styles/pricing-faq.css";
import PricingFAQCard from "./PricingFaqCard";
const PricingFAQ = () => {
  return (
    <div className="pricing-faq">
      <div className="common-title">
        <h3>Pricing FAQs</h3>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </div>
      <div className="pricing-faq-cards">
        {Array.from({ length: 6 }).map((_, index) => (
          <PricingFAQCard key={index} />
        ))}
      </div>
      <p className="pricing-faq-description">
        Haven’t got your answer? Contact our support
      </p>
    </div>
  );
};

export default PricingFAQ;
