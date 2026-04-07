import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../styles/shopping-cart-total-summary.css";

const formatPrice = (price) => `$${price.toFixed(2) ?? "0.00"}`;

const ShoppingCartTotalSummary = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.shoppingCart.cart);

  const selectedItems = cartItems.filter((item) => item.checked);
  const selectedItemCount = selectedItems.length;
  const subtotal = selectedItems.reduce(
    (sum, item) => sum + (item.product.price ?? 0) * item.count,
    0,
  );

  const shippingCost = subtotal > 0 ? 0 : 0;
  const discount = 0;
  const grandTotal = subtotal + shippingCost - discount;

  return (
    <aside className="shopping-cart-total-summary">
      <div className="shopping-cart-total-header">
        <h3>Siparis Ozeti</h3>
      </div>

      <div className="shopping-cart-total-content">
        <div className="shopping-cart-total-row">
          <span className="shopping-cart-total-label">Secili Urunler</span>
          <span className="shopping-cart-total-value">{selectedItemCount}</span>
        </div>

        <div className="shopping-cart-total-row">
          <span className="shopping-cart-total-label">
            Urunler Toplam Fiyati
          </span>
          <span className="shopping-cart-total-value">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="shopping-cart-total-row">
          <span className="shopping-cart-total-label">Kargo Ucreti</span>
          <span className="shopping-cart-total-value">
            {shippingCost === 0 ? "Ucretsiz" : formatPrice(shippingCost)}
          </span>
        </div>

        <div className="shopping-cart-total-row">
          <span className="shopping-cart-total-label">Indirim</span>
          <span className="shopping-cart-total-value shopping-cart-total-discount">
            -{formatPrice(discount)}
          </span>
        </div>

        <div className="shopping-cart-total-divider" />

        <div className="shopping-cart-total-row shopping-cart-total-row-final">
          <span className="shopping-cart-total-label-final">Toplam</span>
          <span className="shopping-cart-total-value-final">
            {formatPrice(grandTotal)}
          </span>
        </div>
      </div>

      <button
        className="shopping-cart-total-checkout-btn"
        disabled={selectedItemCount === 0}
        onClick={() => navigate("/order")}
      >
        Siparisi Tamamla
      </button>

      <div className="shopping-cart-total-info">
        <p>Secili urunler icin kargo ucretsizdir</p>
      </div>
    </aside>
  );
};

export default ShoppingCartTotalSummary;
