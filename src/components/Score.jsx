import React from 'react'
import '../styles/score.css'

export default function Score( {currentScore, bestScore} ) {
  return (
    <div className='score-container'>
      <div className="game-title">
        <img 
          src="/pokeball.png" 
          alt="pokeball"
        />
        <h2 className='game-name'>Poke<span>Cards</span></h2>
      </div>
      <div className="score-board">
        <p className='currentScore'>
          Score: <b>{currentScore}</b>
        </p>
        <p>/</p>
        <p>
          High Score: <b>{bestScore}</b>
        </p>
      </div>
    </div>
  )
}
