import { Circle } from "lucide-react";
import "../styles/featured-product.css";
import { Link, useLocation } from "react-router";
const FeaturedProduct = ({ product }) => {
  console.log("🚀 ~ FeaturedProduct ~ product:", product);
  const location = useLocation();
  const imageSrc =
    product?.images[0].url ??
    `/featured-products/featured-product-${product?.id ? product.id + 1 : 1}.jpg`;
  const title = product?.description ?? "Graphic Design";
  const category = product?.category ?? "English Department";
  const price = product?.price ? `$${product.price}` : "$6.48";

  return (
    <div className="featured-product">
      <Link
        to={`${location.pathname}/products/${product?.id}`}
        className={`${location.pathname.startsWith("/shop/") ? "product" : ""}`}
      >
        <img src={imageSrc} alt={title} />
        <div className="product-padding">
          <h5>{title}</h5>
          <p>{category}</p>
          <div className="price">
            <p className="price-old">$16.48</p>
            <p className="price-new">{price}</p>
          </div>
        </div>
      </Link>
      {(location.pathname.includes("/products") ||
        !location.pathname.includes("/shop") === false) && (
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
