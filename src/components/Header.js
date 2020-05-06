import React from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Constant from 'expo-constants'

export default function Header () {
  return (
    <View style={{
      marginTop: Constant.statusBarHeight,
      height: 40,
      backgroundColor: 'skyblue'
    }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Entypo name='youtube' color='red' size={32} />
        <Text style={{ fontSize: 22 }}> YouTube </Text>
      </View>
      <View />
    </View>
  )
}
