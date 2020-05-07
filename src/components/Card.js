import React from 'react'
import { View, Text, Image } from 'react-native'
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Card = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://unsplash.com/photos/fUnfEz3VLv4' }}
        style={{
          width: '100%',
          height: 140
        }}
      />
    </View>
  )
}

export default Card
