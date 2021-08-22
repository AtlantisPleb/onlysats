import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='container2'>
      <Navbar />
      <main className='main'>OnlySats</main>
    </div>
  )
}

export default Home
