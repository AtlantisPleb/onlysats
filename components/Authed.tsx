import { useEffect, useState } from 'react'
import { View } from 'react-native'
// import ReactPlayer from 'react-player'
// @ts-ignore
import Player from '@vimeo/player'

export const Authed = () => {
  const [isPlaying, setIsPlaying] = useState(true)
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
    <View style={{ width: 640, height: 900, backgroundColor: 'transparent' }}>
      <div id='handstick' />
      {/* <ReactPlayer url='https://vimeo.com/590468811' playing={isPlaying} /> */}
    </View>
  )
}
