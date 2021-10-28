import React, { useState } from 'react';

const PokedexApi = () => {
  const [pokemons] = useState([
    { id: 1, name: 'Ninetales', type: 'Fire', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png' },
    { id: 2, name: 'Mismagius', type: 'Ghost', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png' },
    { id: 3, name: 'Leafeon', type: 'Grass', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png' }
  ]);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>
      
      {pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>Order: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>Type: {pokemon.type}</p>
          <img src={pokemon.img} alt={pokemon.name}/>
        </div>)}
    </div>
  )
}

export default PokedexApi;