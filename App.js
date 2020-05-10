import React from 'react'
// import { View } from 'react-native'
// import HomeScreen from './src/screens/Home'
// import Constant from 'expo-constants'
import 'react-native-gesture-handler'
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Card from './src/components/Card'
import { MaterialIcons } from '@expo/vector-icons'
// import SearchScreen from './src/screens/Search'
import HomeScreen from './src/screens/Home'
import Search from './src/screens/Search'
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './src/reducers/reducer'

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const store = createStore(reducer)

const RootHome = () => {
  const { colors } = useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName

          if (route.name === 'home') {
            iconName = 'home'
          } else if (route.name === 'explore') {
            iconName = 'explore'
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={25} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'colors.tabIcon',
        inactiveTintColor: 'gray'
      }}
    >
      <Tabs.Screen name='home' component={HomeScreen} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subscribe} />
    </Tabs.Navigator>
  )
}

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white'
  }
}

const customDeafultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red'


  }
}

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDarkTheme}>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='roothome' component={RootHome} />
          <Stack.Screen name='search' component={Search} />
          <Stack.Screen name='videoPlayer' component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
