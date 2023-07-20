import React from 'react'
import player from '../assets/basics/player.svg'
import './player.css';

function Player() {
  return (
    <div className = 'player'>
        <img className="plimage" src={player} alt="player" />
    </div>
  )
}

export default Player