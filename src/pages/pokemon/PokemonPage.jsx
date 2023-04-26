import { useEffect, useState } from 'react'
import { CardPokemon, Navbar, SearchPokemon } from '../../components'
import './pokemon.css'
import { getPokemon } from '../../utilities/functionForApi'
import { Toaster, toast } from 'react-hot-toast'

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search === '') return
    const fetchPokemon = async () => {
      try {
        const pokemon = await getPokemon(search)
        setPokemon(pokemon)
      } catch (e) {
        console.error(e)
      }
    }
    fetchPokemon()
  }, [search])
  const handlePokemonSubmit = (e) => {
    e.preventDefault()
    const { searchPokemon } = Object.fromEntries(new window.FormData(e.target))
    if (search === '') {
      toast.error('No such Pokemon exists🤡')
      return
    }
    setSearch(searchPokemon.toLocaleLowerCase())
  }

  return (
    <main className='container-pokemon'>
      <h1>Find your Pokemon!!</h1>
      <Navbar />
      <SearchPokemon handlePokemonSubmit={handlePokemonSubmit} />
      <CardPokemon {...pokemon} />
      <Toaster position='bottom-center' reverseOrder={false} />
    </main>
  )
}

export default PokemonPage
