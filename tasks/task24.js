import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MyFunctionPageTask24 from '../components/myFunctionPageTask24';

const Task24 = () => {
  const [inputText, setInputText] = useState('');
  const myFunctionPageRef = useRef(null);

  const handleTextChange = (newText) => {
    setInputText(newText);
    if (myFunctionPageRef.current) {
      myFunctionPageRef.current.updateText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.text}
        value={inputText}
        onChangeText={handleTextChange}
        placeholder="text input"
      />
      <MyFunctionPageTask24 ref={myFunctionPageRef} />
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
    color: 'black',
  },
  text: {
    fontFamily: 'times new roman',
    fontSize: 20,
    color: 'black',
  },
});

export default Task24;
