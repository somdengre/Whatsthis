import React from 'react'
import "./lily.css";
import Petals from "../components/petals";

import Player from "../components/player";
import Scroll from "../components/scroll";
import Bottom from "../components/bottom";
import HouseAbout from "../components/houseAbout";


const top6 = "https://i.ibb.co/pwzxZk1/Rectangle-1-6.jpg"
const l1 = "https://i.ibb.co/2g8TLtw/Rectangle-3-5.jpg"
const l2 = "https://i.ibb.co/1JfPrmr/Rectangle-4-5.jpg"
const l3 = "https://i.ibb.co/0f5pHtQ/Rectangle-5-5.jpg"
const l4 = "https://i.ibb.co/zHHnW1j/Rectangle-9-6.jpg"
const l5 = "https://i.ibb.co/vvZTqBb/Rectangle-10-4.jpg"
const l6 = "https://i.ibb.co/fdVMgZY/Rectangle-11-4.jpg"
const l7 = "https://i.ibb.co/FJyMkrK/Rectangle-12-1.jpg"

function Lily() {
  return (
    <div className="econtain">
      <div className="etop">
        <img className="etopi" src={top6} /*{top4}*/ alt="agtop" />
      </div>
      <Petals />
      <HouseAbout name="Lilly Office" />
      


      <div className="lbox1">
        <div className="lbox1t">The linear expanse of Domino Park runs along the East River, boasting uninterrupted vistas of Manhattan’s skyscrapers. We lit the park to emphasize this interplay of horizontal and vertical sightlines. We placed 4000k sources within the two turquoise cranes which overlook the park. The emanating light amplifies the rhythm of shadow and material, creating an unexpected complement to the iconic skyline across the water. Atop the elevated Artifact Walk, which offers perhaps the best vantage of the river, we used continuous 3000k rail lighting, and highlighting the upper portions of the columns with 3500k LED accent lights. When visitors walk along, the experience is part-industrial, part-theatrical, and completely New York.</div>
        <div className="lbox1i">
          <img className="lbox1im" src={l1} /*{k1}*/ alt="agtop" loading="lazy" />
        </div>
      </div>


      <div className="lbox2">
        <div className="lbox2i">
          <img className="lbox2im" src={l2}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="lbox2t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>

      <div className="lbox3">
        <div className="lbox3i">
          <img className="lbox3im" src={l3}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>

        <div className="lbox3t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
    
        <div className="lbox4">
            <div className="lbox41">
                <div className = 'lbox41i'>

                    <img className="lbox41im" src={l4}/*{k2}*/ alt="agtop" loading="lazy"/>
                </div>
                <div className="lbox41t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
            </div>
            <div className="lbox42">
                <div className = 'lbox42i'>

                    <img className="lbox42im" src={l5}/*{k2}*/ alt="agtop" loading="lazy"/>
                </div>
                <div className="lbox42t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
            </div>
            <div className="lbox43">
                <div className = 'lbox43i'>

                    <img className="lbox43im" src={l6}/*{k2}*/ alt="agtop" loading="lazy"/>
                </div>
                
            </div>
            
        </div>

        <div className="lbox5">
        <div className="lbox5i">
          <img className="lbox5im" src={l7}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="lbox5t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>
      

      <Player />
      <Scroll />
      <Bottom />
    </div>
  )
}

export default Lily