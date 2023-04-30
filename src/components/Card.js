function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element__item item">
      <button className="element__remove-button" type="reset"></button>
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__info">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like">
          <button className="element__like-button"></button>
          <span className="element__like-counters">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
