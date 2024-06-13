import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Colors } from '../../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Body() {

    const [value, setValue]=useState(0);
    const currentDate = new Date();
    const threshold = 3000;

    const formattedDate = currentDate.toLocaleDateString();
    
  return (
    <View style={styles.container}>
        <View style={styles.subContainerLvl1_1}>
            <View style={styles.subContainerLvl2_11}>
                <Text style={styles.txt_1}>Today</Text>
                <Text style={styles.txt_2}>{formattedDate}</Text>
            </View>
            <View style={styles.subContainerLvl2_12}>
                <CircularProgress 
                    radius={150}
                    value={85}
                    progressValueColor={Colors.PRIMARY}
                    progressValueFontSize={60}
                    valueSuffix={'%'}
                    activeStrokeColor={Colors.PRIMARY}
                    inActiveStrokeColor={Colors.LIGHTBLUE}
                    inActiveStrokeOpacity={0.2}
                    inActiveStrokeWidth={6}
                    duration={3000}
                    onAnimationComplete={() => setValue(50)}
                    allowFontScaling= {true}
                />
            </View>
        </View>
        <View style={styles.subContainerLvl1_2}>
            <View style={styles.subContainerLvl2_21}>
                <View style={styles.subContainerLvl3_21}>
                    <View style={styles.subContainerLvl4_21}>
                        <MaterialCommunityIcons name="car-speed-limiter" size={20} color={Colors.BEIGE} />
                        <Text style={{
                                color: Colors.BEIGE
                                , fontFamily: 'outfit'
                                , fontSize: 16
                            }}
                        >
                            Threshold:
                        </Text>
                    </View>
                    <Text style={{
                                color: Colors.BEIGE
                                , fontFamily: 'outfit'
                                , fontSize: 16
                            }}
                    >
                        {threshold}L
                    </Text>
                </View>
                <View style={{padding: 10}}>
                    <TouchableOpacity style={{
                                backgroundColor: Colors.BEIGE
                                , display: 'flex'
                                , alignItems: 'center'
                                , justifyContent: 'center'
                                , padding: 10
                                , borderRadius: 99
                        }}
                    >
                        <Text style={{
                                color: Colors.PRIMARY
                                , fontFamily: 'outfit-medium'
                                , fontSize: 18
                            }}
                        >
                            Edit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex'
                    , justifyContent: 'flex-start'
                    , alignItems: 'center'
                    , flexDirection: 'row'
                    , gap: 5
                    , padding: 10
                    , overflow: 'hidden'
                }}>
                    <Text
                        style={{
                            color: Colors.BEIGE
                            , fontFamily: 'outfit'
                            , fontSize: 14
                        }}
                    >
                        Set your maximum daily water consumption limit here.
                    </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BEIGE
        , height: '100%'
    }
    , subContainerLvl1_1: {
        display: 'flex'
        , alignItems: 'center'
        , justifyContent: 'flex-end'
        , flexDirection: 'column'
        , padding: 20
        , height: '55%'
    }
    , subContainerLvl2_12: {
        display: 'flex'
        , justifyContent: 'flex-end'
        , alignItems: 'center'
        , padding: 20
        
    }
    , txt_1: {
        fontFamily: 'outfit-medium'
        , fontSize: 20
        , color: Colors.PRIMARY
    }
    , txt_2: {
        fontFamily: 'outfit'
        , fontSize: 12
        , color: Colors.PRIMARY
    }
    , subContainerLvl2_12: {
        display: 'flex'
        , justifyContent: 'flex-end'
        , alignItems: 'center'
        , padding: 20
    }
    , subContainerLvl1_2: {
        margin: 10
        , padding: 10
        , backgroundColor: Colors.PRIMARY
        , borderRadius: 20
        , shadowColor: '#171717'
        , shadowOffset: {width: 0, height: 0}
        , shadowOpacity: 0.5
        , shadowRadius: 5
        , elevation: 5
    }
    , subContainerLvl3_21: {
        padding: 10
        , display: 'flex'
        , justifyContent: 'space-between'
        , alignItems: 'center'
        , flexDirection: 'row'
    }
    , subContainerLvl4_21: {
        display: 'flex'
        , flexDirection: 'row'
        , justifyContent: 'flex-start'
        , alignItems: 'center'
        , gap: 5
    }
})