import { useEffect, useState } from 'react'
import './styles/App.css'
import BGM from './assets/music/littleroot-town.mp3'
import useFetchPokemon from './fetchPokemon'
import Score from './components/Score'
import Card from './components/Card'
import GameOver from './components/GameOver'
import LoadingScreen from './components/LoadingScreen'
import BackgroundMusic from './components/BackgroundMusic'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  const handleCardClick = (id) => {
    if (gameOver) {
      return;
    }

    let newSelectedCards;

    if (selectedCards.includes(id)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }

      setGameOver(true);
      newSelectedCards = [];
    } else {
      setCurrentScore(currentScore + 1);
      newSelectedCards = [...selectedCards, id];
    }

    if (newSelectedCards.length === pokemonData.length) {
      setBestScore(10);
      newSelectedCards = [];
      setGameOver(true);
    }

    setSelectedCards(newSelectedCards);
  };

  const handlePlayAgain = () => {
    setGameOver(false);
    setCurrentScore(0);
  };

  const pokemonData = useFetchPokemon(handlePlayAgain);

  return (
    <div className='app'>
      {pokemonData.length === 0 ? (
        <LoadingScreen />
      ) : (
        <>
          <BackgroundMusic src={BGM}/>
          {gameOver && (
            <GameOver
              currentScore={currentScore}
              result={currentScore === 10 ? 'win' : 'lose'}
              onPlayAgain={handlePlayAgain}
              gameOver={gameOver}
            />
          )}
          <Score currentScore={currentScore} bestScore={bestScore} />
          <Card pokemons={pokemonData} onCardClick={handleCardClick} />
        </>
      )}
    </div>
  );
}

export default App
