import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const passwordReformatter = passwordInput => {
  return passwordInput.split('')
    .map(letter => {
      return letter.replace(letter, '*');
    })
    .join('')
    
};

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        style={styles.input} 
        />
        {
          password.length > 3 
          ? 
          <Text style={styles.text}>My password is {passwordReformatter(password)}</Text> 
          : 
          <Text style={styles.error}>Please create a name longer than 3 letters</Text>
        }
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 2
  },
  text: {
    marginLeft: 20,
    fontSize: 30
  },
  error:{
    marginLeft: 20,
    fontSize: 20,
    color: 'red'
  }
});

export default TextScreen;