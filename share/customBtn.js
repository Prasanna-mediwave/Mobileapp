import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function CustomButtom({text, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    textAlign: 'center',
    color: '#FCFCFF',
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 15,
  },
});
