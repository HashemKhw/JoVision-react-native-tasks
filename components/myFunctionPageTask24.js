import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');


  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View style={styles.innerContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
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

export default MyFunctionPage;
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');


  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View style={styles.innerContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
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

export default MyFunctionPage;
