/* global fetch:false */

import React, { useState } from 'react'
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MiniCard from '../components/MiniCard'
import Constant from 'expo-constants'

// import axios from 'axios'
// import config from './config';
// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=Logan%20Paul&type=video&key=[AIzaSyCwvNqy4K8dCelF1qIkJijtZQSJfMFkKW8]
const SearchScreen = () => {
  const [value, setValue] = useState('')
  const [miniCardData, setMiniCard] = useState([])
  const [loading, setLoading] = useState(false)
  // const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=[AIzaSyCSgFY6AVA9TYrkoSKKaAIJGwK_FJr_brc]`

  const fetchData = (data) => {
    setLoading(true)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyCSgFY6AVA9TYrkoSKKaAIJGwK_FJr_brc`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setLoading(false)
        setMiniCard(data.items)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <View style={{
      flex: 1,
      marginTop: Constant.statusBarHeight
    }}
    >
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
      {loading ? <ActivityIndicator style={{ marginTop: 10 }} size='large' color='blue' /> : null}
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
