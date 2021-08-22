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

const magic = m as Magic
const provider = p as any
const ceramic = new Ceramic()

const Home: NextPage = () => {
  const store = useStore()
  const [email, setEmail] = useState('chris@arcade.city')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

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
      // console.log('Authenticating with Ceramic...')
      const signer = provider.getSigner()
      const originalMessage = ''
      const signedMessage = await signer.signMessage(originalMessage)
      const thearray = ethers.utils.arrayify(signedMessage)
      console.log(thearray)
      ceramic.setup()
      const authed = await ceramic.authenticate(thearray.slice(0, 32))
      console.log('AUTHED?', authed)
      // setIsCeramicAuthed(authed)
      // console.log('Checking for wallet...')
      const wallet: any = await ceramic.checkForWallet()
      console.log('WALLET?', wallet)
      // if (wallet) {
      // setLightningWallet({ ...wallet, fromCeramic: true })
      // LightningWallet = new LightningCustodianWallet({
      //   secret: wallet.secret,
      // })
      // console.log('LightningCustodianWallet initialized:', LightningWallet)
      // await LightningWallet.authorize()
      // console.log('LightningCustodianWallet authorized:', LightningWallet)
      // await LightningWallet.fetchBalance()
      // console.log('LightningCustodianWallet fetchBalance?', LightningWallet)
      // const gotbalance = LightningWallet.getBalance()
      // setBalance(gotbalance)
    } else {
      // setLightningWallet(false)
    }
  }, [store.magicUser])

  return store.magicUser?.email ? (
    <Authed />
  ) : (
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
