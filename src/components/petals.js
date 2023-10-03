import React from 'react'
import './petals.css';
// import petal from '../assets/Petals.svg';
import { Link } from "react-router-dom";

const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
function Petals() {
  return (
    <div className = 'epetals'>
            <Link to="/menu">
              <img className="epetal" src= {petal}/*{petal}*/ alt="petals" />
          </Link>
    </div>
  )
}

export default Petals