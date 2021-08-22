import { useEffect } from 'react'
import { useStore } from '@/helpers/store'
import { useElapsedTime } from 'use-elapsed-time'

const amount = 1 // sats to charge every interval
const interval = 6 // interval in seconds
const charged: any = []

export const Timer = ({ creatorWallet, isPlaying }: any) => {
  const lnpay = useStore((s) => s.lnpay)
  const onUpdate = (time: number) => {
    const times = time / interval

    // compare times we should have to how many times we did
    if (times > charged.length) {
      charged.push('demo charge')
      lnpay && lnpay.chargeVideoView(amount, creatorWallet)
      console.log('Charged length is now:', charged.length)
    }
  }
  const { elapsedTime } = useElapsedTime({ isPlaying, onUpdate })
  useEffect(() => {
    console.log(isPlaying, elapsedTime)
  }, [isPlaying])
  return <></>
}
