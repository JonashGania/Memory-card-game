import React from 'react'
import '../styles/gameOver.css'

export default function GameOver( {currentScore, result, onPlayAgain, gameOver} ) {
  return (
    <div className={`overlay ${gameOver ? 'open' : ''}`}>
      <div className={`modal ${gameOver ? 'open' : ''}`}>
        <img 
          src="/pokeball.png" 
          alt="pokeball" 
          className='pokeball-animation'
        />
        <h2>{result === "win" ? "You Win!" : "Game Over!"}</h2>
        <p className='final-score'>Your Final Score is <b>{currentScore}</b></p>
        <button 
          onClick={onPlayAgain}
          className='play-again'
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
