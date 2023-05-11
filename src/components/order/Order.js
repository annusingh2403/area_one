import React, { useState, useEffect } from 'react';
import './Order.css';
import { Products } from './Products';


const Order = () => {

    const [state, setState] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
        setAllProducts(Products)
    }, []);

    const filterByType = (type) => {
        setProducts(
            allProducts.filter(product => product.type === type)
        )
    }

    const orderNav = (param) => {
        setState(param);
        filterByType(param);
    }

    const singleProduct = (e) => {
        // const id = products.find((e) => e.id === id)
        console.log(e.target.key);
    }


  return (
    <>
        <div className="order-navbar">
            <div>
                <button className={state === "bestseller" ? "order-tabs" : '' } onClick={((e) => orderNav('bestseller'))}>Bestseller</button>
                {/* <button className={state === "bestseller" ? "order-tabs" : '' } onClick={((e) => orderNav('bestseller'))}>Bestseller</button> */}
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
            <div className="section-products">
                <div className="products-container">

                {products.map(({img, icon, name, phrase, price, id}) => {
                    return (

                            <div className="products" key={id} onClick={singleProduct}>
                                <div className="product-top">
                                    <div className="product-img">
                                        <a href="/order"><img src={img} alt="" /></a> 
                                    </div>
                                    <div className="product-desc">
                                        <span className='veg'> {icon} </span>
                                        <p className="product-name">{name}</p>
                                        <p className='phrase'>{phrase}</p>
                                    </div>
                                </div>
                                <div className="product-bottom">
                                    <div className="price">
                                        ₹ {price}/- 
                                    </div>
                                    <div className="add-item">
                                        <button>Add Item</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })}

                </div>
            </div>
        </div>
        </>
  )
}

export default Order
