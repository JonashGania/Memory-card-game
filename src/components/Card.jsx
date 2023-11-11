import '../styles/card.css'

export default function Card({ pokemons }){

    return (
        <div>
            <div className="card-wrapper">
                <ul>
                    {pokemons.map((card, index) => (
                        <li key={index}>
                            <div className="card-container">
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
        </div>
    )
}
