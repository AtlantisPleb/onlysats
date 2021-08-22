import { useEffect } from 'react'
import { useStore } from '@/helpers/store'
import { useRouter } from 'next/router'
import { useElapsedTime } from 'use-elapsed-time'
import { sleep } from '@/helpers/wallet'

const amount = 5 // sats to charge every interval
const interval = 60 // interval in seconds
const charged: any = []

export const Timer = ({ creatorWallet, isPlaying }: any) => {
  const router = useRouter()
  const lnpay = useStore((s) => s.lnpay)
  const wallet = useStore((s) => s.wallet)
  const onUpdate = async (time: number) => {
    const times = time / interval

    // compare times we should have to how many times we did
    if (times > charged.length) {
      charged.push('demo charge')
      console.log(wallet)
      if (!wallet || wallet?.balance < amount) {
        router.push('/')
        await sleep(500)
        alert('Add or earn more sats to keep watching!')
      }
      lnpay && lnpay.chargeVideoView(amount, creatorWallet)
      // console.log('Charged length is now:', charged.length)
    }
  }
  const { elapsedTime } = useElapsedTime({ isPlaying, onUpdate })
  useEffect(() => {
    console.log(isPlaying, elapsedTime)
  }, [isPlaying])
  return <></>
}
