import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

  const subHeader ='Hi there';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>{subHeader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
