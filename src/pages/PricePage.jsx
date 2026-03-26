import PricingBrands from "../components/PricingBrands";
import PricingCards from "../components/PricingCards";
import PricingFAQ from "../components/PricingFAQ";
import Breadcrumb from "../components/shared/Breadcrumb";
import Trial from "../components/shared/Trial";

const PricePage = () => {
  return (
    <>
      <Breadcrumb />
      <PricingCards />
      <PricingBrands />
      <PricingFAQ />
      <Trial />
    </>
  );
};

export default PricePage;
