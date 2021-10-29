import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';

const ActionCard = ({pokemon}) =>  {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={pokemon.sprites['front_default']}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {pokemon.weight} kg
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ActionCard;