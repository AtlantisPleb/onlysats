import { useEffect } from 'react'
import { useElapsedTime } from 'use-elapsed-time'

const interval = 60
let chargedFirstSat = false

export const Timer = ({ isPlaying }: any) => {
  const onUpdate = (time: number) => {
    if (time > 10 && !chargedFirstSat) {
      console.log('CHARGING 1 SAT')
      chargedFirstSat = true
    }
  }
  const { elapsedTime } = useElapsedTime({ isPlaying, onUpdate })
  useEffect(() => {
    console.log(isPlaying, elapsedTime)
  }, [isPlaying])
  return <></>
}
