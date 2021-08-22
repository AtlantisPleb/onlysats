import { useEffect } from 'react'
import { useElapsedTime } from 'use-elapsed-time'

export const Timer = ({ isPlaying }: any) => {
  const { elapsedTime } = useElapsedTime({ isPlaying })
  useEffect(() => {
    console.log(isPlaying, elapsedTime)
  }, [isPlaying])
  return <></>
}
