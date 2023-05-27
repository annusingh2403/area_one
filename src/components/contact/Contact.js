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

            <p className={contact ? "active-button" : 'contact-button'} onClick={Contact}>Contact</p>
            <p className={subscribe ? "active-button" : 'contact-button'} onClick={Subscribe}>Subscribe</p>

            {contact ? 
                <div className="contact-box">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" />
                        <label htmlFor=""></label>
                    </form>
                </div> : ''
            }

            {subscribe ? 
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email'/>
                    <button>Subscribe</button>
                </div> : ''
            }
            
        </div>   
    </>
  )
}

export default Contact
