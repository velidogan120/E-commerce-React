import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useAddresses, useCreditCards } from "../hooks/useShoppingCart";
import { setAddress, setPayment } from "../lib/store/slices/shoppingCartSlice";
import "../styles/order.css";
import Address from "./Address";
import CreditCard from "./CreditCard";

const Order = () => {
  const { data: addresses = [] } = useAddresses();
  const { data: payment = [] } = useCreditCards();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("address");
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);
  const [selectedBillingId, setSelectedBillingId] = useState(null);

  const canOpenPaymentTab = Boolean(
    selectedDeliveryId && selectedBillingId && addresses.length > 0,
  );

  const selectedDeliveryAddress = useMemo(
    () => addresses.find((address) => address.id === selectedDeliveryId),
    [addresses, selectedDeliveryId],
  );

  const selectedBillingAddress = useMemo(
    () => addresses.find((address) => address.id === selectedBillingId),
    [addresses, selectedBillingId],
  );

  const handleTabChange = (tabKey) => {
    if (!canOpenPaymentTab) {
      return;
    }

    setActiveTab(tabKey);
  };

  const handleContinue = () => {
    if (activeTab === "address" && canOpenPaymentTab) {
      setActiveTab("payment");
      return;
    }
  };

  useEffect(() => {
    dispatch(setAddress(addresses));
    dispatch(setPayment(payment));
  }, [addresses, dispatch, payment]);

  return (
    <section className="order-page">
      <div className="order-main">
        <div className="order-tabs">
          <button
            type="button"
            className={`order-tab ${activeTab === "address" ? "order-tab-active" : ""}`}
            onClick={() => handleTabChange("address")}
          >
            <span className="order-tab-index">1</span>
            <div>
              <h2>Adres Bilgileri</h2>
              <p>Teslimat ve fatura adresinizi secin.</p>
            </div>
          </button>

          <button
            type="button"
            className={`order-tab ${activeTab === "payment" ? "order-tab-active" : ""} ${
              !canOpenPaymentTab ? "order-tab-disabled" : ""
            }`}
            onClick={() => handleTabChange("payment")}
          >
            <span className="order-tab-index">2</span>
            <div>
              <h2>Odeme Secenekleri</h2>
              <p>
                {!canOpenPaymentTab
                  ? "Once teslimat ve fatura adresi secin."
                  : "Banka/Kredi karti ile odemenizi yapabilirsiniz."}
              </p>
            </div>
          </button>
        </div>

        <div className="order-content-card">
          {activeTab === "address" ? (
            <Address
              addresses={addresses}
              selectedDeliveryId={selectedDeliveryId}
              selectedBillingId={selectedBillingId}
              onSelectDelivery={setSelectedDeliveryId}
              onSelectBilling={setSelectedBillingId}
            />
          ) : (
            <CreditCard
              deliveryAddress={selectedDeliveryAddress}
              billingAddress={selectedBillingAddress}
            />
          )}
        </div>
      </div>

      <aside className="order-sidebar">
        <div className="order-summary-card">
          <h3>Siparis Ozeti</h3>
          <p>Urun Toplami: 8.448,99 TL</p>
          <p>Kargo: 29,99 TL</p>
          <p className="order-summary-total">Toplam: 8.448,99 TL</p>
        </div>

        <button
          type="button"
          className="order-continue-button"
          onClick={handleContinue}
        >
          Kaydet ve Devam Et
        </button>
      </aside>
    </section>
  );
};

export default Order;
