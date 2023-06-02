import React, {createContext} from 'react';
import './Cart.css';
import {CartItems} from './CartItems.js';
import ContextCart from './ContextCart';


export const CartContext = createContext();

const Cart = () => {
   
   return (
       <CartContext.Provider value={CartItems}>
            <ContextCart/>
       </CartContext.Provider>
  )
}

export default Cart
