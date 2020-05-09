import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import Constant from 'expo-constants'

const VideoPlayer = () => {
  return (
    <View style={{
      flex: 1,
      marginTop: Constant.statusBarHeight
    }}
    >
      <Text>I am Video Screen</Text>
    </View>

  )
}

export default VideoPlayer
