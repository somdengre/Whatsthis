import React from 'react'
import top1 from '../assets/houses/house1/top1.svg'
import middle1 from '../assets/houses/house1/middle1.svg'
import petal from '../assets/Petals.svg'
import './edision.css';
import Bottom from '../components/bottom';
function Edision() {
  return (
    <div className ='e1contain'>
        <div className = 'e1top'>
            <img className="e1topi" src={top1} alt="e1top" />
        </div>
        <div className = 'e1petals'>
            <img className="e1petal" src={petal} alt="petals" />
        </div>
        <div className = 'e1abt'>
            <div className='e1abtl'> </div>
            <div className='e1abtr'> </div>
        </div>
        <div className = 'e1mi'>
            <img className="e1mimg" src={middle1} alt="middle1" />
        </div>
        <div className = 'e1li'>
            <div className='e1lil'></div>
            <div className='e1lir'></div>
        </div>
        <div className = 'e1do'>
            <div className='e1dot'> </div>
            <div className='e1dob'> </div>
        </div>
        <div className = 'e1wa'>
            <div className= 'e1wal'> </div>
            <div className= 'e1wam'> </div>
            <div className= 'e1war'> </div>
        </div>
        <div className = 'e1ei'>
            <div className='e1dot'> </div>
            <div className='e1dob'> </div>
        </div>
        <div className = 'e1yt'>
            <img className="hpetal" src={petal} alt="petals" />
        </div>
        <Bottom/>
    </div>
  )
}

export default Edision