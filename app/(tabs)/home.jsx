import { View } from 'react-native'
import React from 'react'
import Header from './../../components/Home/Header'
import Body from './../../components/Home/Body'
import {Colors} from './../../constants/Colors'

export default function home() {
  return (
    <View style={{backgroundColor: Colors.BEIGE, height: '100%'}}>
      <Header val="Consumption"/>
      <Body/>
    </View>
  )
}
