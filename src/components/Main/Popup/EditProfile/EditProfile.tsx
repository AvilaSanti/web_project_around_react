import React from "react";

export default function EditProfile(): React.JSX.Element {
  return ( 
<form className="popup__form" id="edit-profile-form">
            <input
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
            <button disabled className="button popup__button" type="submit">
              Guardar
            </button>
          </form>
  );
}