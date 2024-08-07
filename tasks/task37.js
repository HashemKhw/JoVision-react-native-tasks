import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert,ScrollView,RefreshControl } from 'react-native';

function generateRandomWord(length) {
  	let result = '';
  	const characters = 'abcdefghijklmnopqrstuvwxyz';
  	for (let i = 0; i < length; i++) {
      	result += characters.charAt(Math.floor(Math.random() * characters.length));
  	}
  	return result;
  }

const Task37 = () => {
  const randomWords = Array.from({ length: 100 }, () => generateRandomWord(5));
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    },1000);
  }, []);

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView} refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }>
         {randomWords.map((word, index) => (
           <Text key={index} style={styles.header}> {word} </Text>
       ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
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
    color: '#333',
  },
});

export default Task37;
