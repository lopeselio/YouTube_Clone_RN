import React from 'react'
import { View, Text, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Card = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1548276145-69a9521f0499?ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80' }}
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
          marginLeft: 10
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
