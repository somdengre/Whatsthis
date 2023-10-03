import React from 'react'
import './whyLightning.css'
import Heading from '../../components/heading'
import Petals from '../../components/petals'
import { Link } from 'react-router-dom'
import MiddleImage from '../../components/middleImage'
import Scroll from '../../components/scroll'
import Bottom from '../../components/bottom'


const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
const wl1 = "https://i.ibb.co/Gdxfv8n/Rectangle-3-6.jpg"
const wl2 = "https://i.ibb.co/PCdYTM8/Rectangle-12-2.jpg"
const wl3 = "https://i.ibb.co/ncbQvDP/Rectangle-13-1.jpg"
const wl4 = "https://i.ibb.co/L0H8gq6/Rectangle-14-1.jpg"
const wl5 = "https://i.ibb.co/qCxMXy1/Rectangle-16-1.jpg"
const wl6 = "https://i.ibb.co/sKk1TYB/Rectangle-15-1.jpg"
const wl7 = "https://i.ibb.co/vc3LLGm/Rectangle-4-6.jpg"
const wl8 = "https://i.ibb.co/ThdnLSz/Rectangle-5-6.jpg"
const wl9 = "https://i.ibb.co/WxJRc97/Rectangle-10-5.jpg"
const wl11 = "https://i.ibb.co/cCqN36r/Rectangle-9-7.jpg"
const wl12 = "https://i.ibb.co/gMFtVHv/Rectangle-11-5.jpg"
const wl13 = "https://i.ibb.co/zNnbZbh/image-1.jpg"
const wl14 = "https://i.ibb.co/XWhYn6f/image-2.jpg"
const wl15 = "https://i.ibb.co/NtQf9Zv/image-4.jpg"
const wl16 = "https://i.ibb.co/V2tZ8dX/image-3.jpg"
const wl17 = "https://i.ibb.co/Fh79xsM/image-5.jpg"
const wl18 = "https://i.ibb.co/nfR1PHJ/image-8.jpg"
const wl19 = "https://i.ibb.co/G0h64wr/image-6.jpg"
const wl20 = "https://i.ibb.co/DCcn4QS/image-7.jpg"
const wl21 = "https://i.ibb.co/8mbSNVq/image-9.jpg"
const wl22 = "https://i.ibb.co/WzdN4xR/image-10.jpg"
const wl23 = "https://i.ibb.co/27tFPDX/image-11.jpg"


