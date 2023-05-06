import React, {useState} from 'react';
import './Offer.css';
import offer from '../../../images/offer.jpg';
import { FaSmile, FaSmileWink, FaSmileBeam } from "react-icons/fa";


const Offer = () => {

    const [clicked, setClicked] = useState('tab1');

    const offerTab = (e, param) => {
        setClicked(param);
    }

  return (
    <div className='offer-section'>
        <h5>♪ Presenting Offer's</h5>
        <div>
            <div className="offer-term">
                <p>*T&C Apply.</p>
            </div>
            <div className="offer">
            <div className="img">
                <img src={offer} alt="" />
            </div>
            <div className="offer-desc">
                <p className='offer-heading'>BUY ONE GET ONE FREE***</p>
                <p>We have a Sale that Brings joy.</p>
                <p className='offer-price'>Starting From</p>
                <p>₹90/- </p>
            </div>
            <div className="offer-button">
                <div></div>
                <div></div>
                <button>Know More </button>
            </div>
            </div>
        </div>
        <div className="offer-tabs">
            <div className={clicked === "tab1" ? "offer-tab-clicked" : "offer-tab-not-clicked"} onClick={e => offerTab(e, "tab1")}><FaSmile/></div>
            <div className={clicked === "tab2" ? "offer-tab-clicked" : "offer-tab-not-clicked"} onClick={e => offerTab(e, "tab2")}><FaSmileBeam/></div>
            <div className={clicked === "tab3" ? "offer-tab-clicked" : "offer-tab-not-clicked"} onClick={e => offerTab(e, "tab3")}><FaSmileWink/></div>
        </div>
    </div>
  )
}

export default Offer
