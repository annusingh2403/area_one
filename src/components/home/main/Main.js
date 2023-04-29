import React, {useState, useEffect} from 'react';
import './Main.css';
import Slogan from './Slogans';

const Main = () => {

    const [msg, setMsg] = useState(false);
    const [position, setPosition] = useState([0,0])

    const [number, setNumber] = useState(0);
    const [slogan, setSlogan] = useState(Slogan);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleClick = (e) => {
        setMsg(true);
        setPosition([e.pageX,e.pageY])
        setNumber(randomNumber(0, 29))
    }
    

  return (
    <>
        <div className='main'>
            <div className="msg-box-1" onClick={handleClick}>
                {/* <div className={msg ? "" : "show-msg"}>{slogan} </div> */}
                 {msg && (
                    <div className={msg ? "show-msg" : "show-msg"} style={{
                    position: "absolute",
                    left: position[0],
                    top: position[1],
                    tranform: "translateX(-50%)",
                    transform: "translateY(-50%)",
                    }}>
                        {slogan[number]}
                    </div>
                )}
            </div>

            
        </div>
    </>
  )
}

export default Main
