import React,{ useEffect, useState } from 'react';
import Card from './components/Card';

export default function FetchPokemon() {
    const [pokemonNames, setPokemonNames] = useState([]);

    const getRandomPokemonId = () => {
        return Math.floor(Math.random() * 898) * 1;
    }

    const fetchPokemon = async(id) => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if(!response.ok){
            throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            const name = data.name;
            const image = data.sprites.front_default;
            return { name, image };
        } catch (error) {
            console.error('Error fetching Pokémon:', error.message);
        }
    }

    const getRandomPokemons = async () => {
        const randomPokemonNames = [];
        for(let i = 0; i < 10; i++){
        const randomId = getRandomPokemonId();
        const pokemonName = await fetchPokemon(randomId);
        randomPokemonNames.push(pokemonName);
        }

        setPokemonNames(randomPokemonNames);
    }

    useEffect(() => {
        getRandomPokemons();
    }, []);
  

    return (
        <div>
            <Card pokemons={pokemonNames} />
        </div>
    )
}
