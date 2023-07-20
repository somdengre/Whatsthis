import React from 'react'
import './petals.css';
import petal from '../assets/Petals.svg';

function Petals() {
  return (
    <div className = 'epetals'>
            <img className="epetal" src={petal} alt="petals" />
    </div>
  )
}

export default Petals