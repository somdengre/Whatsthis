import React from 'react'
import './who.css'
// import petal from '../assets/Petals.svg'
import Bottom from '../components/bottom'
import { Link } from "react-router-dom";

const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
function Who() {
  return (
    <div className = 'whocontain'>
        <div className='hpet'>
        <Link to="/menu">
              <img className="epetal" src={petal} /*{petal}*/ alt="petals" />
          </Link> </div>
        <div className='whtext'>What we do?</div>
        <div className = 'whotxt'>
            <div className = 'sectext'>
                We are a Architectural Lighting design studio. We help Architects, Interior Designers, Builders, 
                Housewives & anyone else making a space, light it up well!
            </div>
            <div className = 'pritext'>
                    At its heart, Whatsthis Studios is an endeavor that takes the process of questioning with great sincerity. With every new venture, 
                    we aim to un-learn our preconceived perception and look at a space or an object with a childlike curiosity and old aged patience. 
                    Being able to truly ask Whatthis? is an attempt to remove any attached meaning or definitions and reimagine boundaries, edges and 
                    volumes. Light has the ability to instill meaning into spaces that begin in darkness; through the use of light, we wish to create 
                    meaning as we go as opposed to accepting the meaning that exists in the object.As architectural lighting designers, our role is to 
                    leverage light as a medium through which architectural intentions can be heightened and spaces transformed. With light as our tool, 
                    we reveal the aesthetic qualities of a space and accentuate the experience of an environment, creating a bespoke ambiance.Energy 
                    conservation and environmental sustainability at the core of our design belief and we encourage and help our clients achieve their 
                    sustainability goals. We have experience working with LEED/WELL standard consultants to achieve these goals using energy efficient 
                    lighting and lighting control systems.
                    </div>
            <div className = 'pritext'>
                    At its heart, Whatsthis Studios is an endeavor that takes the process of questioning with great sincerity. With every new venture, 
                    we aim to un-learn our preconceived perception and look at a space or an object with a childlike curiosity and old aged patience. 
                    Being able to truly ask Whatthis? is an attempt to remove any attached meaning or definitions and reimagine boundaries, edges and volumes. 
                    Light has the ability to instill meaning into spaces that begin in darkness; through the use of light, we wish to create meaning as we go as 
                    opposed to accepting the meaning that exists in the object.
                    As architectural lighting designers, our role is to leverage light as a medium through which architectural intentions can be heightened and 
                    spaces transformed. With light as our tool, we reveal the aesthetic qualities of a space and accentuate the experience of an environment, 
                    creating a bespoke ambiance.
                    </div>
            <div className = 'pritext'>
                    Energy conservation and environmental sustainability at the core of our design belief and we encourage and help our clients achieve their 
                    sustainability goals. We have experience working with LEED/WELL standard consultants to achieve these goals using energy efficient lighting 
                    and lighting control systems.
                    At its heart, Whatsthis Studios is an endeavor that takes the process of questioning with great sincerity. With every new venture, we aim to 
                    un-learn our preconceived perception and look at a space or an object with a childlike curiosity and old aged patience. Being able to truly ask 
                    Whatthis? is an attempt to remove any attached meaning or definitions and reimagine boundaries, edges and volumes. Light has the ability to 
                    instill meaning into spaces that begin in darkness; through the use of light, we wish to create meaning as we go as opposed to accepting the 
                    meaning that exists in the object.

                    As architectural lighting designers, our role is to leverage light as a medium through which architectural intentions can be heightened and 
                    spaces transformed. With light as our tool, we reveal the aesthetic qualities of a space and accentuate the experience of an environment, 
                    creating a bespoke ambiance.

                    Energy conservation and environmental sustainability at the core of our design belief and we encourage and help our clients achieve their 
                    sustainability goals. We have experience working with LEED/WELL standard consultants to achieve these goals using energy efficient lighting and 
                    lighting control systems.
                    </div>
            
            
        </div>
        <Bottom/>
    </div>
  )
}

export default Who