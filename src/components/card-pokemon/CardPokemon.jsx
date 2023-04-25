import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import whosThatPokemon from '../../assets/whos_that_pokemon_by_desenhosdoreu-d9n0y7l.webp'

const CardPokemon = ({ name, sprites, types, moves }) => {
  return (
    <Card sx={{ width: 'auto', margin: '3em 0', height: '25em' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='250'
          alt='green iguana'
          image={`${sprites ? sprites.other.home.front_default : whosThatPokemon}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Nombre: {name ? name.toUpperCase() : ''}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary'>
            Tipo: {types ? types[0].type.name : '???'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardPokemon
