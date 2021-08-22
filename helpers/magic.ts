import { Magic } from 'magic-sdk'
import { ethers } from 'ethers'

export const magic = process.browser
  ? new Magic('pk_live_8CD520D6B1045872')
  : {}

export const provider = process.browser
  ? // @ts-ignore
    new ethers.providers.Web3Provider(magic.rpcProvider)
  : {}
