import { useEffect, useState } from 'react'
import { CONTAINER } from '@/components/Authed'
import { View } from 'react-native'
// @ts-ignore
import Player from '@vimeo/player'

const VideoPage = () => {
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
      console.log('played the video!')
    })
  }, [])
  return (
    <View style={CONTAINER}>
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
