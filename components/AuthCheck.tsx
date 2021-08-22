import { useCallback, useEffect, useMemo, useState } from 'react'
import { Magic } from 'magic-sdk'
import { magic as m, provider as p } from '@/helpers/magic'
import { useStore } from '@/helpers/store'
import { ethers } from 'ethers'
import { Ceramic } from '@/helpers/ceramic'

const magic = m as Magic
const provider = p as any
const ceramic = new Ceramic()

export const AuthCheck = () => {
  const store = useStore()
  useEffect(() => {
    console.log("Let's init.")
  }, [])

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

  useMemo(async () => {
    if (store.magicUser?.email && process.browser) {
      const signer = provider.getSigner()
      const originalMessage = ''
      const signedMessage = await signer.signMessage(originalMessage)
      const thearray = ethers.utils.arrayify(signedMessage)
      ceramic.setup()
      await ceramic.authenticate(thearray.slice(0, 32))
      const existingWallet: any = await ceramic.checkForWallet()
      console.log('existingWallet?', existingWallet)
      if (!existingWallet) {
        store.lnpay.createWallet(ceramic)
      } else {
        store.actions.setWallet(existingWallet)
      }
    }
  }, [store.magicUser])

  return <></>
}
