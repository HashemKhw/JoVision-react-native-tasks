import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'user_data';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const saveData = async () => {
    const timestamp = new Date().toISOString();
    const userData = {
      name,
      age,
      country,
      timestamp,
    };

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      Alert.alert('Data saved');
    } catch (e) {
      Alert.alert('Error in saving the data');
    }
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);

      if (value !== null) {
        const storedData = JSON.parse(value);
        const storedTimestamp = new Date(storedData.timestamp);
        const currentTime = new Date();
        const oneMinute = 60 * 1000;

        if (currentTime - storedTimestamp < oneMinute) {
          setName(storedData.name);
          setAge(storedData.age);
          setCountry(storedData.country);
        }
      }
    } catch (e) {
      Alert.alert('Error in reading the data');
    }
  };


  const handleSubmit = () => {
    if (!name || !age || !country) {
      Alert.alert('Enter all data correctly');
      return;
    }
    saveData();
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.title}>AsyncStorage Example</Text>

      </View>
      <View style={styles.panel}>

        <Text style={styles.label}>Name:</Text>

        <TextInput
          style={styles.inputField}
          value={name}
          placeholder="Enter Name"
          onChangeText={setName}
        />

        <Text style={styles.label}>Age:</Text>

        <TextInput
          style={styles.inputField}
          value={age}
          placeholder="Enter Age"
          keyboardType="numeric"
          onChangeText={setAge}
        />

        <Text style={styles.label}>Country:</Text>

        <TextInput
          style={styles.inputField}
          value={country}
          placeholder="Enter Country"
          onChangeText={setCountry}
        />

        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
  },
  panel: {
    paddingTop: 10,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  inputField: {
    backgroundColor: '#fff',
    height: 44,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
    padding: 10,
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Task35;
