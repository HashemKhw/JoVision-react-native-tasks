import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');


  const handleNonBlockingRequest = () => {
  try {
    fetch('https://api.ipify.org/')
      .then((response) => response.text())
      .then((text) => {
      setIp(text)
      })
      } catch(error) {
      console.error('Error', error);
      }
  };


  const handleBlockingRequest = async () => {

    try {
      const response = await fetch('https://api.ipify.org/');
      const text = await response.text();
      setIp(text)
    } catch (error) {
      console.error('Error', error);
    } finally {

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ip ? `${ip}` : 'get your IP'}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNonBlockingRequest}>
          <Text style={styles.text}>Non-Blocking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleBlockingRequest} >
          <Text style={styles.text}>Blocking</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: 'brown',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'times new roman',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default Task26;
