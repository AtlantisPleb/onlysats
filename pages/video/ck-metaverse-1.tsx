import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { CONTAINER } from '@/components/Splash'
// @ts-ignore
import Player from '@vimeo/player'
import { Timer } from '@/components/timer'

const creatorWallet = 'wal_cuudFH0X9bc8ka'

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const player = new Player('handstick', {
      id: 590491522,
      // width: 375,
      // height: 700,
      controls: true,
      title: false,
      byline: false,
      portrait: false,
      responsive: true,
    })
    player.on('play', function () {
      setIsPlaying(true)
    })
    player.on('pause', function () {
      setIsPlaying(false)
    })
  }, [])
  return (
    <View style={CONTAINER}>
      <Timer isPlaying={isPlaying} creatorWallet={creatorWallet} />

      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}
      >
        <div id='handstick' />
        <p className='text-white text-center italic text-xl leading-relaxed my-4'>
          Chris and Kiki build a metaverse, eventually.
        </p>
        <p className='text-white text-center italic text-xl leading-relaxed my-4'>
          5 sats/minute
        </p>
      </View>
    </View>
  )
}

export default VideoPage
