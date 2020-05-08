import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

const MiniCard = (props) => {
  return (
    <View style={{
      flexDirection: 'row',
      marginBottom: 10
    }}
    >
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1548276145-69a9521f0499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80' }}
        style={{
          width: '45%',
          height: 100
        }}
      />
      <View style={{
        paddingLeft: 7
      }}
      >
        <Text
          style={{
            fontSize: 17,
            width: Dimensions.get('screen').width / 2
          }}
          ellipsizeMode='tail'
          numberOfLines={3}
        >{props.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{props.channel}</Text>
      </View>
    </View>
  )
}

export default MiniCard
