import React from 'react'
import { View, Text, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Card = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://unsplash.com/photos/fUnfEz3VLv4' }}
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
        <MaterialIcons name='account-circle' size={32} color='#212121' />
        <View style={{
          marginLeft: 6
        }}
        >
          <Text>This is a good Course</Text>
          <Text>This is a good Course</Text>
        </View>
      </View>
    </View>

  )
}

export default Card
