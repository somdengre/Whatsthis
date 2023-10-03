import React from 'react';
import './middleImage.css'
function MiddleImage(props) {
  const middle = props.middle;
  return (
    <div className = 'middle'>
         <img className="middlei" src={middle} alt="middleimage" />
    </div>
  )
}

export default MiddleImage