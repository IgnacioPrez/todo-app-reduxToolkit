import { useState } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import HomeIcon from '@mui/icons-material/Home'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/pages.routes'
const Navbar = () => {
  const [value, setValue] = useState(window.localStorage.getItem('route') || '/')
  const navigate = useNavigate()
  const saveToLocalStorageRoutes = (route) => {
    window.localStorage.setItem('route', route)
    setValue(route)
  }
  return (
    <nav>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          saveToLocalStorageRoutes(newValue)
        }}
        sx={{ background: 'transparent' }}
      >
        <BottomNavigationAction
          label='Home'
          value='/'
          icon={<HomeIcon />}
          onClick={() => {
            setTimeout(navigate(PublicRoutes.HOME), 1500)
          }}
        />
        <BottomNavigationAction
          value='todo'
          label='Todo'
          icon={<AssignmentIcon />}
          onClick={() => {
            setTimeout(navigate(PublicRoutes.TODO), 1500)
          }}
        />
        <BottomNavigationAction
          label='Pokemon'
          value='pokemon'
          icon={<CatchingPokemonIcon />}
          onClick={() => {
            setTimeout(navigate(PublicRoutes.POKEPAGE), 1500)
          }}
        />
      </BottomNavigation>
    </nav>
  )
}

export default Navbar