function Whylightning() {
  return (
    <div className="whcontain">
      <div className="wpetals">
        <Link to="/menu">
          <img className="wpetal" src={petal} /*{petal}*/ alt="petals" />
        </Link>
      </div>
      <Heading head="Why do you need a lightning designer?" />
      <div className = 'wlprihead'>Achieving the right lighting levels</div>
      <div className = 'wlsechead'>This is the most important aspect of Lighting Design. The lighting levels (LUX Levels) required at an open office work space vs. a private office vs. a conference
        room requires very different lighting levels. Moreover the Lighting levels required on the flat table surface as compared to that on the wall behind a computer
        also varies from a visual acuity perspective. As lighting designer it is our responsibility that these levels are achieved. The images below are examples of the
        Lighting level study we do on projects.
      </div>

      <div className="wlbox1">
        <div className="wlbox1i">
          <img className="wlbox1im" src={wl1}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="wlbox1t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>

      <div className="wlbox2">
        <div className="wlbox2t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
        <div className="wlbox2i">
          <img className="wlbox2im" src={wl2}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>


      <div className="wlbox3">
        <div className="wlbox3i">
          <img className="wlbox3im" src={wl3}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="wlbox3t">Above : Image of a cubicles section of an office</div>
      </div>

      <div className="wlbox4">
        <div className="wlbox4i">
          <img className="wlbox4im" src={wl4}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="wlbox4t"> You may notice how the area feel generally uniform and well lit. This helps make an
            energetic and efficient environment</div>
      </div>




      <div className = 'wlcombox'>

        <div className="wlbox5">
            <div className="wlbox5i">
            <img className="wlbox5im" src={wl5}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>
            <div className="wlbox5t">Here you may notice there is more lighting on the conference table and the wood paneled
            wall and other walls are dimmer, allowing for AV integration and scene settings. ( More on this later)</div>
        </div>

        <div className="wlbox6">
            <div className="wlbox6i">
            <img className="wlbox6im" src={wl6}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>
            <div className="wlbox6t">Typical conference room</div>
        </div>
      </div>


      <div className = 'wlprihead'>Attention to lighting effects</div>
      <div className = 'wlsechead'>Good lighting is where you don’t notice it, but the space feels right. Following are examples where lighting mistakes are made due lack of attention to it. 
      </div>
      <div className = 'wlsechead1'>The
        page after shows examples of things the must be considered.</div>





        <div className="wlbox4">
        <div className="wlbox4i">
          <img className="wlbox4im" src={wl7}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="wlbox4t"> You may notice how the area feel generally uniform and well lit. This helps make an
            energetic and efficient environment</div>
      </div>


        <div className="wlbox7">
        <div className="wlbox7i">
          <img className="wlbox7im" src={wl8}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="wlbox7t"> All the fascinating textures on the wall and
        flooring are not lit correctly, causing unnecessary
        glare at the ceiling edges and not creating the
        right accents to make the space look as luxurious
        as the material selection intends.</div>
      </div>




      <div className="wlbox1">
        <div className="wlbox1i">
          <img className="wlbox1im" src={wl9}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className="wlbox1t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
      </div>




      <div className="wlbox2">
        <div className="wlbox2t">Down below, the warmer lighting of the ground level welcomes visitors to the grassy area, playground, and benches. This hospitality is a must, as the park attracts over a million people a year: sunbathers, picnickers, and children looking to escape the summer heat. Over the course of the day, the lighting shifts, but it was important to us to make it always inviting.</div>
        <div className="wlbox2i">
          <img className="wlbox2im" src={wl11}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>





      <div className="wlbox8">
        <div className="wlbox8i">
          <img className="wlbox8im" src={wl12}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>
        <div className="wlbox8t">Water is an integral element of the park, both in the surrounding landscape and its architectural fountains. Set apart from the solid materials found elsewhere, the dancing water feature provides dramatic lighting energy with color-changing light. This provides a dynamic, playful experience for those walking by, sitting on nearby benches, or—on summer days—getting wet.</div>

      

        <div className = 'wlprihead'>Attention to lighting effects</div>
      <div className = 'wlsechead'>Following are examples of a few of many lighting considerations to be taken while lighting Working environments. 
      </div>
      <div className = 'wlsechead1'>These can be achieved with careful
        selection of Light fixtures and a curated lighting design effort. </div>
        <div className = 'wlimgmidi'>
            <img className="wlimgmidim" src={wl13}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>




        <div className = 'wlprihead'>Creating the Right Ambiance</div>
      <div className = 'wlsechead'>Nowadays offices are not just spaces wit cubicles and meeting rooms. There are multipurpose rooms, Pantry and Cafe areas, Training rooms, co-working
        areas, retreat or relaxation areas. These Spaces not only have a different lighting level requirement but also different Aesthetic needs. Highlighting the interior
        textures and architectural elements correctly using the right kind of architectural / decorative fixtures help set the ambiance right. More over in a client facing
         organization aesthetics play an important role as they are a representative of companies approach and good lighting can very much enhance this experience 
      </div>







      <div className="wlbox9">
        <div className = 'wlbox9l'>
            <div className = 'wlbox9li'>

                <img className="wlboxl9im" src={wl14}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>
                 <div className = 'wlbox9lt'>An art gallery at Goldman Office</div>
            </div>
        <div className = 'wlbox9m'>
            <div className = 'wlbox9mi'>

                <img className="wlbox9mim" src={wl15}/*{k2}*/ alt="agtop" loading="lazy"/>
                </div>
                <div className = 'wlbox9mt'>An art gallery at Goldman Office</div>
        </div>
        <div className = 'wlbox9r'>
            <div className = 'wlbox9rt'>An pantry designed to feel like a hotel</div>
            <div className = 'wlbox9ri'>

                <img className="wlbox9rim" src={wl16}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>
            </div>
        </div>
      





        <div className = 'wlprihead'>Allowing spatial flexibility</div>
      <div className = 'wlsechead'>Spaces within an office can have multiple
        purposes. A conference can have a board
        meeting / a teleconference / or a team party.
        All three of these tasks require different
        lighting. Or for example, a co-working
        space might want to be turned to an
        evening lounge where office events can take
        place. Good lighting must consider these
        factors and provide lighting and controls
        that can make this change happen at a
        touch of a button.
        This Flexibility can have health benefits
        too. Having tunable white fixture that can
        go from warm white (2700 Kelvin) to Cool
        white (5000 - 6000 Kelvin) when used in
        office space can promote a better circadian
        rhythm (Sleep cycle) among the users.
      </div>



      <div className = 'wlbox10'>
        <div className = 'wlbox10i'>

            <img className="wlbox10im" src={wl17}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>




      <div className = 'wlbox11'>
        <div className = 'wlbox11li'>

            <img className="wlbox11lim" src={wl18}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className = 'wlbox11mi'>

            <img className="wlbox11mim" src={wl19}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
        <div className = 'wlbox11ri'>

            <img className="wlbox11rim" src={wl20}/*{k2}*/ alt="agtop" loading="lazy"/>
        </div>
      </div>






      <div className = 'wlprihead'>Energy efficiency and sustainability</div>
      <div className = 'wlsechead'>In todays day and age with Global warming at a rise and environmental crisis becoming an everyday reality, doing our best to support sustainable and energy
        efficient methodologies has become critical. Lighting constitutes almost 20% of energy use in constructed environments. With the use of right type and quantity
        of fixtures; right lighting controls systems and settings and following guidelines provided by Energy efficiency agencies like LEED or WELL standards can have a
        great impact on energy consumption. This is not only a great social response but also helps save costs.
      </div>





      <div className = 'wlbox12'>
        <div className = 'wlbox12l'>
            
            <div className = 'wlbox12li'>

                <img className="wlbox12lim" src={wl21}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>
            <div className = 'wlbox12lpt'>Using good quality LED
                products</div>
            <div className = 'wlbox12lst'>
            LED technology has certainly helped
            the energy conservation movement
            tremendously. Over and above, using
            good quality fixtures ensure longevity
            of the fixture; efficacy of the lamp and
            dissipates less heat which intern affecting
            the HVAC system’s energy consumption
            </div>
        </div>
        <div className = 'wlbox12m'>
            <div className = 'wlbox12mi'>

                <img className="wlbox12mim" src={wl22}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>

            <div className = 'wlbox12mpt'>Dimming Systems-
                Daylight Harvesting</div>
            <div className = 'wlbox12mst'>
            Having a photo-sensor in spaces with
            daylight penetration which speak
            to dimming systems that dim the
            lighting in daylight areas according
            can have tremendous cut on lighting
                consumptions. Daylight sensors are
            regulatory application in many western
            countries.
            </div>
        </div>
        <div className = 'wlbox12r'>

            <div className = 'wlbox12ri'>

                <img className="wlbox12rim" src={wl23}/*{k2}*/ alt="agtop" loading="lazy"/>
            </div>

            <div className = 'wlbox12rpt'>Dimming Systems -
                Occupancy / Vacancy</div>
            <div className = 'wlbox12rst'>
            Occupancy sensors have the ability to
            sense motion and switches the light on
            and off accordingly. So leaving the lights
            on isn’t a thing. Using these in private
            offices conference rooms restrooms is a
                    very helpful.
            </div>
        </div>
        
      </div>







      <div className = 'wlprihead'>Good        lighting saves cost</div>
      <div className = 'wlsechead'>
        <div className = 'wlsecheads'>With the help of good controls systems and dimmability lighting costs can be reduced
drastically.








</div>
        <div className = 'wlsecheads'>In a project like this we must explore Daylight dimming systems that reduce lighting output
        during the day. A small device in the ceiling can monitor Daylight levels in
        <div className = 'wlsec'>
        the space and dim
        the lights accordingly.
        </div> 
        </div>
        <div className = 'wlsecheads'>Not all Lighting is required to be on all days. Lighting required for special occasion must be
        on only during those times. 
        <div className = 'wlsec'>
        Looping the fixtures correctly can help control the lighting in that
        manner.
        </div>
        </div>
        <div className = 'wlsecheads'>Occupancy sensors that shut the light off when a space is not in use like in Bathrooms and Back
        <div className = 'wlsec'>
        of house areas is a minimal expense that helps save energy costs.
        </div>
        </div>
        <div className = 'wlsecheads'>
        Using good quality fixtures can extend the life of the Lighting of the project by multiple years
        <div className = 'wlsec'>
        reducing the maintenance cost drastically.
        </div>
        </div>
        <div className = 'wlsecheads'>These system may increase the cost of project by a few percent, but the savings on energy and maintenance would cover that cost in a year or two and would 
        <div className = 'wlsec'>
        eventually cost you lesser over a
        period of time than not using these systems.
        </div>
        </div>
      </div>


      <Scroll />
      <Bottom />
    </div>
  )
}

export default Whylightning