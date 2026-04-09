import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import "../styles/featured-products.css";
import FeaturedProduct from "./FeaturedProduct";
import Loading from "./shared/Loading";
const FeaturedProducts = () => {
  const location = useLocation();
  const { products } = useSelector((state) => state.product);

  if (products.length === 0) {
    return <Loading />;
  }
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
          {products.length > 0 &&
            products
              .slice(0, location.pathname.startsWith("/shop/") ? 8 : 10)
              .map((product, index) => (
                <FeaturedProduct key={index} product={product} />
              ))}
        </div>
        {location.pathname === "/" && (
          <Link
            to="/shop/all/tum-kategoriler/0"
            className="btn featured-products-button"
          >
            LOAD MORE PRODUCTS
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
