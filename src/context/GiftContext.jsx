import { createContext, useState, useContext } from "react";

export const GiftContext = createContext();

export function useGift() {
  return useContext(GiftContext);
}

export function GiftProvider({ children }) {
  const [gifts, setGifts] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addGift = (name, description) => {
    const newGift = {
      id: idCounter,
      name,
      description,
    };
    setGifts([...gifts, newGift]);
    setIdCounter(idCounter + 1); 
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftContext.Provider>
  );
}
