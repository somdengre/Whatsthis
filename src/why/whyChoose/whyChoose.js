import React from "react";
import Heading from '../../components/heading'
import './whyChoose.css'
import { Link } from 'react-router-dom'
import MiddleImage from '../../components/middleImage'
import Scroll from '../../components/scroll'
import Bottom from '../../components/bottom'


const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
const wc1 = "https://i.ibb.co/s5VHTmh/Rectangle-31.jpg"
const wc2 = "https://i.ibb.co/VQ31wnt/Group-21.jpg"
const wc3 = "https://i.ibb.co/G3cnr09/Rectangle-33.jpg"
const wc4 = "https://i.ibb.co/HNjfVVy/Group-22.jpg"
const wc5 = "https://i.ibb.co/4SxZHwr/Rectangle-35.jpg"
const wc6 = "https://i.ibb.co/tX1Wyhv/Group-23-1.jpg"
const wc7 = "https://i.ibb.co/jr39FTp/Rectangle-37.jpg"
const wc8 = "https://i.ibb.co/pWmPrnb/Group-24.jpg"
const wc9 = "https://i.ibb.co/MM4b4CH/Rectangle-39.jpg"
const wc10 = "https://i.ibb.co/0ZNRKmx/Group-25.jpg"
const wc11 = "https://i.ibb.co/q18vgxk/Rectangle-41.jpg"
const wc12 = "https://i.ibb.co/GsV0Yff/Group-26.jpg"
function Whychoose() {
  return (
    <div className="whcontain">
      <div className="wpetals">
        <Link to="/menu">
          <img className="wpetal" src={petal} /*{petal}*/ alt="petals" />
        </Link>
      </div>
      <Heading head="Why choose us?" />
      <div className = 'whcard'>
        <div className = 'whcardl'>
            <div className = 'whcard_pritext'>
                “We manage too many people to contantly be searching for stuff
            </div>
            <div className = 'whcard_sectext'>
                <div className = 'vline'></div>
                <div className = 'whsec_text'>The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.</div>
            </div>
            <div className = 'whcard_name'>
                Name Here, CEO-XYZ
            </div>
        </div>
        <div className = 'whcardr'>
            <img className="whcardri" src={wc1} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>
      </div>

        <div className = 'whmidi'>
            <img className="whmidimg" src={wc2} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>





        <div className = 'whcard'>
        <div className = 'whcardr'>
            <img className="whcardri" src={wc3} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>
        <div className = 'whcardl'>
            <div className = 'whcard_pritext'>
                “We manage too many people to contantly be searching for stuff
            </div>
            <div className = 'whcard_sectext'>
                <div className = 'vline'></div>
                <div className = 'whsec_text'>The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.</div>
            </div>
            <div className = 'whcard_name'>
                Name Here, CEO-XYZ
            </div>
        </div>
        
        </div>
        <div className = 'whmidi'>
            <img className="whmidimg" src={wc4} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>




        <div className = 'whcard'>
        <div className = 'whcardl'>
            <div className = 'whcard_pritext'>
                “We manage too many people to contantly be searching for stuff
            </div>
            <div className = 'whcard_sectext'>
                <div className = 'vline'></div>
                <div className = 'whsec_text'>The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.</div>
            </div>
            <div className = 'whcard_name'>
                Name Here, CEO-XYZ
            </div>
        </div>
        <div className = 'whcardr'>
            <img className="whcardri" src={wc5} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>
      </div>

        <div className = 'whmidi'>
            <img className="whmidimg" src={wc6} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>




        <div className = 'whcard'>
        <div className = 'whcardr'>
            <img className="whcardri" src={wc7} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>
        <div className = 'whcardl'>
            <div className = 'whcard_pritext'>
                “We manage too many people to contantly be searching for stuff
            </div>
            <div className = 'whcard_sectext'>
                <div className = 'vline'></div>
                <div className = 'whsec_text'>The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.</div>
            </div>
            <div className = 'whcard_name'>
                Name Here, CEO-XYZ
            </div>
        </div>
        
        </div>
        <div className = 'whmidi'>
            <img className="whmidimg" src={wc8} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>





        <div className = 'whcard'>
        <div className = 'whcardl'>
            <div className = 'whcard_pritext'>
                “We manage too many people to contantly be searching for stuff
            </div>
            <div className = 'whcard_sectext'>
                <div className = 'vline'></div>
                <div className = 'whsec_text'>The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.</div>
            </div>
            <div className = 'whcard_name'>
                Name Here, CEO-XYZ
            </div>
        </div>
        <div className = 'whcardr'>
            <img className="whcardri" src={wc9} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>
      </div>

        <div className = 'whmidi'>
            <img className="whmidimg" src={wc10} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>




        <div className = 'whcard'>
        <div className = 'whcardr'>
            <img className="whcardri" src={wc11} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>
        <div className = 'whcardl'>
            <div className = 'whcard_pritext'>
                “We manage too many people to contantly be searching for stuff
            </div>
            <div className = 'whcard_sectext'>
                <div className = 'vline'></div>
                <div className = 'whsec_text'>The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.</div>
            </div>
            <div className = 'whcard_name'>
                Name Here, CEO-XYZ
            </div>
        </div>
        
        </div>
        <div className = 'whmidi'>
            <img className="whmidimg" src={wc12} /*{petal}*/ alt="why choose us" loading="lazy" />
        </div>

      <Scroll />
      <Bottom />
    </div>
  );
}

export default Whychoose;
