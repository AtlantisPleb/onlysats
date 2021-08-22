import { magic } from '@/components/magic'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  useEffect(() => {
    console.log(magic)
  }, [])
  return (
    <div className='container2'>
      <Navbar />
      <main className='main'>OnlySats</main>
    </div>
  )
}

export default Home
