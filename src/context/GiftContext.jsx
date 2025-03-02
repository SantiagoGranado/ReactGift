import { createContext, useState, useContext } from "react";

export const GiftContext = createContext();

export function useGift() {
  return useContext(GiftContext);
}

export function GiftProvider({ children }) {
  const [gifts, setGifts] = useState([]);

  const addGift = (name, description) => {
    setGifts([...gifts, { id: Date.now(), name, description }]);
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftContext.Provider>
  );
}
