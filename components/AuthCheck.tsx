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
  const [savedUser, setSavedUser] = useStickyState({}, 'magicUser')
  useEffect(() => {
    console.log('Initializing...')
    if (!!savedUser) {
      console.log('Restoring user from localStorage...', savedUser)
      store.setMagicUser(savedUser)
    } else {
      console.log('No user found in localStorage')
    }
  }, [savedUser])

  useEffect(() => {
    if (!magic || !!savedUser) return
    magic.user.isLoggedIn().then((magicIsLoggedIn) => {
      if (magicIsLoggedIn) {
        magic.user.getMetadata().then((user) => {
          store.setMagicUser(user)
          setSavedUser(user)
        })
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
      // console.log('existingWallet?', existingWallet)
      if (!existingWallet) {
        store.lnpay.createWallet(ceramic)
      } else {
        store.lnpay.setWallet(existingWallet)
        store.actions.setWallet(existingWallet)
      }
    }
  }, [store.magicUser])

  return <></>
}

function useStickyState(defaultValue: any, key: string) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key)
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue))
    }
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
