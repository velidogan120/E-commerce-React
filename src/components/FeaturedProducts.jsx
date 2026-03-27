import { useLocation } from "react-router";
import "../styles/featured-products.css";
import FeaturedProduct from "./FeaturedProduct";
const FeaturedProducts = () => {
  const location = useLocation();
  return (
    <div
      className={`featured-products-container ${location.pathname.startsWith("/shop/") ? "product" : ""}`}
    >
      <div className="featured-products">
        <div className="common-header">
          <h4>Featured Products</h4>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="featured-products-list">
          {Array.from({ length: 2 }).map(() =>
            Array.from({
              length: location.pathname.startsWith("/shop/") ? 4 : 5,
            }).map((_, index) => <FeaturedProduct key={index} index={index} />),
          )}
        </div>
        {location.pathname === "/" && (
          <button className="btn featured-products-button">
            LOAD MORE PRODUCTS
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
