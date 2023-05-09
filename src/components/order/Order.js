import React, { useState } from 'react';
import './Order.css';

const Order = () => {

    const [state, setState] = useState('');

    const orderNav = (e, param) => {
        setState(param);
    }

  return (
    <>
      <div className="order-navbar">
        <div>
            <button className={state === "bestseller" ? "order-tabs" : '' } onClick={((e) => orderNav(e, 'bestseller'))}>Bestseller</button>
        </div>
        <div>
            <button className={state === "cold" ? "order-tabs" : '' } onClick={((e) => orderNav(e, 'cold'))}>Cold Drinks</button>
        </div>
        <div>
            <button className={state === "hot" ? "order-tabs" : '' } onClick={((e) => orderNav(e, 'hot'))}>Hot Drinks</button>
        </div>
        <div>
            <button className={state === "coffee" ? "order-tabs" : '' } onClick={((e) => orderNav(e, 'coffee'))}>Coffee</button>
        </div>
        <div>
            <button className={state === "food" ? "order-tabs" : '' } onClick={((e) => orderNav(e, 'food'))}>Food</button>
        </div>
        <div>
            <button className={state === "cake" ? "order-tabs" : '' } onClick={((e) => orderNav(e, 'cake'))}>Cake</button>
        </div>
      </div>
    </>
  )
}

export default Order
