import React, {useState, useEffect} from 'react';
import './Main.css';
import Slogan from './Slogans';

const Main = () => {

    const [msg, setMsg] = useState(false);
    const [count, setCount] = useState(2);
    const [slogan, setSlogan] = useState(Slogan[count]);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setMsg(!msg);

        }, 2000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [msg]);

  return (
    <>
        <div className='main'>
            <div className="msg-box">
                <div className={msg ? "" : "show-msg"}>{slogan} </div>
            </div>
        </div>
    </>
  )
}

export default Main
