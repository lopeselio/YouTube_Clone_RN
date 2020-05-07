import React, { useState } from 'react'
import { View, Text, Image, Dimensions, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchScreen = () => {
  const [value, setValue] = useState('')
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Ionicons name='md-arrow-back' size={32} />
        <TextInput
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name='md-send'
          size={32}
        />
      </View>
    </View>

  )
}

export default SearchScreen
