import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { monthlyConsuption } from '../../constants/data';
import { Colors } from '../../constants/Colors';


export default function Rec() {
  // Define the threshold (e.g., 30 liters)
  const threshold = 30;

  return (
    <View style={styles.container}>
      {monthlyConsuption.map(({ month, consumption }) => (
        <View key={month} style={[styles.card, consumption > threshold ? styles.passedThreshold : null]}>
          <Text style={styles.month}>{month}</Text>
          <Text style={styles.consumption}>Consumed: {consumption}k liters</Text>
          {consumption > threshold ? <Text style={styles.warning}>Exceeded threshold!</Text> : <Text style={styles.safe}>Within threshold.</Text>}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    padding: 20,
    marginBottom: 10
    , backgroundColor: '#fff'
    , borderRadius: 20
    , shadowColor: '#171717'
    , shadowOffset: {width: 0, height: 0}
    , shadowOpacity: 0.5
    , shadowRadius: 5
    , elevation: 5
    , overflow: "hidden"
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'outfit'
  },
  consumption: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'outfit'
  },
  warning: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'outfit'
  },
  safe: {
    color: 'green',
    fontSize: 14,
    fontFamily: 'outfit'
  }
});
