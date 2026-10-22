import React, { useEffect } from 'react';

type PopupProps = {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
};

export default function Popup(props: PopupProps): React.JSX.Element {
 const {title, children, isOpen, onClose, id} = props;
 
 useEffect(() => {
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [isOpen, onClose]);

  return (
    <div id={id} className={`popup ${isOpen ? 'popup_is-opened' : ''}`}
       onClick={(event) => {
       if (event.target === event.currentTarget) {
       onClose();
       }
       }}
     >
     <div className={`popup__content ${!title ? 'popup__content_content_image' : ''}`}>
          <button
            aria-label='Close popup'
            className="popup__close"
            type="button"
            onClick={onClose}
          />
          {title && <h3 className='popup__title'>{title}</h3>}
            {children}
        </div>
    </div>
  );
}