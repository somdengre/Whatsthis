import React from 'react'
// import player from '../assets/basics/player.svg'
import './player.css';

const player = "https://i.ibb.co/Cb1QyBK/player.jpg"
function Player() {
  return (
    <div className = 'player'>
        <img className="plimage" src= {player} /*{player}*/ alt="player" />
    </div>
  )
}

export default Player