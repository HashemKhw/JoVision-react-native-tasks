import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MyClassPageTask25 from '../components/myClassPageTask25';

const Task25 = () => {
  const [inputText, setInputText] = useState('');
  const myClassPageRef = useRef(null);

  const handleTextChange = (newText) => {
    setInputText(newText);
    if (myClassPageRef.current) {
      myClassPageRef.current.updateText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.text}
        value={inputText}
        onChangeText={handleTextChange}
        placeholder="text input"
      />
      <MyClassPageTask25 ref={myClassPageRef} />
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

export default Task25;
