import React from 'react';
import Popup from './Popup/Popup';
import type { PopupConfig, CardData } from '../../types/types.ts';
import NewCard from './Popup/NewCard/NewCard.tsx';
import EditProfile from './Popup/EditProfile/EditProfile.tsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.tsx';
import Card from './Card/Card.tsx';
import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.tsx';

type MainProps = {
   popup: PopupConfig | null;
   handleOpenPopup: (popup: PopupConfig) => void;
   handleClosePopup: () => void;
   cards: CardData[];
   handleCardLike: (card: CardData) => void;
   handleCardDelete: (card: CardData) => void;
};

export default function Main(props: MainProps): React.JSX.Element  {
  const { popup, handleOpenPopup, handleClosePopup, cards, handleCardLike, handleCardDelete } = props;
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup: PopupConfig = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editProfilePopup: PopupConfig = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };

  const editAvatarPopup: PopupConfig = {
    id: 'avatar-popup',
    title: 'Editar avatar',
    children: <EditAvatar />,
  };

  return (
    <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container"
              onClick={() => handleOpenPopup(editAvatarPopup)}>
            <img
              className="profile__image"
              src={currentUser?.avatar} 
              alt={currentUser?.name}
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser?.name}</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() =>  handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">{currentUser?.about}</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
            onClick={() => handleOpenPopup(newCardPopup)}
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
               {cards.map((card) => (
                 <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} handleCardLike={handleCardLike} handleCardDelete={handleCardDelete} />
                 ))}
          </ul>
        </section>
         {popup && (
        <Popup 
          onClose={handleClosePopup} 
          id={popup.id}
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
      </main>
  );
};
