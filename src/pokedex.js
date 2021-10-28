import React, { useState } from 'react';
import ActionAreaCard from './card.js';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PokedexApi = () => {
  const [pokemons] = useState([
    { id: 1, name: 'Ninetales', type: 'Fire', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png' },
    { id: 2, name: 'Mismagius', type: 'Ghost', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png' },
    { id: 3, name: 'Leafeon', type: 'Grass', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png' },
    { id: 4, name: 'Pikachu', type: 'Electric', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png' }
  ]);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>
      
      <Box sx={{ maxWidth: 700 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {pokemons.map((pokemon) =>
            <Grid item xs={6}>
              <Item>
                <div key={`${pokemon.id}-${pokemon.name}`}>
                  <ActionAreaCard 
                    img = {pokemon.img}
                    name = {pokemon.name}
                    type = {pokemon.type} />
                </div>
              </Item>
            </Grid>
          )}
         </Grid>
      </Box>
    </div>
  )
}

export default PokedexApi;