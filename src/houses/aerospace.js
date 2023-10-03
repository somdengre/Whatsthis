import React from 'react'
import './aerospace.css'
import Petals from '../components/petals'
import Player from '../components/player'
import Scroll from '../components/scroll'
import Bottom from '../components/bottom'


const top3 = "https://i.ibb.co/Zckm5hB/Rectangle-1-2.jpg"
const ag1 = "https://i.ibb.co/4Vm5Qyq/Rectangle-3-2.jpg"
const ag2 = "https://i.ibb.co/TBK8LGG/Rectangle-4-2.jpg"
const ag3 = "https://images2.imgbox.com/b5/bb/3AR7PHvn_o.jpg"
const ag4 = "https://i.ibb.co/Mk4RVH8/Rectangle-9-2.jpg"
const ag5 = "https://i.ibb.co/5KvJL9P/Rectangle-10-2.jpg"
const ag6 = "https://i.ibb.co/Vj39RN4/Rectangle-11-2.jpg"
const ag7 = "https://i.ibb.co/X2wbGQ9/Rectangle-12.jpg"
const ag8 = "https://i.ibb.co/CJr5TNT/Rectangle-13.jpg"
const ag9 = "https://i.ibb.co/C8msQ0h/Rectangle-14.jpg"
const ag10 = "https://i.ibb.co/VHjSp6c/Rectangle-15.jpg"
const ag11 = "https://i.ibb.co/J5vdr25/Rectangle-16.jpg"
const ag12 = "https://i.ibb.co/NWShMSz/Rectangle-17.jpg"


function Aerospace() {
  return (
    <div className= 'econtain'>
        <div className = 'etop'>
            <img className="etopi" src={top3} /*{top3}*/ alt="agtop" />
        </div>
        <Petals />
        <div className ='aghead'>GLOBAL AEROSPACE</div>
        <div className = 'aggrid'>
            <div className = 'aggrid_e'>
                <img className="agi" src={ag1} /*{ag1}*/ alt="agtop" />
                <img className="agi" src={ag2} /*{ag2}*/ alt="agtop" />
                <img className="agi" src={ag3} /*{ag3}*/ alt="agtop" />
            </div>
            <div className = 'aggrid_e'>
                <img className="agi" src={ag4} /*{ag4}*/ alt="agtop" />
                <img className="agi" src={ag5} /*{ag5}*/ alt="agtop" />
                <img className="agi" src={ag6} /*{ag6}*/ alt="agtop" />
            </div>
            <div className = 'aggrid_e'>
                <img className="agi" src={ag7} /*{ag7}*/ alt="agtop" />
                <img className="agi" src={ag8} /*{ag8}*/ alt="agtop" />
                <img className="agi" src={ag9} /*{ag9}*/ alt="agtop" />
            </div>
            <div className = 'aggrid_e'>
                <img className="agi" src={ag10} /*{ag10}*/ alt="agtop" />
                <img className="agi" src={ag11} /*{ag11}*/ alt="agtop" />
                <img className="agi" src={ag12}/*{ag12}*/ alt="agtop" />
            </div>
        </div>
        <Player/>
        <Scroll/>
        <Bottom/>
    </div>
  )
}

export default Aerospace