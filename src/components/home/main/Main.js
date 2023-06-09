import React, {useState} from 'react';
import './Main.css';
import Slogan from './Slogans';
import Bestseller from '../../../images/bestseller.jpg';
import Colddrinks from '../../../images/colddrinks.jpg';
import Hotdrinks from '../../../images/hotdrinks.jpg';
import Coffee from '../../../images/coffee.jpg';
import Food from '../../../images/food.jpg';
import Cake from '../../../images/cake.jpg';
import Cappuchino from '../../../images/cappuchino.jpg';
import Mocha from '../../../images/mocha.jpg';
import Latte from '../../../images/latte.jpg';
import { FaVimeoSquare } from "react-icons/fa";
import Offer from '../offer/Offer';
import { Link } from 'react-router-dom';


const Main = () => {

    const [msg, setMsg] = useState(false);
    const [position, setPosition] = useState([311,301])

    const [number, setNumber] = useState(9);
    const [slogan, setSlogan] = useState(Slogan[number]);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClick = (e) => {
        setMsg(!msg);
        setPosition([e.pageX,e.pageY])
        setNumber(randomNumber(0, 29))
        setSlogan(Slogan[number])
    }

    
  return (
    <>
        <div className='main'>
            <div className='main-section-one' id='top'>
                <div className="menu">
                    <div className="circle">
                        <Link to="/order"><img src={Bestseller} alt="" /></Link>
                    </div>
                    <p>Bestseller</p>
                    <div className="circle">
                        <Link to='/order'><img src={Colddrinks} alt="" /></Link>
                    </div>
                    <p>Cold Drinks</p>
                    <div className="circle">
                        <Link to='/order'><img src={Hotdrinks} alt="" /></Link>
                    </div>
                    <p>Hot Drinks</p>
                </div>
                <div className="msg-box" onClick={handleClick}>
                    {msg && (
                        <div className={msg ? "show-msg" : ""} style={{
                        position: "absolute",
                        width: 'auto',
                        left: position[0],
                        top: position[1],
                        tranform: "translateX(-50%)",
                        transform: "translateY(-50%)",
                        }}>
                            {slogan}
                        </div>
                    )}
                </div>
                <div className="menu">
                    <div className="circle">
                        <Link to='/order'><img src={Coffee} alt="" /></Link>
                    </div>
                    <p>Coffee</p>
                    <div className="circle">
                        <Link to='/order'><img src={Food} alt="" /></Link>   
                    </div>
                    <p>Food</p>
                    <div className="circle">
                        <Link to='/order'><img src={Cake} alt="" /></Link>
                    </div>
                    <p>Cake</p>
                </div>
                <p className='top'> <a href="#top">👆🏽</a></p>
            </div>
            
            <Offer/>

                                                        {/* SECTION - PRODUCTS */}

            <div className="section-products">
                <h5>♥ Low cost. High quality ♥</h5>

                <div className="products-container">
                    <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <a href="/order"><img src={Cappuchino} alt="" /></a> 
                            </div>
                            <div className="product-desc">
                                <span className='veg'> <FaVimeoSquare/> </span>
                                <p className="product-name">Cappuccino</p>
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
                    <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <a href="/order"><img src={Mocha} alt="" /></a> 
                            </div>
                            <div className="product-desc">
                                <span className='veg'> <FaVimeoSquare/> </span>
                                <p className="product-name">Mocha</p>
                                <p className='phrase'>Combined with a chocolate powder or syrup, followed by milk or cream.</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="price">
                                ₹ 100/- 
                            </div>
                            <div className="add-item">
                                <button>Add Item</button>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <a href="/order"><img src={Latte} alt="" /></a> 
                            </div>
                            <div className="product-desc">
                                <span className='veg'> <FaVimeoSquare/> </span>
                                <p className="product-name">Latte</p>
                                <p className='phrase'>Contain two shots of espresso, steamed milk, and foam on the top.</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="price">
                                ₹ 95/- 
                            </div>
                            <div className="add-item">
                                <button>Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Main
