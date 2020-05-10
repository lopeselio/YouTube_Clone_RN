import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'

const LittleCard = ({ name }) => {
  return (
    <View style={{
      backgroundColor: 'red',
      height: 50,
      width: 180,
      borderRadius: 4,
      marginTop: 10
    }}
    >
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        marginTop: 5
      }}
      >Hello
      </Text>
    </View>
  )
}
const Explore = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}
      >
        <LittleCard name='Trending' />
        <LittleCard name='Gaming' />
        <LittleCard name='Music' />
        <LittleCard name='News' />
        <LittleCard name='Movies' />
        <LittleCard name='Fashion' />
      </View>
    </View>

  )
}

export default Explore
