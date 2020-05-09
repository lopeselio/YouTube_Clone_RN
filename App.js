import React from 'react'
import { View } from 'react-native'
// import HomeScreen from './src/screens/Home'
import Constant from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import Card from './src/components/Card'
import SearchScreen from './src/screens/Search'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
