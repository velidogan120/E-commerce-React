import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  useAddresses,
  useCompleteOrder,
  useCreditCards,
} from "../hooks/useShoppingCart";
import {
  clearCheckedCartItems,
  setAddress,
  setPayment,
} from "../lib/store/slices/shoppingCartSlice";
import "../styles/order.css";
import Address from "./Address";
import CreditCard from "./CreditCard";
import FormModal from "./shared/FormModal";
import ShoppingCartTotalSummary from "./ShoppingCartTotalSummary";
import Loading from "./shared/Loading";

const Order = () => {
  const { data: addressesData } = useAddresses();
  const { data: paymentData } = useCreditCards();
  const { mutate: completeOrderMutate } = useCompleteOrder();
  const { cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("address");
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);
  const [selectedBillingId, setSelectedBillingId] = useState(null);
  const [selectedCreditCardId, setSelectedCreditCardId] = useState(null);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);

  const addresses = useMemo(() => addressesData ?? [], [addressesData]);
  const payment = useMemo(() => paymentData ?? [], [paymentData]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      approvalCode: "",
    },
  });

  const selectedProducts = useMemo(
    () => cart.filter((item) => item.checked),
    [cart],
  );

  useEffect(() => {
    if (selectedProducts.length === 0) {
      toast.warning("Lutfen siparis vermek istediginiz urunleri secin.");
      navigate("/shop/all/tum-kategoriler/0");
    }
  }, [selectedProducts, navigate]);

  const hasAddressSelection =
    selectedDeliveryId !== null && selectedBillingId !== null;
  const effectiveSelectedCreditCardId =
    selectedCreditCardId ?? payment[0]?.id ?? null;
  const hasCreditCardSelection = effectiveSelectedCreditCardId !== null;

  const canOpenPaymentTab = Boolean(
    hasAddressSelection && addresses.length > 0,
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
    if (tabKey === "payment" && !canOpenPaymentTab) {
      toast.warning("Önce teslimat ve fatura adresi secmelisiniz.");
      return;
    }

    setActiveTab(tabKey);
  };

  const handleComplete = () => {
    if (activeTab === "address") {
      if (!hasAddressSelection) {
        toast.warning("Teslimat ve fatura adresini secin.");
        return;
      }

      setActiveTab("payment");
      return;
    }

    if (activeTab === "payment") {
      if (!hasCreditCardSelection) {
        toast.warning("Lutfen bir kredi karti secin.");
        return;
      }

      reset({ approvalCode: "" });
      setIsApproveModalOpen(true);
    }
  };

  const closeApproveModal = () => {
    setIsApproveModalOpen(false);
    reset({ approvalCode: "" });
  };

  const handleApprovalSubmit = ({ approvalCode }) => {
    if (approvalCode.trim() !== "1234") {
      toast.warning("Sifre yanlis.");
      return;
    }
    completeOrderMutate({
      address_id: selectedBillingId,
      order_date: new Date().toISOString(),
      ...payment.find((card) => card.id === effectiveSelectedCreditCardId),
      card_ccv: 321,
      price: selectedProducts.reduce(
        (sum, item) => sum + (item.product.price ?? 0) * item.count,
        0,
      ),
      products: [
        ...selectedProducts.map((item) => ({
          product_id: item.product.id,
          count: item.product.count,
          description: item.product.description,
        })),
      ],
    });
    dispatch(clearCheckedCartItems());
    closeApproveModal();
    toast.success("Siparisiniz onaylandi.");
    navigate("/");
  };

  useEffect(() => {
    if (addressesData) {
      dispatch(setAddress(addressesData));
    }

    if (paymentData) {
      dispatch(setPayment(paymentData));
    }
  }, [addressesData, dispatch, paymentData]);
  if (selectedProducts.length === 0) {
    return <Loading />;
  }
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
              selectedCreditCardId={effectiveSelectedCreditCardId}
              setSelectedCreditCardId={setSelectedCreditCardId}
            />
          )}
        </div>
      </div>

      <FormModal
        isOpen={isApproveModalOpen}
        title="Siparis Onayi"
        onClose={closeApproveModal}
      >
        <form
          className="order-modal-form form-group"
          onSubmit={handleSubmit(handleApprovalSubmit)}
        >
          <label htmlFor="approvalCode">Onay sifresi</label>
          <input
            id="approvalCode"
            placeholder="Sifreyi girin"
            {...register("approvalCode", {
              required: "Sifre zorunludur.",
            })}
          />

          {errors.approvalCode ? (
            <p className="form-error">{errors.approvalCode.message}</p>
          ) : null}

          <button type="submit" className="order-modal-submit">
            Onayla
          </button>
        </form>
      </FormModal>

      <aside className="order-sidebar">
        <div>
          <ShoppingCartTotalSummary />
        </div>

        <button
          type="button"
          className="order-continue-button"
          onClick={handleComplete}
        >
          Kaydet ve Devam Et
        </button>
      </aside>
    </section>
  );
};

export default Order;
