import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './router/Navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#6360FF" />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
