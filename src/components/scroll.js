import React from 'react'
// import eb5 from '../assets/houses/house1/eb5.svg'
import './scroll.css'
// import h1 from '../assets/home/h1.svg'
// import h2 from '../assets/home/h2.svg'
// import h3 from '../assets/home/h3.svg'
// import h4 from '../assets/home/h4.svg'
// import h5 from '../assets/home/h5.svg'
// import h6 from '../assets/home/h6.svg'


const h1 = "https://i.ibb.co/9ccy6fY/h1.jpg"
const h2 = "https://i.ibb.co/pyXWQ9F/Elephent.jpg"
const h3 = "https://i.ibb.co/r2NZgpT/Kolte-Patil.jpg"
const h4 = "https://i.ibb.co/cXFxFMY/Plot-45.jpg"
const h5 = "https://i.ibb.co/17LWyQt/Global.jpg"
const h6 = "https://i.ibb.co/17LWyQt/Global.jpg"


function Scroll() {
  return (
    <div className = 'scroll'>
      <a href='edision'><img className="eb5i" src={h1} /*{h1}*/ alt="eb5" /></a>
      <a href='elephant'><img className="eb5i" src={h2} /*{h2}*/ alt="eb5" /></a>
      <a href='kolte'><img className="eb5i" src={h3} /*{h3}*/ alt="eb5" /></a>
      <a href='jammu'><img className="eb5i" src={h4} /*{h4}*/ alt="eb5" /></a>
      <a href='aerospace'><img className="eb5i" src={h5} /*{h5}*/ alt="eb5" /></a>
      <a href='lily'><img className="eb5i" src={h6} /*{h6}*/ alt="eb5" /></a>
      
    </div>
  )
}

export default Scroll