import React, {useState} from 'react';
import './Main.css';
import Slogan from './Slogans';
import Bestseller from '../../../images/bestseller.jpg';
import Colddrinks from '../../../images/colddrinks.jpg';
import Hotdrinks from '../../../images/hotdrinks.jpg';
import Coffee from '../../../images/coffee.jpg';
import Food from '../../../images/food.jpg';
import Cake from '../../../images/cake.jpg';


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
                        <img src={Bestseller} alt="" />
                    </div>
                    <p>Bestseller</p>
                    <div className="circle">
                        <img src={Colddrinks} alt="" />
                    </div>
                    <p>Cold Drinks</p>
                    <div className="circle">
                        <img src={Hotdrinks} alt="" />
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
                        <img src={Coffee} alt="" />
                    </div>
                    <p>Coffee</p>
                    <div className="circle">
                        <img src={Food} alt="" />    
                    </div>
                    <p>Food</p>
                    <div className="circle">
                        <img src={Cake} alt="" />
                    </div>
                    <p>Cake</p>
                </div>
                <p className='top'> <a href="#top">👆🏽</a></p>
            </div>

            <div className="section-products">
                <h5>♥ Low cost. High quality ♥</h5>

                <div className="products-container">
                    <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                            </div>
                            <div className="product-desc">
                                <p>Espress</p>
                                <p>Best is coffee</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="price">
                                $20
                            </div>
                            <div className="add-item">
                                Add Item
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                            </div>
                            <div className="product-desc">
                                <p>Espress</p>
                                <p>Best is coffee</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="price">
                                $20
                            </div>
                            <div className="add-item">
                                Add Item
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="product-top">
                            <div className="product-img">
                                <img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=150" alt="" />
                            </div>
                            <div className="product-desc">
                                <p>Espress</p>
                                <p>Best is coffee</p>
                            </div>
                        </div>
                        <div className="product-bottom">
                            <div className="price">
                                $20
                            </div>
                            <div className="add-item">
                                Add Item
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
