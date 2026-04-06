const FormModal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="order-modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="order-modal"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="order-modal-header">
          <h3>{title}</h3>
          <button type="button" className="order-modal-close" onClick={onClose}>
            Kapat
          </button>
        </div>

        <div className="order-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default FormModal;
