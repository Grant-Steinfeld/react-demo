import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function PokeGallery(props) {
    const [pokemon, setPokemon] = useState(null);
    
    const handleGetData = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon';
        const response = await axios.get(url);
        setPokemon(response.data.results);
    }

    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <section className="Container">
            <h2>PokeGallery</h2>
            <Link to="/">Back to Counter</Link>
            <ul>
             {pokemon && pokemon.map(pokemon => (
                <li key={pokemon.name}>{pokemon.name}</li>
             ))}
            </ul>
        </section>
    )
}

export default PokeGallery;