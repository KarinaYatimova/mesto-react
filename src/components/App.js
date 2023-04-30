import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="popup_edit_profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          className="popup__input popup__input_profilename"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error name-input-error"></span>
        <input
          type="text"
          name="job"
          id="job-input"
          placeholder="О себе"
          className="popup__input popup__input_profilejob"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup_edit_avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="url"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_cardlink"
          required
        />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup_add_card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          type="text"
          name="placename"
          id="placename-input"
          placeholder="Название"
          className="popup__input popup__input_cardname"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error placename-input-error"></span>
        <input
          type="url"
          name="link"
          id="card-link-input"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_cardlink"
          required
        />
        <span className="popup__input-error card-link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup_remove_card"
        title="Вы уверены?"
        onClose={closeAllPopups}
        buttonText="Да"
      ></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      ></ImagePopup>
    </div>
  );
}

export default App;
