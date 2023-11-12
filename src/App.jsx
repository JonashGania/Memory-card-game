import { useEffect, useState } from 'react'
import './styles/App.css'
import useFetchPokemon from './fetchPokemon'
import Score from './components/Score'
import Card from './components/Card'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const pokemonData = useFetchPokemon();


  const handleCardClick = (id) => {
    let newSelectedCards;

    if(selectedCards.includes(id)){
      if(currentScore > bestScore){
        setBestScore(currentScore);
      }

      setCurrentScore(0);
      newSelectedCards = [];

    } else {
      setCurrentScore(currentScore + 1);
      newSelectedCards = [...selectedCards, id];
    }

    if(newSelectedCards.length === pokemonData.length){
      setCurrentScore(0);
      setBestScore(10);
      newSelectedCards = [];
    }

    setSelectedCards(newSelectedCards);
  }


  return (
    <div className='app'>
      <Score currentScore={currentScore} bestScore={bestScore}/>
      <Card pokemons={pokemonData} onCardClick={handleCardClick}/>
    </div>
  )
}

export default App
