import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);

  const increaseQty = () => setQty((prevQty)=> (prevQty + 1));
  const decreaseQty = () => setQty((prevQty)=> (prevQty + 1))

  const updateCart = (newProduct) => setCart([...cart, newProduct])
//   const talltTtl = () => 
//use session storage top store cart information

    useEffect(()=>{
        console.log(cart)
    },[cart])

  return (
    <CartContext.Provider value={{
        increaseQty, decreaseQty,
        updateCart, cart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}