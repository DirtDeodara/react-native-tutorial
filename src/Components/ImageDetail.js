import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>Image Score: {props.imageScore}</Text>
      <Image style={styles.image} source={props.imageSource}/>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginBottom: 30
  }
});

export default ImageDetail;
