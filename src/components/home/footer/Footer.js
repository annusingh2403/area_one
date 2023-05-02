import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className="media">
            <div className="twitter"> <FontAwesomeIcon icon={faBook} /></div>
            <div className="instagram"></div>
            <div className="facebook">Facebook</div>
            <div className="youtube"></div>
        </div>
        <div className="address">
            <p>© Since - 2023 / Area_☻ne</p>
        </div>
        
      </div>
    </>
  )
}

export default Footer
