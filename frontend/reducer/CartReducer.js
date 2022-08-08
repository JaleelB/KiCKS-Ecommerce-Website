const ACTIONS = {
    ADD_TO_CART: 'add-item-to-cart',
    REMOVE_FROM_CART: 'remove-from-cart',
    INCREASE_CART_ITEM: 'increase-cart-item',
    DECREASE_CART_ITEM: 'decrease-cart-item'
};

export const CartReducer = (state, action) => {
    
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
                cart: productAlreadExists ? updatedCart : [...state.cart, action.payload]
            }
            
        case ACTIONS.REMOVE_FROM_CART:
            
            let removeIndex;
            for(let i=0; i<state.cart.length; i++){  
                
                if(state.cart[i].slug === action.payload.slug && state.cart[i].size === action.payload.size){
                    removeIndex = i;
                }
                
            }

            return{
                ...state,
                cart: [...state.cart.slice(0, removeIndex), ...state.cart.slice(removeIndex + 1)]
            };

        case ACTIONS.INCREASE_CART_ITEM: 
            const cartAfterIncrease = state.cart.map((cartItem) => { 
                if(cartItem.slug === action.payload.slug && cartItem.size === action.payload.size){
                    return {...cartItem, quantity: cartItem.quantity < 6 ? cartItem.quantity + 1 : 6};
                }

                return cartItem;
            });

            return {
                ...state,
                cart: cartAfterIncrease
            }
        
        case ACTIONS.DECREASE_CART_ITEM: 
            const cartAfterDecrease = state.cart.map((cartItem) => { 
                if(cartItem.slug === action.payload.slug && cartItem.size === action.payload.size){
                    return {...cartItem, quantity: cartItem.quantity >=2 ? cartItem.quantity - 1 : 1};
                }

                return cartItem;
            });

            return {
                ...state,
                cart: cartAfterDecrease
            }
            
      
        default: 
            return state;
    }
};