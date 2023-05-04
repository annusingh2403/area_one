import React from 'react';
import "./Footer.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
            <div className="media">
                <div className="twitter" style={{color: 'blue'}}><FaTwitter/></div>
                <div className="insta-icon"></div>
                <div className="facebook" style={{color: 'blue'}}><FaFacebook/></div>
                <div className="youtube" style={{color: 'red'}}><FaYoutube/></div>
            </div>
            <div className="copyright">
                <p>© 2023 Area_☻ne. All rights reserved.</p>
            </div>
      </div>
    </>
  )
}

export default Footer;
