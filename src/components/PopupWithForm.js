function PopupWithForm({ name, title, isOpen, onClose, buttonText, children }) {
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{`${title}`}</h3>
        <form
          action="#"
          method="post"
          name={`${name}`}
          className="popup__form"
          noValidate
        >
          {children}
          <button
            type="submit"
            className="popup__save popup__save_inactive"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
