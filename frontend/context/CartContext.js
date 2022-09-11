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
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    const getTtlItemsInCart = () => {
        let ttlCount = 0;
        for(let i =0; i<state.cart.length; i++){
            ttlCount += state.cart[i].quantity;  
        }

        setTtlItems(ttlCount);
    }

    const emptyCart = () => {
        // state.cart.length = 0;
        dispatch({type: 'empty-cart', payload: []})
        sessionStorage.setItem(PREFIX + "cart", JSON.stringify([]))
    }

    const getTotalCost = ()=>{
        let ttlCost = 0;
        for(let i =0; i<state.cart.length; i++){
            ttlCost += (state.cart[i].quantity * state.cart[i].price);  
        }

        setTtlCost(ttlCost);
    }

    useEffect(()=>{
        getTtlItemsInCart();
        getTotalCost();
        sessionStorage.setItem(PREFIX + "cart", JSON.stringify(state.cart))
    },[state.cart])

    useEffect(() => {
        if(checkoutSuccess)emptyCart();
    }, [checkoutSuccess])


    return (
        <CartContext.Provider value={{
            cart: state.cart, dispatch, ttlItems, 
            ttlCost, emptyCart, setCheckoutSuccess
        }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
  return useContext(CartContext);
}