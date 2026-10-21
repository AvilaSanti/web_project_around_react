import { useState, useContext } from 'react'; 
import CurrentUserContext from '../../../../contexts/CurrentUserContext'; 

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name || ''); 
  const [description, setDescription] = useState(currentUser?.about || ''); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateUser({ name, about: description });
  };
  
  return ( 
<form className="popup__form" id="edit-profile-form" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="popup__input popup__input_type_name"
              name="name"
              id="name"
              placeholder="Nombre"
              type="text"
              required
              minLength={2}
              maxLength={40}
            />
            <span className="name-input-error popup__input-error"></span>
            <input
              value={description }
              onChange={(e) => setDescription(e.target.value)}
              className="popup__input popup__input_type_description"
              name="description"
              id="description"
              placeholder="Acerca de mí"
              type="text"
              required
              minLength={2}
              maxLength={200}
            />
            <span className="description-input-error popup__input-error"></span>
            <button className="button popup__button" type="submit">
              Guardar
            </button>
          </form>
  );
}