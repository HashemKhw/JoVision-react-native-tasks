import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from './actions';

const ComponentOne = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);

  const handleChange = (input) => {
    dispatch(setText(input));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChange}
        placeholder="text input"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default ComponentOne;
