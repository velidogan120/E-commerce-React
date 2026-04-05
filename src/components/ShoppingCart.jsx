import { Minus, Plus, Trash2 } from "lucide-react";
import "../styles/shopping-cart.css";

const CARGO_COMPANIES = ["Aras", "MNG", "Surat", "Yurtici", "PTT"];

const formatPrice = (price, count) =>
  `$${(price * count).toFixed(2) ?? "0.00"}`;

const ShoppingCart = ({
  cartItem,
  onToggleChecked,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  const product = cartItem?.product ?? {};
  const imageUrl = product.images?.[0]?.url ?? "/product/product-1.jpg";
  const productName = product.name ?? "Urun";
  const cargoCompany =
    CARGO_COMPANIES[(product.id ?? 0) % CARGO_COMPANIES.length];
  const sellerName = product.brand ?? product.category ?? "Magaza";
  const rating = product.rating.toFixed(1);

  return (
    <article className="shopping-cart-item">
      <div className="shopping-cart-item-seller">
        <h3>{sellerName}</h3>
        <span>{rating}</span>
      </div>

      <div className="shopping-cart-item-content">
        <input
          type="checkbox"
          checked={cartItem?.checked}
          onChange={onToggleChecked}
          className="shopping-cart-check"
        />

        <img src={imageUrl} alt={productName} className="shopping-cart-image" />

        <div className="shopping-cart-details">
          <p className="shopping-cart-name">{productName}</p>
          <p className="shopping-cart-shipping">
            <strong>{cargoCompany} Kargo:</strong> Kargo Ucretsiz
          </p>

          <div className="shopping-cart-actions">
            <button
              type="button"
              className="shopping-cart-action-btn"
              onClick={onDecrement}
            >
              <Minus size={14} />
            </button>
            <span className="shopping-cart-count">{cartItem?.count ?? 1}</span>
            <button
              type="button"
              className="shopping-cart-action-btn"
              onClick={onIncrement}
            >
              <Plus size={14} />
            </button>
            <button
              type="button"
              className="shopping-cart-delete-btn"
              onClick={onRemove}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <p className="shopping-cart-price">
          {formatPrice(product.price, cartItem?.count ?? 1)}
        </p>
      </div>
    </article>
  );
};

export default ShoppingCart;
