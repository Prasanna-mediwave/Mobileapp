import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <View>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FCFCFF',
    padding: 15,
    borderRadius: 10,
  },
});
