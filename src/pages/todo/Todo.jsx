import { AddToTask, HeaderComponent, Tasks } from '../../components'
import './home.css'
const Todo = () => {
  return (
    <main className='container-home'>
      <HeaderComponent />
      <AddToTask />
      <Tasks />
    </main>
  )
}

export default Todo
