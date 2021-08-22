import { MagicUserMetadata } from 'magic-sdk'
import create from 'zustand'

interface State {
  magicUser: MagicUserMetadata | null
  setMagicUser: (magicUser: MagicUserMetadata | null) => void
}

export const useStore = create<State>((set) => ({
  magicUser: { issuer: null, publicAddress: null, email: null },
  setMagicUser: (magicUser: MagicUserMetadata | null) => set({ magicUser }),
}))
