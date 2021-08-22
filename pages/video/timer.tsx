import { useEffect } from 'react'
import { useStore } from '@/helpers/store'
import { useElapsedTime } from 'use-elapsed-time'

const amount = 5 // sats to charge every interval
const interval = 3 // interval in seconds
const charged: any = []

export const Timer = ({ isPlaying }: any) => {
  const wallet = useStore((s) => s.wallet)
  const onUpdate = (time: number) => {
    const times = time / interval

    // compare times we should have to how many times we did
    if (times > charged.length) {
      charged.push('demo charge')
      // wallet.chargeVideoView(amount)
      console.log('Charged length is now:', charged.length)
    }
  }
  const { elapsedTime } = useElapsedTime({ isPlaying, onUpdate })
  useEffect(() => {
    console.log(isPlaying, elapsedTime)
  }, [isPlaying])
  return <></>
}
