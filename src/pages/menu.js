import React, { useState } from 'react'
import './menu.css'
// import petal from '../assets/Petals.svg'
import { Link } from "react-router-dom";
import Bottom from '../components/bottom';
import Petals from '../components/petals'


function Menu() {

  const [text, setText] = useState('');
  const handleEnter1 = () => {
    setText("Who we are?")
  }
  const handleEnter2 = () => {
    setText("What we do?")
  }
  const handleEnter3 = () => {
    setText("Why lighting designer?")
  }
  const handleEnter4 = () => {
    setText("Where to reach us?")
  }

  const handleExit = () => {
      setText("")
  }
  return (
    <div className = 'menu_contain'>
        {/* <div className='menu_img'>
            <img className="menu_im" src={petal} alt="petals" /> 
        </div> */}
        <div>
            <Petals/>
        </div>
        
        <div className = 'otext'>
          {text}
        </div>
        <div className='opts' >
            <div className='opt1' onMouseEnter={handleEnter1} onMouseLeave={handleExit}><a href='/who'>Who</a></div>
            <div className='opt2' onMouseEnter={handleEnter2} onMouseLeave={handleExit}><a href='/what'>What</a></div>
            <div className='opt3' onMouseEnter={handleEnter3} onMouseLeave={handleExit}><a href='/why'>Why</a></div>
            <div className='opt4' onMouseEnter={handleEnter4} onMouseLeave={handleExit}><a href='/where'>Where</a></div>
            
        </div>

        
        
    </div>

  )
}

export default Menu