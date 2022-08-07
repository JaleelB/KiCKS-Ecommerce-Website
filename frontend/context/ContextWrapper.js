import { NavContextProvider } from "../context/NavContext";
import { CartContextProvider } from "./CartContext";

export const ContextWrapper = ({ children }) => {
    return( 
      <CartContextProvider>
        <NavContextProvider>
            {children}
        </NavContextProvider>
      </CartContextProvider>
       
    );
};