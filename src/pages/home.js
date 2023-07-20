import React from 'react'
import {Link} from 'react-router-dom';

import petal from '../assets/Petals.svg'
import h1 from '../assets/home/h1.svg'
import h2 from '../assets/home/h2.svg'
import h3 from '../assets/home/h3.svg'
import h4 from '../assets/home/h4.svg'
import h5 from '../assets/home/h5.svg'
import h6 from '../assets/home/h6.svg'
import "./home.css";
import Bottom from '../components/bottom';
function Home() {
  return (
    <div className='hcontain'>
        <div className='hpet'><img className="hpetal" src={petal} alt="petals" /> </div>
        <div className='htext'>What we do?</div>
        <div className='himgs'>
        <div className='himgc'><Link to="/edision">
                                <img className="himage" src={h1} alt="Edision house" />
                                </Link>   
        </div> 
        <div className='himgc'><Link to="/elephant">
                                <img className="himage" src={h2} alt="Elephent" />
                                </Link>   
        </div> 
        <div className='himgc'><Link to="/edision">
                                <img className="himage" src={h3} alt="Edision house" />
                                </Link>   
        </div> 
        <div className='himgc'><Link to="/edision">
                                <img className="himage" src={h4} alt="Edision house" />
                                </Link>   
        </div> 
        <div className='himgc'><Link to="/edision">
                                <img className="himage" src={h5} alt="Edision house" />
                                </Link>   
        </div> 
        <div className='himgc'><Link to="/edision">
                                <img className="himage" src={h6} alt="Edision house" />
                                </Link>   
        </div> 
            
        </div>
        <Bottom/>
    </div>
  )
}

export default Home