import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddPlaceSubmit( name, link );
  };

  return (
    <form onSubmit={handleSubmit} className="popup__form" id="new-card-form">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="popup__input popup__input_type_card-name"
              name="place-name"
              id="place-name"
              placeholder="Título"
              required
              type="text"
              minLength={2}
              maxLength={30}
            />
            <span className="place-name-input-error popup__input-error"></span>
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="popup__input popup__input_type_url"
              name="link"
              id="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="link-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit">
              Guardar
            </button>
          </form>
  );
}
    