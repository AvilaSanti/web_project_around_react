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

  const handleCardLike = async (card: CardData) => {
   const isLiked = card.isLiked;
   try {
     const newCard = await api.changeLikeStatus(card._id, isLiked);
     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
   } catch (error) {
     console.error(error);
  }
};

 const handleCardDelete = async (card: CardData) => {
  try {
    await api.deleteCard(card._id);
    setCards((state) => state.filter((c) => c._id !== card._id));
    handleClosePopup();
  } catch (error) {
    console.error(error);
  }
};

const handleUpdateUser = async (data: Pick<UserData, 'name' | 'about'> ) => {
 try{
  const updatedUser = await api.updateUserInfo(data);
  setCurrentUser(updatedUser);
  handleClosePopup();
 } catch (error) {
   console.error(error);
 }
};
  
  return (
  <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser}}>
   <div className="page__content">
     <Header />
     <Main 
     cards={cards}
     handleOpenPopup={handleOpenPopup}
     handleClosePopup={handleClosePopup}
     popup={popup}
     handleCardLike={handleCardLike}
     handleCardDelete={handleCardDelete}
     />
     <Footer />
   </div>
  </CurrentUserContext.Provider>
    
  )
}

export default App
