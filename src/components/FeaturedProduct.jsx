import "../styles/featured-product.css";
const FeaturedProduct = ({ index }) => {
  return (
    <div className="featured-product">
      <img src={`./featured-products/featured-product-${index + 1}.jpg`} />
      <h5>Graphic Design</h5>
      <p>English Department</p>
      <div className="price">
        <p className="price-old">$16.48</p>
        <p className="price-new">$6.48</p>
      </div>
    </div>
  );
};

export default FeaturedProduct;
