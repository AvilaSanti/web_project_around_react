import React from "react";

export default function EditAvatar(): React.JSX.Element {
  return ( 
<form className="popup__form" id="avatar-form">
            <input
              className="popup__input popup__input_type_url"
              name="avatar-link"
              id="avatar-link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="avatar-link-input-error popup__input-error"></span>
            <button disabled className="button popup__button" type="submit">
              Guardar
            </button>
          </form>
);
}