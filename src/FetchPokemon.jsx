import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function useFetchPokemon(callback) {
  const [pokemons, setPokemons] = useState([]);

  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 898) + 1;
  };

  const fetchPokemon = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      const name = response.data.name;
      const image = response.data.sprites.front_default;
      return { id, name, image };
    } catch (error) {
      console.error('Error fetching Pokémon:', error.message);
    }
  };

  const getRandomPokemons = async () => {
    const randomPokemonNames = [];
    for (let i = 0; i < 10; i++) {
      const randomId = getRandomPokemonId();
      const pokemonName = await fetchPokemon(randomId);
      randomPokemonNames.push(pokemonName);
    }

    setPokemons(randomPokemonNames);
    
    if(callback){
      callback();
    }
  };

  useEffect(() => {
    getRandomPokemons();
  }, []);

  return pokemons
}

useFetchPokemon.propTypes = {
  callback: PropTypes.func.isRequired,
}