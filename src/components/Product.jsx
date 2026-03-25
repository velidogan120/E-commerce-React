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

const Product = ({ productId }) => {
  const gallery = useMemo(
    () => ["/product/product-1.jpg", "/product/product-2.jpg"],
    [],
  );

  const [activeImage, setActiveImage] = useState(0);

  const activeProduct = useMemo(() => {
    const catalog = {
      1: {
        title: "Floating Phone",
        price: "$1,139.33",
        reviews: 10,
        description:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequat door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      2: {
        title: "Modern Accent Chair",
        price: "$899.00",
        reviews: 18,
        description:
          "Structured comfort for contemporary spaces. Designed with balanced proportions and premium material details for daily living.",
      },
      3: {
        title: "Premium Lifestyle Set",
        price: "$729.50",
        reviews: 14,
        description:
          "A curated everyday collection built for utility and style. Crafted for people who want clean lines and timeless textures.",
      },
      default: {
        title: "Floating Phone",
        price: "$1,139.33",
        reviews: 10,
        description:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequat door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
    };

    return catalog[productId] ?? catalog.default;
  }, [productId]);

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
              aria-label="Previous image"
            >
              <ChevronLeft size={38} />
            </button>
            <img
              src={gallery[activeImage]}
              alt={`${activeProduct.title} preview ${activeImage + 1}`}
              className="product-gallery-main-image"
            />
            <button
              type="button"
              className="product-gallery-nav product-gallery-nav-right"
              onClick={goNext}
              aria-label="Next image"
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
                aria-label={`Open image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${activeProduct.title} thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail-info">
          <h1>{activeProduct.title}</h1>

          <div className="product-rating-row">
            <div className="product-stars" aria-label="Rated 4 out of 5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={`star-${index}`}
                  size={18}
                  className={index < 4 ? "is-filled" : ""}
                  fill={index < 4 ? "currentColor" : "none"}
                />
              ))}
            </div>
            <p>{activeProduct.reviews} Reviews</p>
          </div>

          <p className="product-price">{activeProduct.price}</p>

          <p className="product-stock">
            Availability : <span>In Stock</span>
          </p>

          <p className="product-detail-description">
            {activeProduct.description}
          </p>

          <hr className="product-divider" />

          <div className="product-colors" aria-label="Available colors">
            <span className="color-dot color-dot-blue" />
            <span className="color-dot color-dot-green" />
            <span className="color-dot color-dot-orange" />
            <span className="color-dot color-dot-navy" />
          </div>

          <div className="product-actions">
            <button type="button" className="product-select-btn">
              Select Options
            </button>
            <button
              type="button"
              className="product-icon-btn"
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button>
            <button
              type="button"
              className="product-icon-btn"
              aria-label="Add to cart"
            >
              <ShoppingCart size={20} />
            </button>
            <button
              type="button"
              className="product-icon-btn"
              aria-label="Quick preview"
            >
              <Eye size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
