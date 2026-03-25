import { ChevronRight } from "lucide-react";
import "../styles/product-description.css";

const ProductDescription = () => {
  const featureItems = [
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
  ];

  const extraItems = [
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
    "the quick fox jumps over the lazy dog",
  ];

  return (
    <div className="product-description">
      <div className="product-description-container">
        <div className="product-description-tabs">
          <button type="button" className="product-description-tab is-active">
            Description
          </button>
          <button type="button" className="product-description-tab">
            Additional Information
          </button>
          <button type="button" className="product-description-tab">
            Reviews <span>(0)</span>
          </button>
        </div>

        <div className="product-description-content">
          <div className="product-description-image-wrap">
            <img
              src="/product-description/product-description-1.jpg"
              alt="Product styled interior"
              className="product-description-image"
            />
          </div>

          <div className="product-description-copy">
            <h3>the quick fox jumps over</h3>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          <div className="product-description-lists">
            <div className="product-description-list-group">
              <h3>the quick fox jumps over</h3>
              <ul>
                {featureItems.map((item, index) => (
                  <li key={`feature-${index}`}>
                    <ChevronRight size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-description-list-group">
              <h3>the quick fox jumps over</h3>
              <ul>
                {extraItems.map((item, index) => (
                  <li key={`extra-${index}`}>
                    <ChevronRight size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
