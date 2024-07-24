import React, { Component, useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput  } from 'react-native';

const MyFunctionPage = ({onEndEditing }) => {
  return (
    <View style={styles.innerContainer}>
      <TextInput
        style={styles.input}
        onSubmitEditing={(event) => onEndEditing(event.nativeEvent.text)}
        placeholder="text input"
      />
    </View>
  );
};

const Task22 = () => {
  const [displayText, setDisplayText] = useState('text comp');

  const handleEndEditing = (newText) => {
    setDisplayText(newText);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
      <MyFunctionPage onEndEditing={handleEndEditing} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  innerContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    color: 'white',
  },
  text: {
    fontFamily: 'times new roman',
    fontSize: 20,
    color: 'black',
  },
  input: {
    color: 'black',
    fontFamily: 'times new roman',

  },
});

export default Task22;
