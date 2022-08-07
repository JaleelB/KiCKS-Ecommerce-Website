import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => setCart([...cart, newProduct]);

  const removeFromCart = (id) => {
      const updatedCart = cart.filter(cartItem => cartItem['id'] !== id );
      setCart(updatedCart)
  }
//   const talltTtl = () => 
//use session storage top store cart information

    useEffect(()=>{
        console.log(cart)
    },[cart])

  return (
    <CartContext.Provider value={{
        addToCart, cart, removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}