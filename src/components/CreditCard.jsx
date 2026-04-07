import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddCreditCards,
  useCreditCards,
  useDeleteCreditCards,
  useUpdateCreditCards,
} from "../hooks/useShoppingCart";
import "../styles/credit-card.css";
import FormModal from "./shared/FormModal";
import { SquarePen, Trash } from "lucide-react";

const CreditCard = ({
  deliveryAddress,
  billingAddress,
  selectedCreditCardId,
  setSelectedCreditCardId,
  totalPrice,
}) => {
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [editingCreditCardId, setEditingCreditCardId] = useState(null);
  const { data: cards = [], isPending, isError } = useCreditCards();
  const { mutate: addedCardMutate } = useAddCreditCards();
  const { mutate: deletedCreditCardsMutate } = useDeleteCreditCards();
  const { mutate: updatedCreditCardsMutate } = useUpdateCreditCards();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expireMonth: "",
      expireYear: "",
    },
  });

  const normalizedSelectedCardId =
    cards.some((card) => card.id === selectedCreditCardId) &&
    selectedCreditCardId !== null
      ? selectedCreditCardId
      : cards[0]?.id
        ? cards[0].id
        : null;

  const openCardModal = () => {
    setEditingCreditCardId(null);
    reset();
    setIsCardModalOpen(true);
  };

  const closeCardModal = () => {
    setIsCardModalOpen(false);
    setEditingCreditCardId(null);
    reset();
  };

  const openEditCreditCardModal = (card) => {
    setEditingCreditCardId(card.id);
    reset({
      cardName: card.name_on_card,
      cardNumber: card.card_no,
      expireMonth: card.expire_month,
      expireYear: card.expire_year,
    });
    setIsCardModalOpen(true);
  };

  const handleCardSubmit = (formData) => {
    const cleanCardNumber = formData.cardNumber.replace(/\s+/g, "").trim();

    const payload = {
      name_on_card: formData.cardName.trim(),
      card_no: cleanCardNumber,
      expire_month: formData.expireMonth.trim(),
      expire_year: formData.expireYear.trim(),
    };

    if (editingCreditCardId) {
      updatedCreditCardsMutate({ ...payload, id: editingCreditCardId });
    } else {
      addedCardMutate(payload);
    }

    closeCardModal();
  };

  const maskCardNumber = (cardNumber = "") => {
    if (cardNumber.length < 8) {
      return cardNumber;
    }

    const first = cardNumber.slice(0, 4);
    const last = cardNumber.slice(-4);
    return `${first} **** **** ${last}`;
  };

  const renderCreditCards = () => {
    if (isPending) {
      return (
        <p className="order-address-feedback">Kredi kartlari yukleniyor...</p>
      );
    }

    if (isError) {
      return (
        <p className="order-address-feedback order-address-feedback-error">
          Kredi kartlari alinamadi. Lutfen tekrar deneyin.
        </p>
      );
    }

    if (!cards.length) {
      return (
        <p className="order-address-feedback">
          Kayitli kredi kartı yok. Yeni kredi kartı ekleyin.
        </p>
      );
    }

    return (
      <div className="order-card-list">
        {cards.map((card) => {
          const normalizedId = card.id;
          const isSelected = normalizedSelectedCardId === normalizedId;
          return (
            <div
              key={normalizedId}
              role="button"
              tabIndex={0}
              className={`order-saved-card ${
                isSelected ? "order-saved-card-selected" : ""
              }`}
              onClick={() => setSelectedCreditCardId(normalizedId)}
            >
              <div className="order-saved-card-title-row">
                {isSelected && (
                  <span className="order-address-pill">Secili</span>
                )}
                <span className="flex gap-3 ms-auto">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openEditCreditCardModal(card);
                    }}
                  >
                    <SquarePen />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      deletedCreditCardsMutate(card.id);
                    }}
                  >
                    <Trash />
                  </button>
                </span>
              </div>
              <p>{card.name_on_card}</p>
              <p>{maskCardNumber(card.card_no)}</p>
              <p>
                {card.expire_month}/{card.expire_year}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="order-payment">
      <div className="order-payment-selected-addresses">
        <div className="order-payment-selected-box">
          <h4>Teslimat</h4>
          <p>{deliveryAddress?.label}</p>
          <p>{deliveryAddress?.fullAddress}</p>
        </div>
        <div className="order-payment-selected-box">
          <h4>Fatura</h4>
          <p>{billingAddress?.label}</p>
          <p>{billingAddress?.fullAddress}</p>
        </div>
      </div>

      <div className="order-card-shell">
        <div className="order-card-left">
          <div className="order-card-left-header">
            <h3>Kart Bilgileri</h3>
            <button
              type="button"
              className="order-add-button"
              onClick={openCardModal}
            >
              + Yeni Kart Ekle
            </button>
          </div>

          {renderCreditCards()}
        </div>

        <div className="order-card-right">
          <h3>Taksit Secenekleri</h3>
          <p>Kartiniza uygun taksit secenegini seciniz</p>

          <div className="order-installment-table">
            <div className="order-installment-head">Taksit Sayisi</div>
            <div className="order-installment-head">Aylik Odeme</div>
            <div className="order-installment-cell">Tek Cekim</div>
            <div className="order-installment-cell">{totalPrice} TL</div>
          </div>
        </div>
      </div>

      <FormModal
        isOpen={isCardModalOpen}
        title={
          editingCreditCardId ? "Kredi Karti Duzenle" : "Yeni Kredi Karti Ekle"
        }
        onClose={closeCardModal}
      >
        <form
          className="order-modal-form form-group"
          onSubmit={handleSubmit(handleCardSubmit)}
        >
          <label htmlFor="cardName">Kart Uzerindeki Isim</label>
          <input
            id="cardName"
            placeholder="Ad Soyad"
            {...register("cardName", {
              required: "Kart uzerindeki isim zorunludur.",
              validate: (value) =>
                value.trim().length >= 5 ||
                "Kart uzerindeki isim en az 5 karakter olmalidir.",
            })}
          />
          {errors.cardName && (
            <p className="form-error">{errors.cardName.message}</p>
          )}

          <label htmlFor="cardNumber">Kart Numarasi</label>
          <input
            id="cardNumber"
            maxLength={19}
            placeholder="0000 0000 0000 0000"
            {...register("cardNumber", {
              required: "Kart numarasi zorunludur.",
              validate: (value) => {
                const normalizedValue = value.replace(/\s+/g, "").trim();

                if (!/^\d+$/.test(normalizedValue)) {
                  return "Kart numarasi sadece rakam icermelidir.";
                }

                if (normalizedValue.length !== 16) {
                  return "Kart numarasi 16 haneli olmalidir.";
                }

                return true;
              },
            })}
          />
          {errors.cardNumber && (
            <p className="form-error">{errors.cardNumber.message}</p>
          )}

          <div className="order-modal-form-grid">
            <div>
              <label htmlFor="expireMonth">Ay</label>
              <input
                id="expireMonth"
                maxLength={2}
                placeholder="08"
                {...register("expireMonth", {
                  required: "Ay bilgisi zorunludur.",
                  validate: (value) => {
                    const month = Number(value.trim());

                    if (!Number.isInteger(month) || String(month).length > 2) {
                      return "Ay 1 ile 12 arasinda olmalidir.";
                    }

                    return month >= 1 && month <= 12
                      ? true
                      : "Ay 1 ile 12 arasinda olmalidir.";
                  },
                })}
              />
              {errors.expireMonth && (
                <p className="form-error">{errors.expireMonth.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="expireYear">Yil</label>
              <input
                id="expireYear"
                maxLength={4}
                placeholder="2030"
                {...register("expireYear", {
                  required: "Yil bilgisi zorunludur.",
                  validate: (value) => {
                    const normalizedValue = value.trim();
                    const year = Number(normalizedValue);
                    const currentYear = new Date().getFullYear();

                    if (!/^\d{4}$/.test(normalizedValue)) {
                      return "Yil 4 haneli olmalidir.";
                    }

                    if (year < currentYear) {
                      return "Kartinizin suresi dolmus gorunuyor.";
                    }

                    if (year > currentYear + 20) {
                      return "Gecerli bir yil girin.";
                    }

                    return true;
                  },
                })}
              />
              {errors.expireYear && (
                <p className="form-error">{errors.expireYear.message}</p>
              )}
            </div>
          </div>

          <button type="submit" className="order-modal-submit">
            {editingCreditCardId ? "Karti Guncelle" : "Karti Kaydet"}
          </button>
        </form>
      </FormModal>
    </div>
  );
};

export default CreditCard;
