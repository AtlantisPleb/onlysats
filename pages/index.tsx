import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from 'react-native'
import type { NextPage } from 'next'
import { Magic } from 'magic-sdk'
import { magic as m, provider as p } from '@/helpers/magic'
import { useStore } from '@/helpers/store'
import { ethers } from 'ethers'
import { Authed } from '@/components/Authed'
import { Navbar } from '@/components/Navbar'
import { Ceramic } from '@/helpers/ceramic'
import { Wallet } from '@/helpers/wallet'

const magic = m as Magic
const provider = p as any
const ceramic = new Ceramic()
// const wallet = new Wallet()

const Home: NextPage = () => {
  const store = useStore()
  const [email, setEmail] = useState('chris@arcade.city')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const wallet = useStore((s) => s.wallet)
  console.log('WALLET:', wallet)

  // Check if logged in
  useEffect(() => {
    if (!magic) return
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then(store.setMagicUser)
      } else {
        store.setMagicUser(null)
      }
    })
  }, [magic])

  // Log in
  const login = useCallback(async () => {
    setIsLoggingIn(true)

    try {
      await magic.auth.loginWithMagicLink({
        email,
      })
      const user = await magic.user.getMetadata()
      store.setMagicUser(user)
    } catch {
      setIsLoggingIn(false)
    }
  }, [email])

  //
  useMemo(async () => {
    if (store.magicUser?.email && process.browser) {
      const signer = provider.getSigner()
      const originalMessage = ''
      const signedMessage = await signer.signMessage(originalMessage)
      const thearray = ethers.utils.arrayify(signedMessage)
      ceramic.setup()
      await ceramic.authenticate(thearray.slice(0, 32))
      const existingWallet: any = await ceramic.checkForWallet()
      console.log('WALLET?', existingWallet)
      if (!existingWallet) {
        store.lnpay.createWallet(ceramic)
      } else {
        store.actions.setWallet(existingWallet)
      }
    }
  }, [store.magicUser])

  return store.magicUser?.email ? (
    <Authed />
  ) : (
    <div className='container2'>
      <main className='main'>
        OnlySats
        <Button onPress={login} title='Login' />
      </main>
    </div>
  )
}

export default Home
