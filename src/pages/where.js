import React from 'react'
// import petal from '../assets/Petals.svg'
import './where.css';
import Bottom from '../components/bottom';
// import insta from '../assets/where/insta.svg'
// import lin from '../assets/where/lin.svg'
// import pin from '../assets/where/pin.svg'

const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
const insta = "https://i.ibb.co/CKR6X1Z/insta.jpg"
const lin = "https://i.ibb.co/Q6Mz18h/lin.jpg"
const pin = "https://i.ibb.co/MSv1Zxm/pin.jpg"



function Where() {
  return (
    <div className = 'wherecontain'>
      <div className = 'whepetals'><img className="hpetal" src={petal} /*{petal}*/ alt="petals" /> </div>
      <div className='whtext'>What we do?</div>
      <div className = 'whecontent'>
          <div className = 'whelogos'>
                <img className="whepetal" src={insta} /*{insta}*/ alt="petals" />
                <img className="whepetal" src={lin} /*{lin}*/ alt="petals" />
                <img className="whepetal" src= {pin}/* {pin}*/ alt="petals" />
          </div>
          <div className = 'wheinput'>
              <input placeholder='email address'></input>
              <button className = 'btn'>
              Get Quote
            </button>
          </div>

          {/* <div className = 'whebtn'>
          </div> */}

          <div className = 'whetext'>
            <div>
              #28, Sector 12, Electronic City, Pase-1,Bangalore, <br/>

            </div>
            <div>
              Karnataka, INDIA-560100

            </div>
            <div>
              support@whatsthisstudios.com

            </div>
           </div>

          <Bottom/>
      </div>
    </div>
  )
}

export default Where