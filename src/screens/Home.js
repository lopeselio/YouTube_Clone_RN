import React from 'react'
import { View, ScrollView } from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'

export default function HomeScreen () {
  return (
    <View>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  )
}
