import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Item = ({id, img, name, price}) => {

    const {removeItem} = useContext(CartContext)

  return (
    <>
        <div className="cart-item">
            <img src={img} alt="" />
            <div className='cart-item-desc'>
                <h5>{name}</h5> 
                {/* <p>{phrase}</p> */}
            </div>
            <div className="plus-minus">
                <button>-</button>
                <p>5</p> 
                <button>+</button>
            </div>
            <div className='item-price'>
                ₹ {price}/- 
            </div>
            <div className='item-delete' onClick={() => removeItem(id)}>
                ❌
            </div>
        </div>
        <hr style={{width: 800, margin: `0 auto`}}/>
    </>
      
  )
}

export default Item