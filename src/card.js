import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Pokedex from './pokedex.js';

const ActionAreaCard = () =>  {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="urlimage"
          alt="pokemonsName"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pokemon's Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pokemon's Type
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;