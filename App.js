import React from 'react'
import { View } from 'react-native'
import HomeScreen from './src/screens/Home'

export default function App () {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <Card />
    </View>
  )
}

