import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from './../../constants/Colors';

export default function Header({val}) {

    
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.txt}>{val}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding: 20,
        paddingTop: 50
    }
    ,subContainer: {
        display: 'flex'
        , alignItems: 'center'
        , justifyContent: 'center'
    }
    ,txt: {
        fontFamily: 'outfit-medium'
        , fontSize: 20
        , color: Colors.PRIMARY
    }
})
