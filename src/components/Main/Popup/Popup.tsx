type PopupProps = {
  title?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
};

export default function Popup(props: PopupProps): React.JSX.Element {

  const {title, children, isOpen, onClose, id} = props;
  return (
     <div id={id} className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
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