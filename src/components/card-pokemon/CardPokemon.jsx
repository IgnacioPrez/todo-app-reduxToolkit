import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import whosThatPokemon from '../../assets/whos_that_pokemon_by_desenhosdoreu-d9n0y7l.webp'

const CardPokemon = ({ name, sprites, types }) => {
  return (
    <Card sx={{ width: 'auto', margin: '3em 0', height: '25em' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='290'
          alt='green iguana'
          image={`${sprites ? sprites.other.home.front_default : whosThatPokemon}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Name: {name ? name.toUpperCase() : ''}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Type: {types ? types[0].type.name : '???'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardPokemon
