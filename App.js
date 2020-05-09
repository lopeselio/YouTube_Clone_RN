import React from 'react'
import { View } from 'react-native'
// import HomeScreen from './src/screens/Home'
import Constant from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import Card from './src/components/Card'
import SearchScreen from './src/screens/Search'

export default function App () {
  return (
    <View style={{
      flex: 1,
      marginTop: Constant.statusBarHeight
    }}
    >
      {/* <HomeScreen /> */}
      <SearchScreen />
    </View>
  )
}
