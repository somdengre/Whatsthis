import React from 'react'
import top1 from '../assets/houses/house1/top1.svg'
import eb1 from '../assets/houses/house1/eb1.svg'
import eb2 from '../assets/houses/house1/eb2.svg'
import eb3 from '../assets/houses/house1/eb3.svg'
import eb4 from '../assets/houses/house1/eb4.svg'
import eb5 from '../assets/houses/house1/eb5.svg'
import './edision.css';
import Bottom from '../components/bottom';
import Player from '../components/player';
import Scroll from '../components/scroll'
import Petals from '../components/petals'
import HouseAbout from '../components/houseAbout'
import MiddleImage from '../components/middleImage'
function Edision() {
  return (
    <div className ='econtain'>
        <div className = 'etop'>
            <img className="etopi" src={top1} alt="e1top" />
        </div>
        <Petals/>
        <HouseAbout/>
        <MiddleImage/>
        <div className = 'eli'>
            <div className='elil'>
                <img className="eb1i" src={eb1} alt="eb1" />
            </div>
            <div className='elir'></div>
        </div>
        <div className = 'edo'>
            <div className='edot'>
                <img className="eb2i" src={eb2} alt="eb2" />
            </div>
            <div className='edob'></div>
        </div>
        <div className = 'ewa'>
            <div className= 'ewal'>
                <div className = 'ewal'>
                    <img className="eb3i" src={eb3} alt="eb3" />
                </div>
            </div>
            <div className = 'ewar'>
                <div className= 'ewart'> </div>
                <div className= 'ewarb'>
                    <img className="eb4i" src={eb4} alt="eb4" />
                 </div>

            </div>
        </div>
        <div className = 'eei'>
            <div className='edot'> </div>
            <div className='edob'> 
                <img className="eb5i" src={eb5} alt="eb5" />
            </div>
        </div>
        <Player/>
        <Scroll/>
        <Bottom/>
    </div>
  )
}

export default Edision