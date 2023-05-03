import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <>
        <div className="section-products">
            <div className="products-container">
                <div className="products">
                    <div className="product-img">
                        <img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                    </div>
                    <div className="product-desc">
                        <h5>Espresso</h5>
                        <p>This coffee is so good</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products
