import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [qty, setQty] = useState(1);

  const increaseQty = () => setQty((prevQty)=> (prevQty + 1));
  const decreaseQty = () => setQty((prevQty)=> (prevQty + 1))
//   const talltTtl = () => 

  return (
    <CartContext.Provider value={{
        increaseQty, decreaseQty
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}