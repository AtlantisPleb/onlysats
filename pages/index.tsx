import { useState } from 'react'
import { Button } from 'react-native'
import type { NextPage } from 'next'
import { useStore } from '@/helpers/store'
import { Splash } from '@/components/Splash'

const Home: NextPage = () => {
  const store = useStore()
  const [email, setEmail] = useState('chris@arcade.city')
  // const [isLoggingIn, setIsLoggingIn] = useState(false)

  return <Splash />

  return store.magicUser?.email ? (
    <Authed />
  ) : (
    <div className='container2'>
      <main className='main'>
        OnlySats
        <Button onPress={() => store.actions.login(email)} title='Login' />
      </main>
    </div>
  )
}

export default Home
