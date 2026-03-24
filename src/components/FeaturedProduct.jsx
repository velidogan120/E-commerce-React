import { Circle } from "lucide-react";
import "../styles/featured-product.css";
import { useLocation } from "react-router";
const FeaturedProduct = ({ index }) => {
  const location = useLocation();
  return (
    <div className="featured-product">
      <img src={`./featured-products/featured-product-${index + 1}.jpg`} />
      <h5>Graphic Design</h5>
      <p>English Department</p>
      <div className="price">
        <p className="price-old">$16.48</p>
        <p className="price-new">$6.48</p>
      </div>
      {location.pathname !== "/" && (
        <div className="card-colors">
          <Circle fill="currentColor" className="text-sky-500" />
          <Circle fill="currentColor" className="text-teal-700" />
          <Circle fill="currentColor" className="text-orange-400" />
          <Circle fill="currentColor" className="text-slate-800" />
        </div>
      )}
    </div>
  );
};

export default FeaturedProduct;
