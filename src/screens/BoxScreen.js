import React from 'React';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 220,
    borderWidth: 3,
    borderColor: 'black'
  },
  view1: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  view2: {
    alignSelf: 'flex-end',
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'green'
  },
  view3: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'blue'
  },
});

export default BoxScreen;