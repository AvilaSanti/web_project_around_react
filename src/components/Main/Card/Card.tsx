import type { CardData, PopupConfig } from '../../../types/types.ts';
import ImagePopup from '../Popup/ImagePopup/ImagePopup.tsx';

type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
  handleCardLike: (card: CardData) => void;
  handleCardDelete: (card: CardData) => void; 
};

export default function Card(props: CardProps): React.JSX.Element {
    const { name, link, isLiked } = props.card;
    const { handleOpenPopup, handleCardLike, handleCardDelete } = props;
    const imageComponent: PopupConfig = {
      title: '',
      children: <ImagePopup card={props.card} />,     
    };
    const cardLikeButtonClassName = `card__like-button ${isLiked ? "card__like-button_is-active" : ""}`;

  return ( 
    <li className="card">
                <img
                  className="card__image"
                  src={link}
                  alt={name}
                  onClick={() => handleOpenPopup(imageComponent)}
                />
                <button
                  aria-label="Eliminar tarjeta"
                  className="card__delete-button"
                  type="button"
                  onClick={() => handleOpenPopup({title: "¿Estás seguro/a?", id: "delete-card-popup", 
                  children: <button  className="popup__button " onClick={() => handleCardDelete(props.card)}>Sí</button>})}>
                </button>
                <div className="card__description">
                  <h2 className="card__title">{name}</h2>
                  <button
                    aria-label="Botón Me gusta"
                    className={cardLikeButtonClassName}
                    type="button"
                    onClick={() => handleCardLike(props.card)}
                  ></button>
                </div>
              </li>
 
  );
}