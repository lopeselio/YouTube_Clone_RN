import React from 'react'
import { View } from 'react-native'
import HomeScreen from './src/screens/Home'
// import Card from './src/components/Card'
import SearchScreen from './src/screens/Search'

export default function App () {
  return (
    <View style={{ flex: 1 }}>
      {/* <HomeScreen /> */}
      <SearchScreen />
    </View>
  )
}
