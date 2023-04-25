import { baseURL } from '../services/api.service'

export const getPokemon = async (search) => {
  const data = await fetch(`${baseURL}pokemon/${search}`)
  const res = await data.json()
  return res
}
