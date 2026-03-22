import "../styles/featured-products-info.css";

const FeaturedProductsInfo = () => {
  return (
    <div className="featured-products-info-container">
      <div className="featured-products-info">
        <div className="featured-products-info-images">
          <img src="./featured-products-info/featured-products-info-1.jpg" />
          <img src="./featured-products-info/featured-products-info-2.jpg" />
        </div>
        <div className="featured-products-info-text">
          <div className="common-title">
            <h4>Featured Products</h4>
            <h3>We love what we do</h3>
          </div>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsInfo;
