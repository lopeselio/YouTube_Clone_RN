import React, { useState } from 'react'
import { View, Text, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'

const SearchScreen = () => {
  const [value, setValue] = useState('')
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 6,
        backgroundColor: 'white'
      }}
      >
        <Ionicons name='md-arrow-back' size={32} />
        <TextInput
          style={{
            width: '70%',
            backgroundColor: '#e6e6e6'
          }}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name='md-send'
          size={32}
        />
      </View>
      <ScrollView>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </ScrollView>

    </View>

  )
}

export default SearchScreen
