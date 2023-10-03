import React from 'react'
import './whySpend.css'
import Heading from '../../components/heading'
import Petals from '../../components/petals'
import { Link } from 'react-router-dom'
import MiddleImage from '../../components/middleImage'
import Scroll from '../../components/scroll'
import Bottom from '../../components/bottom'


const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
const middle1 = "https://i.ibb.co/QFrVBNN/Rectangle-3.jpg"
const eb1 = "https://i.ibb.co/bvpvz2x/Rectangle-4.jpg"
const eb2 = "https://i.ibb.co/z2scj72/Rectangle-5.jpg"
const eb3 = "https://i.ibb.co/GtnJX3Z/Rectangle-10.jpg"
const eb4 = "https://i.ibb.co/Dr75jwX/Rectangle-9.jpg"
const eb5 = "https://i.ibb.co/Qmb1VSV/Rectangle-11.jpg"
function Whyspend() {
  return (
      <div className = 'whcontain'>
        <div className = 'wpetals'>
            <Link to="/menu">
              <img className="wpetal" src= {petal}/*{petal}*/ alt="petals" />
            </Link>
        </div>
        <Heading head = 'Why should I spend on one more special?' />
        <div className = 'stext'>
            Domino Park begins the next chapter of the Williamsburg waterfront. Named after the redeveloped Domino Sugar Refinery, the 5-acre park provides public greenspace along the East River for the first time in 160 years. The site’s industrial history is showcased via salvaged elements of the refinery; with a playground, fountains, and a 5-block long Artifact Walk that features cranes, syrup tanks, and original columns from the raw sugar warehouse.
            In designing the lighting for Domino Park, we worked with James Corner Field Operations to re-envision the site’s history while creating an accessible, exciting atmosphere for the next generation of visitors. Originally built in 1882, the Domino Sugar Refinery bears the traces of a century and a half. Rather than use lighting to conceal its rough edges, we used color to play up the scale of the architecture, and to create a sense of drama. Cooler color temperatures push taller structures into the background, while warmer color temperatures bring more accessible, human-scale objects into the foreground, creating an inviting entry-point into the space.
        </div>
        <div className = 'satext'>
            
            In designing the lighting for Domino Park, we worked with James Corner Field Operations to re-envision the site’s history while creating an accessible, exciting atmosphere for the next generation of visitors. Originally built in 1882, the Domino Sugar Refinery bears the traces of a century and a half. Rather than use lighting to conceal its rough edges, we used color to play up the scale of the architecture, and to create a sense of drama. Cooler color temperatures push taller structures into the background, while warmer color temperatures bring more accessible, human-scale objects into the foreground, creating an inviting entry-point into the space.
        </div>
        <MiddleImage middle ={middle1} /*{middle1}*//>
        <div className = 'eli'>
            <div className='elil'>
                <img className="eb1i" src={eb1} /*{eb1}*/ alt="eb1" />
            </div>
            <div className='elir'>
                <div className = 'etext'>
                    The linear expanse of Domino Park runs along the East River, boasting uninterrupted vistas of Manhattan’s skyscrapers. We lit the 
                    park to emphasize this interplay of horizontal and vertical sightlines. We placed 4000k sources within the two turquoise cranes which 
                    overlook the park. The emanating light amplifies the rhythm of shadow and material, creating an unexpected complement to the iconic 
                    skyline across the water. Atop the elevated Artifact Walk, which offers perhaps the best vantage of the river, we used continuous 
                    3000k rail lighting, and highlighting the upper portions of the columns with 3500k LED accent lights. When visitors walk along, the 
                    experience is part-industrial, part-theatrical, and completely New York.
                </div>
            </div>
        </div>
        <div className = 'edo'>
            <div className='edot'>
                <img className="eb2i" src={eb2} /*{eb2}*/ alt="eb2" />
            </div>
                <div className='edob'>
                    Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality 
                    is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. 
                    Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.
                </div>
        </div>
        <div className = 'ewa'>
            <div className= 'ewal'>
                <div className = 'ewal'>
                    <img className="eb3i" src= {eb3 }/*{eb3}*/ alt="eb3" />
                </div>
            </div>
            <div className = 'ewar'>
                <div className= 'ewart'>
                    Water is an integral element of the park, both in the surrounding landscape and its architectural fountains. Set apart from the 
                    solid materials found elsewhere, the dancing water feature provides dramatic lighting energy  with color-changing light. This 
                    provides a dynamic, playful experience for those walking by, sitting on nearby benches, or—on summer days—getting wet.
                </div>
                <div className= 'ewarb'>
                    <img className="eb4i" src={eb4} /*{eb4}*/ alt="eb4" />
                 </div>

            </div>
        </div>
        <div className = 'eei'>
            <div className='edod'>
                Water is an integral element of the park, both in the surrounding landscape and its architectural fountains. 
                Set apart from the solid materials found elsewhere, the dancing water feature provides dramatic lighting energy with color-changing 
                light. This provides a dynamic, playful experience for those walking by, sitting on nearby benches, 
                or—on summer days—getting wet. 
            </div>
            <div className='edob'> 
                <img className="eb5i" src={eb5} /*{eb5}*/ alt="eb5" />
            </div>
        </div>

        <Scroll/>
        <Bottom/>
    </div>
  )
}

export default Whyspend