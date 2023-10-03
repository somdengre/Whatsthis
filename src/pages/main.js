import React from 'react'
import './main.css'
// import petal from '../assets/Petals.svg'
import { Link } from "react-router-dom";

const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
function Main() {
  return (
    <div className = 'maincontain'>
        <div className='pimg'>
          <Link to="/menu">
            <img className="im" src={petal} /*{petal}*/ alt="petals" />
          </Link> 
        
        <div className='ptext'>Whatsthis Studio</div>
        </div>
        
    </div>
  )
}

export default Main