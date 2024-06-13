import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Chart from '../../components/History/Chart'
import Rec from '../../components/History/Rec'
import { Colors } from './../../constants/Colors';

export default function history() {
  return (
    <View style={{
      backgroundColor: Colors.BEIGE
    }}>
      <Header val="History"/>
      {/* Chart */}
     <ScrollView style={{marginBottom: 100}}>
        <Chart/>
        <Rec/>
     </ScrollView>
    </View>
  )
}