/* global fetch:false */

import React, { useState } from 'react'
import { View, TextInput, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
// import axios from 'axios'
// import config from './config';
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Logan%20Paul&type=video&key=[AIzaSyCwvNqy4K8dCelF1qIkJijtZQSJfMFkKW8]
const SearchScreen = () => {
  const [value, setValue] = useState('')
  const [miniCardData, setMiniCard] = useState([])
  // const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=[AIzaSyCSgFY6AVA9TYrkoSKKaAIJGwK_FJr_brc]`

  const fetchData = (data) => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyCSgFY6AVA9TYrkoSKKaAIJGwK_FJr_brc`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMiniCard(data.items)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
          placeholder='Type Something'
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name='md-send'
          size={32}
          onPress={() => fetchData()}
        />
      </View>
      <FlatList
        data={miniCardData}
        renderItem={({ item }) => {
          return <MiniCard videoId={item.id.videoId} title={item.snippet.title} channel={item.snippet.channelTitle} />
        }}
        keyExtractor={item => item.id.videoId}
      />
    </View>

  )
}

export default SearchScreen
