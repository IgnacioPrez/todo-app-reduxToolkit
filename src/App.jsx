import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './routes/pages.routes'
import { Home, UpdateTodo } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route path={`${PublicRoutes.UPDATE}/:id`} element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
