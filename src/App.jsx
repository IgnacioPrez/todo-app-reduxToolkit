import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './routes/pages.routes'
import { Home, PokemonPage, Todo, UpdateTodo } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={PublicRoutes.TODO} element={<Todo />} />
        <Route path={`${PublicRoutes.UPDATE}/:id`} element={<UpdateTodo />} />
        <Route path={`${PublicRoutes.POKEPAGE}`} element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
