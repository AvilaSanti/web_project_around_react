import avatar from '../../images/avatar.jpg';
import { useState } from 'react';
import React from 'react';
import Popup from './Popup/Popup';
import type { PopupConfig } from '../../types/types.ts';
import NewCard from './Popup/NewCard/NewCard.tsx';
import EditProfile from './Popup/EditProfile/EditProfile.tsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.tsx';

export default function Main(): React.JSX.Element  {
  const [popup, setPopup] = useState<PopupConfig | null>(null);
  const newCardPopup: PopupConfig = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editProfilePopup: PopupConfig = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };

  const editAvatarPopup: PopupConfig = {
    title: 'Editar avatar',
    children: <EditAvatar />,
  };

function handleOpenPopup(popup: PopupConfig): void {
    setPopup(popup);
  }

  function handleClosePopup(): void {
    setPopup(null);
}

  return (
    <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container"
              onClick={() => handleOpenPopup(editAvatarPopup)}>
            <img
              className="profile__image"
              src={avatar}
              alt="Avatar"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
              onClick={() =>  handleOpenPopup(editProfilePopup)}
            ></button>
            <p className="profile__description">Explorador</p>
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
              <li className="card">
                <img
                  className="card__image"
                  src="https://amazonaws.com"
                  alt="Valle de Yosemite"
                />
                <button
                  aria-label="Eliminar tarjeta"
                  className="card__delete-button"
                  type="button"
                ></button>
                <div className="card__description">
                  <h2 className="card__title">Valle de Yosemite</h2>
                  <button
                    aria-label="Botón Me gusta"
                    className="card__like-button"
                    type="button"
                  ></button>
                </div>
              </li>
          </ul>
        </section>
         {popup && (
        <Popup 
          onClose={handleClosePopup} 
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
      </main>
  );
};
