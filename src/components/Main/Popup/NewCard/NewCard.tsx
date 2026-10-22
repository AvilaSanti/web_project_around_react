import { useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [nameError, setNameError] = useState('');
  const [linkError, setLinkError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    handleAddPlaceSubmit( name, link ).finally(() => {
      setIsLoading(false);
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (value: string) => void,
    setError: (error: string) => void
  ) => {
    const input = event.target;
     setValue(input.value);
     setError(input.validity.valid ? '' : input.validationMessage);
  }

  return (
    <form onSubmit={handleSubmit} className="popup__form" id="new-card-form">
            <input
              value={name}
              onChange={(e) => handleChange(e, setName, setNameError)}
              className="popup__input popup__input_type_card-name"
              name="place-name"
              id="place-name"
              placeholder="Título"
              required
              type="text"
              minLength={2}
              maxLength={30}
            />
            <span className={`place-name-input-error popup__input-error ${nameError ? 'popup__input-error_active' : ''}`}>{nameError}</span>
            <input
              value={link}
              onChange={(e) => handleChange(e, setLink, setLinkError)}
              className="popup__input popup__input_type_url"
              name="link"
              id="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className={`link-input-error popup__input-error ${linkError ? 'popup__input-error_active' : ''}`}>{linkError}</span>
            <button className="button popup__button" type="submit" disabled={isLoading || !!nameError || !!linkError}>
              {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </form>
  );
}