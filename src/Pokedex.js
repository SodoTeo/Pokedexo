import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ActionCard from './ActionCard.js';

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
    { id: 4, name: 'Pikachu', type: 'Electric', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png' },
    { id: 5, name: 'Ninetales', type: 'Fire', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png' },
    { id: 6, name: 'Mismagius', type: 'Ghost', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/429.png' },
    { id: 7, name: 'Leafeon', type: 'Grass', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/470.png' },
    { id: 8, name: 'Pikachu', type: 'Electric', img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png' }
  ]);

  return (
    <div className="Pokedex">
      <h2>Pokedex</h2>
      <React.Fragment>
        <CssBaseline />
          <Container sx={{ width: 1}}>
            <Box sx={{ width: 1}}>
              <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {pokemons.map((pokemon) =>
                  <Grid item xs={6}>
                    <Item >
                      <div key={`${pokemon.id}-${pokemon.name}`}>
                        <ActionCard 
                          img = {pokemon.img}
                          name = {pokemon.name}
                          type = {pokemon.type} />
                      </div>
                    </Item>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
      </React.Fragment>
    </div>
  )
}

export default PokedexApi;