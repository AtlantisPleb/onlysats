import { MagicUserMetadata } from 'magic-sdk'
import create from 'zustand'
import { Wallet } from './wallet'

interface State {
  magicUser: MagicUserMetadata | null
  setMagicUser: (magicUser: MagicUserMetadata | null) => void
  lnpay: any
  wallet: any
  actions: any
}

export const useStore = create<State>((set) => ({
  magicUser: { issuer: null, publicAddress: null, email: null },
  setMagicUser: (magicUser: MagicUserMetadata | null) => set({ magicUser }),
  lnpay: new Wallet(set),
  wallet: null,
  actions: {
    setWallet: (wallet: any) => {
      set({ wallet })
    },
  },
}))
