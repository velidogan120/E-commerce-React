import { Circle } from "lucide-react";
import "../styles/featured-product.css";
import { Link, useLocation } from "react-router";
const FeaturedProduct = ({ product, viewMode = "grid" }) => {
  const location = useLocation();
  const isShopPage = location.pathname.startsWith("/shop/");
  const isListMode = isShopPage && viewMode === "list";
  const isProductDetailPage = location.pathname.includes("/products/");
  const shouldStartAlignInfo = isProductDetailPage || isListMode;
  const defaultShopPath = "/shop/all/tum-kategoriler/0";
  const basePath = isProductDetailPage
    ? location.pathname.split("/products/")[0]
    : isShopPage
      ? location.pathname
      : defaultShopPath;
  const productLink = `${basePath}/products/${product?.id}`;
  const imageSrc =
    product?.images[0].url ??
    `/featured-products/featured-product-${product?.id ? product.id + 1 : 1}.jpg`;
  const title = product?.description ?? "Graphic Design";
  const category = product?.category ?? "English Department";
  const price = product?.price ? `$${product.price}` : "$6.48";

  return (
    <div
      className={`featured-product ${isListMode ? "featured-product--list" : ""}`}
    >
      <Link
        to={productLink}
        className={`${isShopPage ? "product" : ""} ${isListMode ? "product-list" : ""} ${shouldStartAlignInfo ? "product-align-start" : "product-align-center"}`}
      >
        <img src={imageSrc} alt={title} />
        <div
          className={`product-padding ${shouldStartAlignInfo ? "product-padding--start" : "product-padding--center"}`}
        >
          <div
            className={`product-title-tooltip ${shouldStartAlignInfo ? "product-title-tooltip--start" : ""}`}
            aria-label={title}
          >
            <h5 className="product-title">{title}</h5>
            <span className="product-title-tooltip-content">{title}</span>
          </div>
          <p>{category}</p>
          <div className="price">
            <p className="price-old">$16.48</p>
            <p className="price-new">{price}</p>
          </div>
          {!location.pathname.includes("/products/") &&
            !location.pathname.includes("/shop") === false && (
              <div className="card-colors">
                <Circle fill="currentColor" className="text-sky-500" />
                <Circle fill="currentColor" className="text-teal-700" />
                <Circle fill="currentColor" className="text-orange-400" />
                <Circle fill="currentColor" className="text-slate-800" />
              </div>
            )}
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProduct;
