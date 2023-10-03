import React from 'react'
import "./jammu.css";
import Petals from "../components/petals";

import Player from "../components/player";
import Scroll from "../components/scroll";
import Bottom from "../components/bottom";
import MiddleImage from "../components/middleImage";
import HouseAbout from "../components/houseAbout";


const top5 = "https://i.ibb.co/bJxyqwT/Rectangle-1-5.jpg"
const middle5 = "https://i.ibb.co/jWJyWpn/Rectangle-3-4.jpg"
const j1 = "https://i.ibb.co/zfHTJ6L/Rectangle-4-4.jpg"
const j2 = "https://i.ibb.co/6chVjt7/Rectangle-9-5.jpg"
const j3 = "https://i.ibb.co/BT4mDXX/Rectangle-10-3.jpg"
const j4 = "https://i.ibb.co/Jdr5xSF/Rectangle-11-3.jpg"
const j5 = "https://i.ibb.co/ZWfwsh8/Rectangle-5-4.jpg"


function Jammu() {
  return (
    <div className="econtain">
      <div className="etop">
        <img className="etopi" src={top5} /*{top4}*/ alt="agtop" />
      </div>
      <Petals />
      <HouseAbout name="Plot 45 Jammu Residence" />
      <MiddleImage middle={middle5} /*{middle4}*/ />


      <div className="jbox1">
        <div className="jbox1i">
          <img className="jbox1im" src={j1} /*{k1}*/ alt="agtop" loading="lazy" />
        </div>
        <div className="jbox1t">The linear expanse of Domino Park runs along the East River, boasting uninterrupted vistas of Manhattan’s skyscrapers. We lit the park to emphasize this interplay of horizontal and vertical sightlines. We placed 4000k sources within the two turquoise cranes which overlook the park. The emanating light amplifies the rhythm of shadow and material, creating an unexpected complement to the iconic skyline across the water. Atop the elevated Artifact Walk, which offers perhaps the best vantage of the river, we used continuous 3000k rail lighting, and highlighting the upper portions of the columns with 3500k LED accent lights. When visitors walk along, the experience is part-industrial, part-theatrical, and completely New York.</div>
      </div>


      <div className="jbox2">
        <div className="jbox2t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
        <div className="jbox2i">
          <img className="jbox2im" src={j2}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>


      <div className="jbox3">
        <div className="jbox3t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
        <div className="jbox3i">
          <img className="jbox3im" src={j3} /*{k3}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>

      <div className="jbox4">
       
        <div className="jbox4i">
          <img className="jbox4im" src={j4} /*{k3}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>
      
      
      <div className="jbox5">
        <div className="jbox5i">
          <img className="jbox5im" src={j5} /*{k3}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="jbox5t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>


      <Player />
      <Scroll />
      <Bottom />
    </div>
  )
}

export default Jammu