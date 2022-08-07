const ACTIONS = {
    ADD_TO_CART: 'add-item-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart'
};

export const CartReducer = (state, action) => {
    console.log(state.cart, typeof(state.cart))
    switch(action.type){
        case ACTIONS.ADD_TO_CART:

            let productAlreadExists; 
            const updatedCart = state.cart.map((cartItem) => { 
                if(cartItem.slug === action.payload.slug && cartItem.size === action.payload.size){
                    productAlreadExists = true;
                    return {...cartItem, quantity: cartItem.quantity + 1};
                }

                return cartItem;
                
            });
            

            return{
                // cart: index !== -1 ? [ ...state.cart, state.cart[index].quantity+=1 ]: 
                //       index === -1 && state.cart.length === 0 ? [...state.cart, action.payload]:
                //       []
                // cart: index ? [ ...state.cart, state.cart[index].quantity+=1 ] : [...state.cart, action.payload]
                cart: productAlreadExists ? updatedCart : [...state.cart, action.payload]
            }
            
        case ACTIONS.REMOVE_FROM_CART:
            
            const index = state.cart.map((cartItem, index) => {  
                
                 if(cartItem.slug === action.payload.slug && cartItem.size === action.payload.size){
                    return index;
                }
                
            });


            return{
                ...state,
                cart: [...state.cart.slice(0, index), ...state.cart.slice(index  +1)]
            };
            
      
        default: 
            return state;
    }
};