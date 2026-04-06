import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddAddresses,
  useAddresses,
  useDeleteAddresses,
  useUpdateAddresses,
} from "../hooks/useShoppingCart";
import "../styles/address.css";
import FormModal from "./shared/FormModal";
import { SquarePen, Trash } from "lucide-react";

const Address = ({
  selectedDeliveryId,
  selectedBillingId,
  onSelectDelivery,
  onSelectBilling,
}) => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const { mutate: deletedAddressMutate } = useDeleteAddresses();
  const { mutate: addedAddressMutate } = useAddAddresses();
  const { mutate: updatedAddressMutate } = useUpdateAddresses();
  const { data: addresses, isPending, isError } = useAddresses();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    },
  });

  const openAddressModal = () => {
    setEditingAddressId(null);
    reset();
    setIsAddressModalOpen(true);
  };

  const openEditAddressModal = (address) => {
    setEditingAddressId(address.id);
    reset({
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
      address: address.address || "",
    });
    setIsAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
    setEditingAddressId(null);
    reset();
  };

  const handleAddressSubmit = (formData) => {
    const payload = {
      title: formData.title.trim(),
      name: formData.name.trim(),
      surname: formData.surname.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
      district: formData.district.trim(),
      neighborhood: formData.neighborhood.trim(),
      address: formData.address.trim(),
    };

    if (editingAddressId) {
      updatedAddressMutate({ ...payload, id: editingAddressId });
    } else {
      addedAddressMutate(payload);
    }

    closeAddressModal();
  };

  const renderCards = (type) => {
    if (isPending) {
      return <p className="order-address-feedback">Adresler yukleniyor...</p>;
    }

    if (isError) {
      return (
        <p className="order-address-feedback order-address-feedback-error">
          Adresler alinamadi. Lutfen tekrar deneyin.
        </p>
      );
    }

    if (!addresses.length) {
      return (
        <p className="order-address-feedback">
          Kayitli adres bulunamadi. Yeni adres ekleyin.
        </p>
      );
    }

    return (
      <div className="order-address-grid">
        {addresses.map((address) => {
          const isSelected =
            type === "delivery"
              ? selectedDeliveryId === address.id
              : selectedBillingId === address.id;

          return (
            <div
              key={`${type}-${address.id}`}
              type="button"
              className={`order-address-card ${
                isSelected ? "order-address-card-selected" : ""
              }`}
              onClick={() =>
                type === "delivery"
                  ? onSelectDelivery(address.id)
                  : onSelectBilling(address.id)
              }
            >
              <div className="order-address-card-head">
                {isSelected && (
                  <span className="order-address-pill">Seçili</span>
                )}
                <span className="flex gap-3 ms-auto">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      openEditAddressModal(address);
                    }}
                  >
                    <SquarePen />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      deletedAddressMutate(address.id);
                    }}
                  >
                    <Trash />
                  </button>
                </span>
              </div>
              <p className="order-address-name">
                {`${address.name} ${address.surname}`}
              </p>
              <p>{address.phone}</p>
              <p>
                {`${address.city} ${address.district} ${address.neighborhood}`}
              </p>
              <p>{`${address.address}`}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="order-address">
      <div className="order-add-action-row">
        <button
          type="button"
          className="order-add-button"
          onClick={openAddressModal}
        >
          + Yeni Adres Ekle
        </button>
      </div>

      <div className="order-address-section">
        <div className="order-address-section-header">
          <h3>Teslimat Adresi</h3>
          <p>Siparisinizin gonderilecegi adresi secin.</p>
        </div>
        {renderCards("delivery")}
      </div>

      <div className="order-address-section">
        <div className="order-address-section-header">
          <h3>Fatura Adresi</h3>
          <p>Faturanizin duzenlenecegi adresi secin.</p>
        </div>
        {renderCards("billing")}
      </div>

      <FormModal
        isOpen={isAddressModalOpen}
        title={editingAddressId ? "Adresi Duzenle" : "Yeni Adres Ekle"}
        onClose={closeAddressModal}
      >
        <form
          className="order-modal-form form-group"
          onSubmit={handleSubmit(handleAddressSubmit)}
        >
          <label htmlFor="addressTitle">Adres Başlığı</label>
          <input
            id="addressTitle"
            placeholder="Ev / Ofis"
            {...register("title", {
              required: "Adres basligi zorunludur.",
              validate: (value) =>
                value.trim().length >= 2 ||
                "Adres basligi en az 2 karakter olmalidir.",
            })}
          />
          {errors.title && <p className="form-error">{errors.title.message}</p>}

          <div className="order-modal-form-grid">
            <div>
              <label htmlFor="addressName">Ad</label>
              <input
                id="addressName"
                placeholder="Ad"
                {...register("name", {
                  required: "Ad zorunludur.",
                  validate: (value) =>
                    value.trim().length >= 2 ||
                    "Ad en az 2 karakter olmalidir.",
                })}
              />
              {errors.name && (
                <p className="form-error">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="addressSurname">Soyad</label>
              <input
                id="addressSurname"
                placeholder="Soyad"
                {...register("surname", {
                  required: "Soyad zorunludur.",
                  validate: (value) =>
                    value.trim().length >= 2 ||
                    "Soyad en az 2 karakter olmalidir.",
                })}
              />
              {errors.surname && (
                <p className="form-error">{errors.surname.message}</p>
              )}
            </div>
          </div>

          <label htmlFor="addressPhone">Telefon</label>
          <input
            id="addressPhone"
            placeholder="05xx xxx xx xx"
            {...register("phone", {
              required: "Telefon zorunludur.",
              pattern: {
                value: /^05\d{2}\d{3}\d{2}\d{2}$/,
                message: "Gecerli bir telefon girin. Ornek: 05xx xxx xx xx",
              },
            })}
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}

          <div className="order-modal-form-grid">
            <div>
              <label htmlFor="addressCity">Sehir</label>
              <input
                id="addressCity"
                placeholder="Sehir"
                {...register("city", {
                  required: "Sehir zorunludur.",
                  validate: (value) =>
                    value.trim().length >= 2 ||
                    "Sehir en az 2 karakter olmalidir.",
                })}
              />
              {errors.city && (
                <p className="form-error">{errors.city.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="addressDistrict">Ilce</label>
              <input
                id="addressDistrict"
                placeholder="Ilce"
                {...register("district", {
                  required: "Ilce zorunludur.",
                  validate: (value) =>
                    value.trim().length >= 2 ||
                    "Ilce en az 2 karakter olmalidir.",
                })}
              />
              {errors.district && (
                <p className="form-error">{errors.district.message}</p>
              )}
            </div>
          </div>

          <label htmlFor="addressNeighborhood">Mahalle</label>
          <input
            id="addressNeighborhood"
            placeholder="Mahalle"
            {...register("neighborhood", {
              required: "Mahalle zorunludur.",
              validate: (value) =>
                value.trim().length >= 2 ||
                "Mahalle en az 2 karakter olmalidir.",
            })}
          />
          {errors.neighborhood && (
            <p className="form-error">{errors.neighborhood.message}</p>
          )}

          <label htmlFor="addressDetail">Acik Adres</label>
          <textarea
            id="addressDetail"
            placeholder="Acik adres"
            rows={3}
            {...register("address", {
              required: "Acik adres zorunludur.",
              validate: (value) =>
                value.trim().length >= 10 ||
                "Acik adres en az 10 karakter olmalidir.",
            })}
          />
          {errors.address && (
            <p className="form-error">{errors.address.message}</p>
          )}

          <button type="submit" className="order-modal-submit">
            {editingAddressId ? "Adresi Guncelle" : "Adresi Kaydet"}
          </button>
        </form>
      </FormModal>
    </div>
  );
};

export default Address;
