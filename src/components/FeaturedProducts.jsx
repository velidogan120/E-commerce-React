import "../styles/featured-products.css";
import FeaturedProduct from "./FeaturedProduct";
const FeaturedProducts = () => {
  return (
    <div className="featured-products-container">
      <div className="featured-products">
        <div className="common-header">
          <h4>Featured Products</h4>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="featured-products-list">
          {Array.from({ length: 2 }).map(() =>
            Array.from({ length: 5 }).map((_, index) => (
              <FeaturedProduct key={index} index={index} />
            )),
          )}
        </div>
        <button className="btn featured-products-button">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
