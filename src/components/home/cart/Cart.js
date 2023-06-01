import React, {useState} from 'react';
import './Cart.css';
import {CartItems} from './CartItems.js';
import Item from "./Item";
import Scrollbars from 'react-custom-scrollbars-2';

const Cart = () => {

   const [items, setItems] = useState(CartItems);
   
   return (
       <>
        <div className="cart">
            <div className="cart-total">
                <p>Total Items : <span className='total-item'>5</span> </p>
                <p>Total Value : <span className='total-value'>5</span> </p>
            </div>
            <Scrollbars autoHeight autoHeightMin={500} >
                {items.map((item) => {
                    return <Item key={item.id} {...item}/>
                })}
            </Scrollbars>
        </div>
    </>
  )
}

export default Cart
