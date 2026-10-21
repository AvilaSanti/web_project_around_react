import Header from './components/Header/Header.tsx';
import Main from './components/Main/Main.tsx';
import Footer from './components/Footer/Footer.tsx';
import { useEffect, useState } from 'react';
import type { UserData, CardData, PopupConfig } from './types/types.ts';
import api from './utils/api.ts';
import CurrentUserContext from './contexts/CurrentUserContext';

function App() {
   const [currentUser, setCurrentUser] = useState<UserData | null>(null);
   const [cards, setCards] = useState<CardData[]>([]);
   const [popup, setPopup] = useState<PopupConfig | null>(null);
   
     useEffect(() => {
     (async () => {
       try {
         const [userData, initialCards] = await Promise.all([
          api.getUserInfo(),
          api.getInitialCards()
        ]);
         setCurrentUser(userData);
         setCards(initialCards);
       } catch (error) {
         console.error(error);
       }
    })();
  }, []);

   function handleOpenPopup(popup: PopupConfig): void {
       setPopup(popup);
     }

   function handleClosePopup(): void {
    setPopup(null);
}
  
  return (
  <CurrentUserContext.Provider value={{ currentUser, /* pasaremos funciones aquí después */ }}>
   <div className="page__content">
     <Header />
     <Main 
     cards={cards}
     handleOpenPopup={handleOpenPopup}
     handleClosePopup={handleClosePopup}
     popup={popup}
     />
     <Footer />
   </div>
  </CurrentUserContext.Provider>
    
  )
}

export default App
