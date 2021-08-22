import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { CONTAINER } from '@/components/Authed'
// @ts-ignore
import Player from '@vimeo/player'
import { Timer } from './timer'

const creatorWallet = 'wal_cuudFH0X9bc8ka'

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const player = new Player('handstick', {
      id: 590491522,
      width: 640,
      height: 900,
      controls: true,
      title: false,
      byline: false,
      portrait: false,
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
      <p className='text-center italic text-xl leading-relaxed'>
        Chris and Kiki build a metaverse, eventually.
      </p>
      <View style={{ width: 640, height: 900, backgroundColor: 'transparent' }}>
        <div id='handstick' />
      </View>
    </View>
  )
}

export default VideoPage
