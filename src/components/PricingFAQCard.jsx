import { ChevronRight } from "lucide-react";
import "../styles/pricing-faq-card.css";
const PricingFAQCard = () => {
  return (
    <div className="pricing-faq-card">
      <div className="pricing-faq-card-icon">
        <ChevronRight />
      </div>
      <div className="pricing-faq-card-content">
        <h4>How many team members can I invite?</h4>
        <p>
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </p>
      </div>
    </div>
  );
};

export default PricingFAQCard;
