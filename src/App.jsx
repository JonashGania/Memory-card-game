import { useState } from 'react'
import './styles/App.css'
import FetchPokemon from './fetchPokemon'
import Score from './components/Score'

function App() {

  return (
    <div className='app'>
      <Score />
      <FetchPokemon />
    </div>
  )
}

export default App
