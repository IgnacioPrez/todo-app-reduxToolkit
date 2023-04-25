import { Button, TextField } from '@mui/material'
import React from 'react'

const SearchPokemon = ({ handlePokemonSubmit }) => {
  return (
    <form className='form-pokemon' onSubmit={handlePokemonSubmit}>
      <TextField color='warning' label='Add your todo' variant='standard' name='searchPokemon' />
      <Button variant='contained' color='warning' type='submit'>
        Search
      </Button>
    </form>
  )
}

export default SearchPokemon
