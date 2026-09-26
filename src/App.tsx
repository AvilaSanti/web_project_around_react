import './App.css'

function App() {
  return (
<div className="page__content">
      <header className="header page__section">
        <img
          alt="Logotipo Around The U.S."
          className="logo header__logo"
          src="./images/logo.svg"
        />
      </header>
      <main className="content">
        <section className="profile page__section">
          <div className="profile__image-container">
            <img
              className="profile__image"
              src="./images/avatar.jpg"
              alt="Avatar"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list">
              <li className="card">
                <img
                  className="card__image"
                  src="https://amazonaws.com"
                  alt="Valle de Yosemite"
                />
                <button
                  aria-label="Eliminar tarjeta"
                  className="card__delete-button"
                  type="button"
                ></button>
                <div className="card__description">
                  <h2 className="card__title">Valle de Yosemite</h2>
                  <button
                    aria-label="Botón Me gusta"
                    className="card__like-button"
                    type="button"
                  ></button>
                </div>
              </li>
          </ul>
        </section>
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">© 2025 Around The U.S.</p>
      </footer>
    </div>
  )
}

export default App
