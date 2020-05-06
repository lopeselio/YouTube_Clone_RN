import React from 'react'
import { View, Text } from 'react-native'
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'

export default function Header () {
  const myColor = '#212121'
  return (
    <View style={{
      marginTop: Constant.statusBarHeight,
      height: 40,
      backgroundColor: 'skyblue',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
    >
      <View style={{
        flexDirection: 'row',
        margin: 5
      }}
      >
        <Entypo style={{ marginLeft: 20 }} name='youtube' color='red' size={32} />
        <Text style={{
          fontSize: 22,
          marginLeft: 5,
          fontWeight: 'bold',
          color: myColor
        }}
        > YouTube
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 175
        // alignContent: 'flex-end'
      }}
      >
        <Ionicons style={{ marginLeft: 5 }} name='md-videocam' size={32} color={myColor} />
        <Ionicons style={{ marginLeft: 5 }} name='md-search' size={32} color={myColor} />
        <MaterialIcons style={{ marginLeft: 5 }} name='account-circle' size={32} color={myColor} />
      </View>
    </View>
  )
}
