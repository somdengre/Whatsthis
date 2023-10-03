import React from 'react'
import './why.css'
// import petal from '../assets/Petals.svg'
import Bottom from '../components/bottom'
import { Link } from "react-router-dom";
import Petals from '../components/petals';


const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
function Why() {
  return (
    <div className  = 'whycontain'>
        <div className='hpet'><Link to="/menu">
              <img className="epetal" src={petal} /*{petal}*/ alt="petals" />
          </Link> </div> 
        <div className = 'whyoptions'>
          <div className = 'option'><a href='why_lightning'>Why do you need a lighting designer?</a> </div>
          <div className = 'option'><a href='why_choose'>Why choose us?</a>  </div>
          <div className = 'option'><a href='why_spend'>Why should I spend on one more specialist?</a>  </div>
          <div className = 'option'><a href='why_about'>Why not tell me about light?</a> </div>

        </div>
          <Bottom/>
    </div>
  )
}

export default Why