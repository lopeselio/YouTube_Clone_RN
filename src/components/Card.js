import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Card = (props) => {
  return (
    <View style={{
      elevation: 6,
      marginBottom: 10
    }}
    >
      <Image
        source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg` }}
        style={{
          width: '100%',
          height: 200
        }}
      />
      <View style={{
        flexDirection: 'row',
        margin: 5
      }}
      >
        <MaterialIcons name='account-circle' size={40} color='#212121' />
        <View style={{
          marginLeft: 10
        }}
        >
          <Text
            style={{
              fontSize: 20,
              width: Dimensions.get('screen').width - 50
            }}
            ellipsizeMode='tail'
            numberOfLines={2}
          >{props.title}
          </Text>
          <Text>{props.channel}</Text>
        </View>
      </View>
    </View>

  )
}

export default Card
