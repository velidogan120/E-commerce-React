import "../styles/previous-orders.css";
import { useOrders } from "../hooks/useShoppingCart";

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
});

const formatDate = (dateValue) => {
  if (!dateValue) {
    return "Tarih yok";
  }

  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) {
    return "Gecersiz tarih";
  }

  return parsedDate.toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const maskCardNumber = (cardNumber) => {
  const numberAsText = String(cardNumber ?? "").replace(/\s+/g, "");
  if (numberAsText.length < 4) {
    return "****";
  }

  return `**** **** **** ${numberAsText.slice(-4)}`;
};

const PreviousOrders = () => {
  const { data, isLoading, isError, error } = useOrders();
  const orders = Array.isArray(data) ? data : [];

  if (isLoading) {
    return (
      <section className="previous-orders-page">
        <div className="previous-orders-shell">
          <h1>Onceki Siparislerim</h1>
          <p className="previous-orders-feedback">Siparisler yukleniyor...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="previous-orders-page">
        <div className="previous-orders-shell">
          <h1>Onceki Siparislerim</h1>
          <p className="previous-orders-feedback previous-orders-feedback-error">
            Siparisler alinamadi:
            {error?.message ?? "Bilinmeyen bir hata olustu."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="previous-orders-page">
      <div className="previous-orders-shell">
        <div className="previous-orders-header">
          <h1>Onceki Siparislerim</h1>
          <p>
            Verdigim tum siparisleri tarih sirasiyla buradan takip edebilirim.
          </p>
        </div>

        {orders.length === 0 ? (
          <p className="previous-orders-feedback">
            Henuz tamamlanmis bir siparis bulunmuyor.
          </p>
        ) : (
          <div className="previous-orders-list">
            {orders.map((order) => {
              const products = Array.isArray(order.products)
                ? order.products
                : [];
              const orderTotal = Number(order.price ?? 0);

              return (
                <details className="previous-order-card" key={order.id}>
                  <summary className="previous-order-summary">
                    <div>
                      <p className="previous-order-meta">
                        Siparis No: #{order.id}
                      </p>
                      <h2>{formatDate(order.order_date)}</h2>
                      <p className="previous-order-meta">
                        {products.length} urun · Kart{" "}
                        {maskCardNumber(order.card_no)}
                      </p>
                    </div>

                    <div className="previous-order-summary-right">
                      <strong>{currencyFormatter.format(orderTotal)}</strong>
                      <span>Detaylari gor</span>
                    </div>
                  </summary>

                  <div className="previous-order-content">
                    <div className="previous-order-products">
                      {products.map((product, index) => {
                        const productImage = product?.images[0]?.url;
                        const productCount = product?.count;
                        const productPrice = Number(product?.price ?? 0);
                        const itemTotal = productCount * productPrice;

                        return (
                          <article
                            className="previous-order-product"
                            key={`${order.id}-${product.id ?? index}`}
                          >
                            <img
                              src={
                                productImage ||
                                "https://placehold.co/120x140?text=No+Image"
                              }
                              alt={product?.name ?? "Ürün"}
                            />
                            <div>
                              <h3>{product?.name ?? "Adsız urun"}</h3>
                              <p>
                                {product?.description ?? "Açıklama bulunmuyor."}
                              </p>
                              <div className="previous-order-product-meta">
                                <span>Adet: {productCount}</span>
                                <span>
                                  Birim:
                                  {currencyFormatter.format(productPrice)}
                                </span>
                                <strong>
                                  Ara Toplam:
                                  {currencyFormatter.format(itemTotal)}
                                </strong>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousOrders;
