import { useCallback, useEffect, useState } from 'react'
import { Button } from 'react-native'
import { magic as m } from '@/components/magic'
import { Magic } from 'magic-sdk'
import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

const magic = m as Magic

const Home: NextPage = () => {
  const [email, setEmail] = useState('chris@arcade.city')
  const [userMetadata, setUserMetadata] = useState<any>(null)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useEffect(() => {
    if (!magic) return
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(setUserMetadata)
      } else {
        setUserMetadata(false)
      }
    })
  }, [magic])

  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const login = useCallback(async () => {
    setIsLoggingIn(true)

    try {
      await magic.auth.loginWithMagicLink({
        email,
      })
      const user = await magic.user.getMetadata()
      setUserMetadata(user)
    } catch {
      setIsLoggingIn(false)
    }
  }, [email])

  console.log(userMetadata)

  return (
    <div className='container2'>
      <Navbar />
      <main className='main'>
        OnlySats
        <Button onPress={login} title='Login' />
      </main>
    </div>
  )
}

export default Home
