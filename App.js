import React from 'react'
// import { View } from 'react-native'
// import HomeScreen from './src/screens/Home'
// import Constant from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Card from './src/components/Card'
// import SearchScreen from './src/screens/Search'
import HomeScreen from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='home' component={HomeScreen} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='home' component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer headerMode='none'>
      <Stack.Navigator>
        <Stack.Screen name='rootHome' component={RootHome} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name='videoPlayer' component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
