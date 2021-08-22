import { Magic, MagicUserMetadata } from 'magic-sdk'
import create from 'zustand'
import { Wallet } from './wallet'
import { magic as m, provider as p } from '@/helpers/magic'

const magic = m as Magic

interface State {
  magicUser: MagicUserMetadata | null
  setMagicUser: (magicUser: MagicUserMetadata | null) => void
  lnpay: any
  invoice: any
  wallet: any
  actions: any
}

export const useStore = create<State>((set, get) => ({
  magicUser: { issuer: null, publicAddress: null, email: null },
  setMagicUser: (magicUser: MagicUserMetadata | null) => set({ magicUser }),
  invoice: null,
  lnpay: new Wallet(set),
  wallet: null,
  actions: {
    login: async (email: string) => {
      // setIsLoggingIn(true)
      await magic.auth.loginWithMagicLink({
        email,
      })
      const user = await magic.user.getMetadata()
      get().setMagicUser(user)
    },
    setWallet: (wallet: any) => {
      set({ wallet })
    },
    logout: () => {
      set({
        magicUser: { issuer: null, publicAddress: null, email: null },
        invoice: null,
        wallet: null,
        lnpay: new Wallet(set),
      })
      window.localStorage.removeItem('magicUser')
      magic.user.logout()
    },
  },
}))
