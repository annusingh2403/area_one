import React from 'react';
import './Offer.css';
import offer from '../../../images/offer.jpg';

const Offer = () => {
  return (
    <div className='offer-section'>
        <h5>♪ Presenting Offer's</h5>
        <div className="offer">
            <div className="img">
                <img src={offer} alt="" />
            </div>
            <div className="offer-desc">
                <p className='offer-heading'>BUY ONE GET ONE FREE***</p>
                <p>We have a Sale that Brings joy.</p>
            </div>
            <div className="offer-button">

            </div>
        </div>
    </div>
  )
}

export default Offer
