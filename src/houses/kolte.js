import React from "react";
import "./kolte.css";
import Petals from "../components/petals";

import Player from "../components/player";
import Scroll from "../components/scroll";
import Bottom from "../components/bottom";
import MiddleImage from "../components/middleImage";
import HouseAbout from "../components/houseAbout";

const top4 = "https://i.ibb.co/n3frpSL/Rectangle-1-3.jpg"
const middle4 = "https://i.ibb.co/zFWFpbV/Rectangle-3-3.jpg"
const k1 = "https://i.ibb.co/YksXTVK/Rectangle-4-3.jpg"
const k2 = "https://i.ibb.co/6nDTj1M/Rectangle-9-4.jpg"
const k3 = "https://i.ibb.co/LZTPFLH/Rectangle-5-3.jpg"

function Kolte() {
  return (
    <div className="econtain">
      <div className="etop">
        <img className="etopi" src={top4} /*{top4}*/ alt="agtop" loading="lazy"/>
      </div>
      <Petals />
      <HouseAbout name="Kolte Patil Giga" />
      <MiddleImage middle={middle4} /*{middle4}*/ />


      <div className="kbox1">
        <div className="kbox1t">The linear expanse of Domino Park runs along the East 
        River, boasting uninterrupted vistas of Manhattan’s skyscrapers. We lit the park 
        to emphasize this interplay of horizontal and vertical sightlines. We placed 4000k sources
         within the two turquoise cranes which overlook the park. The emanating light amplifies the 
         rhythm of shadow and material, creating an unexpected complement to the iconic skyline across 
         the water. Atop the elevated Artifact Walk, which offers perhaps the best vantage of the river,
          we used continuous 3000k rail lighting, and highlighting the upper portions of the columns with 
          3500k LED accent lights. When visitors walk along, the experience is part-industrial, part-theatrical,
           and completely New York.</div>
        <div className="kbox1i">
          <img className="kbox1im" src={k1} /*{k1}*/ alt="agtop" loading="lazy" />
        </div>
      </div>


      <div className="kbox2">
        <div className="kbox2i">
          <img className="kbox2im" src={k2} /*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="kbox2t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>


      <div className="kbox3">
        <div className="kbox3i">
          <img className="kbox3im" src={k3} /*{k3}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="kbox3t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>


      <Player />
      <Scroll />
      <Bottom />
    </div>
  );
}

export default Kolte;
