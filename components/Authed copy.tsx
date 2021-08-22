import { View, ViewStyle } from 'react-native'
import { Feed } from './Feed'

export const Authed = () => {
  return (
    <View style={CONTAINER}>
      <Feed />
    </View>
  )
}

export const CONTAINER: ViewStyle = {
  position: 'absolute',
  flex: 1,
  width: '100vw',
  height: '100vh',
  zIndex: 3,
  backgroundColor: 'rgba(0,0,0,0.7)',
  justifyContent: 'center',
  alignItems: 'center',
}
