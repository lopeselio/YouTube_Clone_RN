import React from 'react'
import { View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Constant from 'expo-constants'

export default function Header () {
  return (
    <View style={{
      marginTop: Constant.statusBarHeight
      height: 40,
      backgroundColor: 'skyblue'
    }}>
      <View>
        <Entypo name='youtube' color='red' size={28} />
      </View>
      <View>
      
      </View>
    </View>
  )
}