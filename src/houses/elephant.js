import React from 'react'
import './elephant.css'

import Petals from '../components/petals'
import HouseAbout from '../components/houseAbout'
import MiddleImage from '../components/middleImage'
import Player from '../components/player'
import Scroll from '../components/scroll'
import Bottom from '../components/bottom'


const top2 = "https://i.ibb.co/kMWwKW1/Rectangle-1-1.jpg"
const middle2 = "https://i.ibb.co/wMt50Wz/Rectangle-3-1.jpg"
const e1 = "https://i.ibb.co/kMzWvcD/Rectangle-4-1.jpg"
const e2 = "https://i.ibb.co/VJSjH1Z/Rectangle-10-1.jpg"
const e3 = "https://i.ibb.co/cQPyzVc/Rectangle-9-1.jpg"
const e4 = "https://i.ibb.co/TgvRRpd/Rectangle-5-1.jpg"
const e5 = "https://i.ibb.co/w42nGKv/Rectangle-11-1.jpg"
function Elephant() {
  return (
    <div className = 'econtain'>
       <div className = 'etop'>
            <img className="etopi" src={top2} /*{top2}*/ alt="e1top" />
        </div>

        <Petals />
        <HouseAbout name = 'Elephant House'/>
        <MiddleImage middle ={middle2} /*{middle2}*//>

        <div className = 'ebox1'>
            <div className ='ebox1l'><img className="etopli" src={e1} /*{e1}*/ alt="e1top" /></div>
            <div className ='ebox1r'>
              <div className= 'ebox1r_text'>
                The linear expanse of Domino Park runs 
                along the East River, boasting uninterrupted vistas of Manhattan’s skyscrapers. We 
                lit the 
                park to emphasize this interplay of horizontal and vertical sightlines. We placed 
                4000k sources within the two turquoise cranes which overlook the park. The emanating 
                light amplifies the rhythm of shadow and material, creating an unexpected complement to the 
                iconic skyline across the water. Atop the elevated Artifact Walk, which offers perhaps the 
                best vantage of the river, we used continuous 3000k rail lighting, and highlighting the upper 
                portions of the columns with 3500k LED accent lights. When visitors walk along, the experience is 
                part-industrial, part-theatrical, and completely New York.
              </div>
              <div className='ebox1r_image'><img className="etopri" src={e2} /*{e2}*/ alt="e1top" /></div>
            </div>
            <div></div>
        </div>
        <div className = 'ebox2'>
            <img className="ebox2i" src={e3} /*{e3}*/ alt="e1top" />
            <div className = 'ebox2_text'>Down below, the warmer lighting of the 
            ground level welcomes visitors to the grassy area, 
            playground, and benches. This hospitality is a must, 
            as the park attracts over a million people a year: 
            sunbathers, picnickers, and children looking to escape 
            the summer heat. Over the course of the day, the lighting shifts, 
            but it was important to us to make it always inviting.</div>
        </div>

        <div className = 'ebox3r'>
        <div className = 'ebox3'>
            <div className = 'ebox3_text'>Down below, the warmer lighting of the 
            ground level welcomes visitors to the grassy area, 
            playground, and benches. This hospitality is a must, 
            as the park attracts over a million people a year: 
            sunbathers, picnickers, and children looking to escape 
            the summer heat. Over the course of the day, the lighting shifts, 
            but it was important to us to make it always inviting.</div>
            <img className="ebox3i" src={e4} /*{e4}*/ alt="e1top" />
        </div>

          <div className = 'ebox3b'>
          <img className="ebox4i" src={e5} /*{e5}*/ alt="e1top" />
           </div>
        </div>
        
        





        <Player/>
        <Scroll/>
        <Bottom/>
    </div>
  )
}

export default Elephant