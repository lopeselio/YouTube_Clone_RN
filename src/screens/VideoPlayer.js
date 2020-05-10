import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview'

const VideoPlayer = (props) => {
  return (
    <View style={{
      flex: 1,
      marginTop: Constant.statusBarHeight
    }}
    >
      <View style={{
        width: '100%',
        height: 200
      }}
      >
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${props.videoId}` }}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get('screen').width - 50,
          margin: 9
        }}
        numberOfLines={2}
        ellipsizeMode='tail'
      >
        {props.title}
      </Text>
      <View
        style={{ borderBottomWidth: 1 }}
      />
    </View>

  )
}

export default VideoPlayer
