import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({ isOpen, onClose, onCardDeleteСonfirmation }) {
  function handleSubmit(e) {
    e.preventDefault();

    onCardDeleteСonfirmation();
  }

  return (
    <PopupWithForm
      name="popup_remove_card"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Да"
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default PopupWithConfirmation;
