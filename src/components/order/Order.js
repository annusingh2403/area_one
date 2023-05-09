import React, { useState } from 'react';
import './Order.css';
import Cappuchino from '../../images/cappuchino.jpg';
import { FaVimeoSquare } from "react-icons/fa";


const Order = () => {

    const [state, setState] = useState('bestseller');

    const orderNav = (param) => {
        setState(param);
    }

  return (
    <>
        <div className="order-navbar">
            <div>
                <button className={state === "bestseller" ? "order-tabs" : '' } onClick={((e) => orderNav('bestseller'))}>Bestseller</button>
            </div>
            <div>
                <button className={state === "cold" ? "order-tabs" : '' } onClick={((e) => orderNav('cold'))}>Cold Drinks</button>
            </div>
            <div>
                <button className={state === "hot" ? "order-tabs" : '' } onClick={((e) => orderNav('hot'))}>Hot Drinks</button>
            </div>
            <div>
                <button className={state === "coffee" ? "order-tabs" : '' } onClick={((e) => orderNav('coffee'))}>Coffee</button>
            </div>
            <div>
                <button className={state === "food" ? "order-tabs" : '' } onClick={((e) => orderNav('food'))}>Food</button>
            </div>
            <div>
                <button className={state === "cake" ? "order-tabs" : '' } onClick={((e) => orderNav('cake'))}>Cake</button>
            </div>
        </div>

      
        <div className='order-main'>
        <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <a href=""><img src={Cappuchino} alt="" /></a> 
                            </div>
                            <div className="product-desc">
                                <span className='veg'> <FaVimeoSquare/> </span>
                                <h className="product-name">Cappuccino</h>
                                <p className='phrase'>The perfect balance of espresso, steamed milk and foam.</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="price">
                                ₹ 90/- 
                            </div>
                            <div className="add-item">
                                <button>Add Item</button>
                            </div>
                        </div>
                    </div>
        </div>
        </>
  )
}

export default Order
