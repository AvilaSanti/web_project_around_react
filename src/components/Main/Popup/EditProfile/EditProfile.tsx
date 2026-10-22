import { useState, useContext } from 'react'; 
import CurrentUserContext from '../../../../contexts/CurrentUserContext'; 

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || ''); 
  const [description, setDescription] = useState(currentUser?.about || '');
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    handleUpdateUser({ name, about: description }).finally(() => {
      setIsLoading(false);
    }
    );
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
<form className="popup__form" id="edit-profile-form" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => handleChange(e, setName, setNameError)}
              className="popup__input popup__input_type_name"
              name="name"
              id="name"
              placeholder="Nombre"
              type="text"
              required
              minLength={2}
              maxLength={40}
            />
            <span className={`name-input-error popup__input-error ${nameError ? 'popup__input-error_active' : ''}`}>{nameError}</span>
            <input
              value={description }
              onChange={(e) => handleChange(e, setDescription, setDescriptionError)}
              className="popup__input popup__input_type_description"
              name="description"
              id="description"
              placeholder="Acerca de mí"
              type="text"
              required
              minLength={2}
              maxLength={200}
            />
            <span className={`description-input-error popup__input-error ${descriptionError ? 'popup__input-error_active' : ''}`}>{descriptionError}</span>
            <button className="button popup__button" type="submit" disabled={isLoading || !!nameError || !!descriptionError}>
              {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </form>
  );
}