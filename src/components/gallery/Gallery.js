import React from 'react';
import './Gallery.css';
import {Photos} from './Photos';
import GimageOne from '../../images/gimage-one.jpg';
import GimageTwo from '../../images/gimage-two.jpg';
import GimageThree from '../../images/gimage-three.jpg';
import GimageFour from '../../images/gimage-four.jpg';
import GimageFive from '../../images/gimage-five.jpg';
import GimageSix from '../../images/gimage-six.jpg';
import GimageSeven from '../../images/gimage-seven.jpg';


const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="gallery-head">
            <div className="gimage-one">
                <img src={GimageOne} alt="" />
            </div>
            <div className="gimage-two">
                <img src={GimageTwo} alt="" />
            </div>
            <div className="gimage-three">
                <img src={GimageThree} alt="" />
            </div>
            <div className="gimage-four">
                <img src={GimageFour} alt="" />
            </div>
            <div className="gimage-five">
                <img src={GimageFive} alt="" />
            </div>
            <div className="gimage-six">
                <img src={GimageSix} alt="" />
            </div>
            <div className="gimage-seven">
                <img src={GimageSeven} alt="" />
            </div>
        </div>
        <div className='gallery-body'>
            {Photos.map(({img}) => {
                return(
                    <div className='gallery-image-box'>
                        <img src={img} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Gallery
