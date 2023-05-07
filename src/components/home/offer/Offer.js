import React, {useState} from 'react';
import './Offer.css';
// import offer from '../../../images/offer.jpg';
import offerImage1 from '../../../images/offer.jpg';
import offerImage2 from '../../../images/24hour.jpg';
import offerImage3 from '../../../images/offermenu.jpg';
import { FaSmile, FaSmileWink, FaSmileBeam } from "react-icons/fa";


const Offer = () => {

    const [clicked, setClicked] = useState('tab1');
    const [tabs, setTabs] = useState([
        {
            img: offerImage1,
            heading: 'BUY ONE GET ONE FREE***',
            phrase: "We have a Sale that Brings joy.",
            price: '99'
        },
        {
            img: offerImage2,
            heading: '24 Hour',
            phrase: "Hurry Up 24 Hour Sale Is Ending Soon!",
            price: '150'
        },
        {
            img: offerImage3,
            heading: 'New Menu',
            phrase: "Light, fresh and delicious. Our new menu is here now! Come try it for yourself.",
            price: '150'
        }
    ]);
    const [count, setCount] = useState([0])

    const offerTab = (e, param) => {
        setClicked(param);

        if(param === "tab1"){
            setCount(0);
        }if(param === "tab2"){
            setCount(1);
        }if(param === "tab3"){
            setCount(2);
        }
    }

  return (
    <div className='offer-section'>
        <h5>♪ Presenting Offer's</h5>
        <div>
            <div className="offer-term">
                <p>*T&C Apply.</p>
            </div>
            <div className={count === 0 ? "offer": count === 1 ? "offer tab2" : count === 2 ? "offer tab3" : "offer"}>
                <div className="img">
                    <img src={tabs[count].img} alt="" />
                </div>
                <div className="offer-desc">
                    <p className='offer-heading'>{tabs[count].heading}</p>
                    <p>{tabs[count].phrase}</p>
                    <p className='offer-price'>Starting From</p>
                    <p>₹{tabs[count].price}/- </p>
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
