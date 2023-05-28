import React, {useState} from 'react';
import './Contact.css';

const Contact = () => {

    const [contact, setContact] = useState(true);
    const [subscribe, setSubscribe] = useState(false);

    const Contact = () => {
        setContact(true);
        setSubscribe(false);
    }

    const Subscribe = () => {
        setSubscribe(true);
        setContact(false)
    }

  return (
    <>
        <div className='contact'>
            <div className="contact-main">
            <div className="button-box">
                <p className={contact ? "active-button" : 'contact-button'} onClick={Contact}>Contact</p>
                <p className={subscribe ? "active-button" : 'contact-button'} onClick={Subscribe}>Subscribe</p>
            </div>
           
            {contact ? 
                <div className="contact-box">
                    <p>Name: Annu Singh Chauhan</p>
                    <p>Mobile: 7380698894</p>
                    <address>Address: A-19, Vidyut Nagar, Vaishali Nagar, Jaipur-302021</address>
                </div> : ''
            }

            {subscribe ? 
                <div className='subscribe-box'>
                    <div>
                        <input type="text" placeholder='Name:'/>
                    </div>
                    <div>
                        <input type="email" placeholder='Email:'/>
                    </div>
                    <div>
                        <input type="number" placeholder='Mobile:'/>
                    </div>
                    <div className='subscribe-button'>
                        <button>Submit</button>
                    </div>
                </div> : ''
            }
            </div>
        </div>   
    </>
  )
}

export default Contact
