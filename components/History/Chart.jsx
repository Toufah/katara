import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { VictoryScatter, VictoryLine, VictoryChart, VictoryAxis } from 'victory-native'
import { VictoryCustomTheme } from './../../styles/VictoryCustomTheme'
import { Colors } from '../../constants/Colors';
import { chartData } from '../../constants/data';

const generatePastWeekDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date);
    }
    
    return dates;
  };

export default function Chart() {
    
  return (
    <View>
        <View style={styles.subContainer}>
            <Text
                style={{
                    fontFamily: 'outfit'
                    , fontSize: 16
                    , textAlign: 'center'
                    , padding: 5
                    , textDecorationStyle: 'solid'
                    , textDecorationLine: 'underline'
                    , textDecorationColor: Colors.PRIMARY
                }}
            >
                Weekly Consumption
            </Text>
            <VictoryChart
                theme={VictoryCustomTheme}
                height={250}
                width={Dimensions.get('window').width - 20}
            >
                <VictoryLine
                    style={{
                        data: {
                            stroke: Colors.PRIMARY
                        }
                        , parent: {
                            border: "1px solid",
                            borderColor: Colors.PRIMARY
                        }
                    }}
                    data={chartData.map(item => ({ x: item.date, y: item.consumption }))}
                    categories={{
                        y: ["0", "1", "2"]
                    }}
                />
                <VictoryScatter 
                    data={chartData.map(item => ({ x: item.date, y: item.consumption }))}
                    size={4}
                    style={{
                        data: {
                            fill: Colors.PRIMARY
                        }
                    }}
                />
                <VictoryAxis 
                    style={{
                        axis: {
                            stroke: 'transparent'
                        }
                        , grid: {
                            stroke: 'transparent'
                        }
                        , tickLabels: {
                            color: Colors.PRIMARY    
                            , fontFamily: 'outfit'
                        }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    style={{
                        axis: {
                            stroke: 'transparent'
                        }
                        , grid: {
                            stroke: Colors.LIGHTBLUE
                            , opacity: 0.2
                            , strokeDasharray: '10, 5'
                        }
                        , tickLabels: {
                            color: Colors.PRIMARY    
                            , fontFamily: 'outfit'
                        }
                    }}
                />
            </VictoryChart>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    subContainer: {
        margin: 10
        , padding: 10
        , backgroundColor: '#fff'
        , borderRadius: 20
        , shadowColor: '#171717'
        , shadowOffset: {width: 0, height: 0}
        , shadowOpacity: 0.5
        , shadowRadius: 5
        , elevation: 5
        , overflow: "hidden"
    }
})