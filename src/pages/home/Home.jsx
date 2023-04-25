import './home.css'
import astronaut from '../../assets/header-img.svg'
import { Navbar } from '../../components'
const Home = () => {
  return (
    <main className='index'>
      <h1>Comienza la aventura</h1>
      <Navbar />
      <div
        class='container-astro'
      >
        <img className='floating ' src={astronaut} alt='hero-astronaut' />
      </div>
    </main>

  )
}

export default Home
