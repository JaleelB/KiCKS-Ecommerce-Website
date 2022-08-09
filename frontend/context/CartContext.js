 import { createContext, useContext, useReducer, useEffect, useState } from 'react';
import {CartReducer} from '../reducer/CartReducer';


const PREFIX = 'kicks-eccommerce-';

const INITIAL_STATE = {
    cart: typeof window !== 'undefined' && (JSON.parse(sessionStorage.getItem(PREFIX + "cart")) || [])
};

export const CartContext = createContext(INITIAL_STATE);

export function CartContextProvider({ children }) {

    const [ttlItems, setTtlItems] = useState(0);
    const [ttlCost, setTtlCost] = useState(0);
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    const getTtlItemsInCart = () => {
        let ttlCount = 0;
        for(let i =0; i<state.cart.length; i++){
            ttlCount += state.cart[i].quantity;  
        }

        setTtlItems(ttlCount);
    }

    const getTotalCost = (()=>{
        let ttlCost = 0;
        for(let i =0; i<state.cart.length; i++){
            ttlCost += (state.cart[i].quantity * state.cart[i].price);  
        }

        setTtlCost(ttlCost);
    })

    useEffect(()=>{
        getTtlItemsInCart();
        getTotalCost();
        sessionStorage.setItem(PREFIX + "cart", JSON.stringify(state.cart))
    },[state.cart])

    return (
        <CartContext.Provider value={{
            // addToCart, cart, removeFromCart
            cart: state.cart, dispatch, ttlItems, ttlCost
        }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
  return useContext(CartContext);
}