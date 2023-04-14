import { AddToTask, HeaderComponent, Tasks } from '../../components'
import './home.css'
const Home = () => {
  return (
    <main className='container-home'>
      <HeaderComponent />
      <AddToTask />
      <Tasks />
    </main>
  )
}

export default Home
