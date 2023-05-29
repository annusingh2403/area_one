import React from 'react';
import './Cart.css';
import {CartItems} from './CartItems.js';

const Cart = () => {
  return (
    <>
        <div className="cart">
           
                {CartItems.map((item) => {
                    return(
                        <div className="cart-item">
                            <img src={item.img} alt="" />
                            <h5>{item.name}</h5>
                            <p>{item.phrase}</p>
                        </div>
                    )
                })}
           
        </div>
    </>
  )
}

export default Cart
