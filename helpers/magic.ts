import { Magic } from 'magic-sdk'

export const magic = process.browser
  ? new Magic('pk_live_8CD520D6B1045872')
  : {}
