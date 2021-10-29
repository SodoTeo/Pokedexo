import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';

const ActionCard = ({img, name, type}) =>  {
  return (
    <Card sx={{ maxWidth: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionCard;