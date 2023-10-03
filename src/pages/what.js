import React from "react";
import { Link } from "react-router-dom";
// import petal from "../assets/Petals.svg";
// import h1 from "../assets/home/h1.svg";
// import h2 from "../assets/home/h2.svg";
// import h3 from "../assets/home/h3.svg";
// import h4 from "../assets/home/h4.svg";
// import h5 from "../assets/home/h5.svg";
// import h6 from "../assets/home/h6.svg";
import "./what.css";
import Bottom from "../components/bottom";

const petal = "https://i.ibb.co/Nt3LkWD/Petals.jpg"
const h1 = "https://i.ibb.co/9ccy6fY/h1.jpg"
const h2 = "https://i.ibb.co/pyXWQ9F/Elephent.jpg"
const h3 = "https://i.ibb.co/r2NZgpT/Kolte-Patil.jpg"
const h4 = "https://i.ibb.co/cXFxFMY/Plot-45.jpg"
const h5 = "https://i.ibb.co/17LWyQt/Global.jpg"
const h6 = "https://i.ibb.co/17LWyQt/Global.jpg"


function What() {
  return (
    <div className="hcontain">
      <div className="hpet">
          <Link to="/menu">
              <img className="epetal" src={petal} /*{petal}*/ alt="petals" />
          </Link> 
      </div>
      <div className="htext">What we do?</div>
      <div className="himgs">
        <div className="himgc">
          <Link to="/edision">
            <img className="himage" src={h1} /*{h1}*/ alt="Edision house" />
          </Link>
        </div>
        <div className="himgc">
          <Link to="/elephant">
            <img className="himage" src={h2} /*{h2}*/ alt="Elephent" />
          </Link>
        </div>
        <div className="himgc">
          <Link to="/kolte">
            <img className="himage" src={h3} /*{h3}*/ alt="Edision house" />
          </Link>
        </div>
        <div className="himgc">
          <Link to="/jammu">
            <img className="himage" src={h4} /*{h4}*/ alt="Edision house" />
          </Link>
        </div>
        <div className="himgc">
          <Link to="/aerospace">
            <img className="himage" src={h5} /*{h5}*/ alt="Edision house" />
          </Link>
        </div>
        <div className="himgc">
          <Link to="/lily">
            <img className="himage" src={h6} /*{h6}*/ alt="Edision house" />
          </Link>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default What;
