import { useState, useRef, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (avatarRef.current) {
      handleUpdateAvatar( avatarRef.current.value ).finally(() => {
        setIsLoading(false);
      });
    }
  };
  return ( 
<form onSubmit={handleSubmit} className="popup__form" id="avatar-form">
            <input
              className="popup__input popup__input_type_url"
              name="avatar-link"
              id="avatar-link"
              placeholder="Enlace a la imagen"
              required
              type="url"
              ref={avatarRef}
            />
            <span className="avatar-link-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit" disabled={isLoading}>
              {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </form>
);
}