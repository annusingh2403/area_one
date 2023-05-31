import React, {useState} from 'react';
import './Cart.css';
import {CartItems} from './CartItems.js';

const Cart = () => {

    const [count, setCount] = useState(0);

    const Increase = () => {
        const countPlus = count + 1;
        setCount(countPlus);
    }

    const Decrease = () => {
        const countMinus = count - 1;
        setCount(countMinus);
    }

  return (
    <>
        <div className="cart">
            <div className="cart-total">
                <p>Total Items : <span className='total-item'>5</span> </p>
                <p>Total Value : <span className='total-value'>5</span> </p>
            </div>
            {CartItems.map((item) => {
                return(
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt="" />
                        <div className='cart-item-desc'>
                            <h5>{item.name}</h5>
                            <p>{item.phrase}</p>
                        </div>
                        <div className="plus-minus">
                            <button onClick={(Decrease)}>-</button>
                            <p>{count}</p> 
                            <button onClick={Increase}>+</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Cart
