import React, { useState } from 'react';

import ActionAreaCard from './card.js';

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
          <ActionAreaCard 
            img = {pokemon.img}
            name = {pokemon.name}
            type = {pokemon.type} />
        </div>)}
    </div>
  )
}

export default PokedexApi;