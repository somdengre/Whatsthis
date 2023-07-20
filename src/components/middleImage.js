import React from 'react';
import './middleImage.css';
import middle1 from '../assets/houses/house1/middle1.svg'
function MiddleImage() {
  return (
    <div className = 'middle'>
         <img className="middlei" src={middle1} alt="middleimage" />
    </div>
  )
}

export default MiddleImage