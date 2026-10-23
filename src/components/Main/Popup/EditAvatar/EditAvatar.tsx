import { useRef, useState, useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const  avatarRef = useRef<HTMLInputElement>(null);
  const [avatarError, setAvatarError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
        setIsLoading(true);
        handleUpdateAvatar( avatarRef.current!.value ).finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setError: (error: string) => void
  ) => {
    const input = event.target;
     setError(input.validity.valid ? '' : input.validationMessage);
  }

  return ( 
<form onSubmit={handleSubmit} className="popup__form" id="avatar-form">
            <input
              ref={avatarRef}
              onChange={(e) => handleChange(e, setAvatarError)}
              className="popup__input popup__input_type_url"
              name="avatar-link"
              id="avatar-link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className={`avatar-link-input-error popup__input-error ${avatarError ? 'popup__input-error_active' : ''}`}>{avatarError}</span>
            <button className="button popup__button" type="submit" disabled={isLoading || !!avatarError}>
              {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </form>
);
}