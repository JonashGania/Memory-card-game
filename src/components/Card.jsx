import { useEffect, useState } from 'react'
import '../styles/card.css'

export default function Card({ pokemons }){

    const [cards, setCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        setCards([...pokemons])
    }, [pokemons])

    const shuffleCards = () => {
        const shuffled = [...cards];
        for(let i = shuffled.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setCards(shuffled);
    }

    const handleCardClick = () => {
        if(!isFlipping){
            setIsFlipped(true)
            setIsFlipping(true)

            setTimeout(() => {
                setIsFlipped(false);
                setIsFlipping(false);
                shuffleCards();
            }, 1000);
        }
    }

    return (
        <div className="card-wrapper">
            <ul>
                {cards.map((card, index) => (
                    <li key={index} >
                        <div className={isFlipped ? 'card-container flipped': 'card-container'}  onClick={handleCardClick}>
                            <div className="front">
                                <img 
                                    src={card.image} 
                                    alt="pokemon image" 
                                    className="card-image"
                                />
                                <h3 className="pokemon-name">{card.name}</h3>
                            </div>
                            <div className="back">

                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
