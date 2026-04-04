import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import "../styles/product.css";
import { useProductById } from "../hooks/useProducts";
import { useParams } from "react-router";

const Product = () => {
  const { productId } = useParams();
  const { data } = useProductById(productId);

  const activeProduct = data ?? {};
  const gallery = useMemo(() => {
    const images = activeProduct.images
      ?.map((image) => image.url)
      .filter(Boolean);

    return images?.length ? images : ["/product/product-1.jpg"];
  }, [activeProduct.images]);

  const [activeImage, setActiveImage] = useState(0);
  const title = activeProduct.name ?? "Product";
  const price = activeProduct.price ? `$${activeProduct.price}` : "$0.00";
  const rating = activeProduct.rating ?? 0;
  const reviews = activeProduct.sell_count ?? 0;
  const availability = activeProduct.stock > 0 ? "In Stock" : "Out of Stock";

  const goNext = () => {
    setActiveImage((current) =>
      current + 1 < gallery.length ? current + 1 : 0,
    );
  };

  const goPrev = () => {
    setActiveImage((current) =>
      current - 1 >= 0 ? current - 1 : gallery.length - 1,
    );
  };

  return (
    <section className="product-detail-section">
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="product-gallery-main">
            <button
              type="button"
              className="product-gallery-nav product-gallery-nav-left"
              onClick={goPrev}
            >
              <ChevronLeft size={38} />
            </button>
            <img
              src={gallery[activeImage]}
              alt={`${title} preview ${activeImage + 1}`}
              className="product-gallery-main-image"
            />
            <button
              type="button"
              className="product-gallery-nav product-gallery-nav-right"
              onClick={goNext}
            >
              <ChevronRight size={38} />
            </button>
          </div>

          <div className="product-gallery-thumbs">
            {gallery.map((image, index) => (
              <button
                type="button"
                key={image}
                className={`product-thumb ${activeImage === index ? "is-active" : ""}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${title} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail-info">
          <h1>{title}</h1>

          <div className="product-rating-row">
            <div className="product-stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={`star-${index}`}
                  size={18}
                  className={index < Math.round(rating) ? "is-filled" : ""}
                  fill={index < Math.round(rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p>{reviews} Reviews</p>
          </div>

          <p className="product-price">{price}</p>

          <p className="product-stock">
            Availability : <span>{availability}</span>
          </p>

          <p className="product-detail-description">
            {activeProduct.description ?? ""}
          </p>

          <hr className="product-divider" />

          <div className="product-colors">
            <span className="color-dot color-dot-blue" />
            <span className="color-dot color-dot-green" />
            <span className="color-dot color-dot-orange" />
            <span className="color-dot color-dot-navy" />
          </div>

          <div className="product-actions">
            <button type="button" className="product-select-btn">
              Select Options
            </button>
            <button type="button" className="product-icon-btn">
              <Heart size={20} />
            </button>
            <button type="button" className="product-icon-btn">
              <ShoppingCart size={20} />
            </button>
            <button type="button" className="product-icon-btn">
              <Eye size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
