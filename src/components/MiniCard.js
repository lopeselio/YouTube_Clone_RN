import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

const MiniCard = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1548276145-69a9521f0499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80' }}
        style={{
          width: '100%',
          height: 200
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 15,
            width: Dimensions.get('screen').width / 2
          }}
          ellipsizeMode='tail'
          numberOfLines={3}
        >This is an amazing tutorial.
        </Text>
      </View>
    </View>
  )
}

export default Minicard
