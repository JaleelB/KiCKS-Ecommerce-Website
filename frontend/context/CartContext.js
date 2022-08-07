import { createContext, useContext, useReducer, useEffect } from 'react';
import {CartReducer} from '../reducer/CartReducer';


const PREFIX = 'kicks-eccommerce-';

const INITIAL_STATE = {
    cart: typeof window !== 'undefined' && (JSON.parse(sessionStorage.getItem(PREFIX + "cart")) || [])
};

export const CartContext = createContext(INITIAL_STATE);

export function CartContextProvider({ children }) {

//   const [cart, setCart] = useState([]);
//   const [ttlPrice, setTtlPrice] = useState(0);

//   const addToCart = (newProduct) => setCart([...cart, newProduct]);

//   const removeFromCart = (id) => {
//       const updatedCart = cart.filter(cartItem => cartItem['id'] !== id );
//       setCart(updatedCart);
//   }

    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

    useEffect(()=>{
        sessionStorage.setItem(PREFIX + "cart", JSON.stringify(state.cart))
    },[state.cart])

    return (
        <CartContext.Provider value={{
            // addToCart, cart, removeFromCart
            cart: state.cart, dispatch
        }}>
        {children}
        </CartContext.Provider>
    );
}

export function useCartContext() {
  return useContext(CartContext);
}