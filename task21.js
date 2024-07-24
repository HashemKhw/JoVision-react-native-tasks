import React, { Component, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const MyFunctionPage = () => {
  React.useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []); 

  return (
    <View style={styles.innerContainer}>
      <Text style={styles.text}>MyFunctionPage content</Text>
    </View>
  );
};

const Task21 = () => {
  const [showMyFunctionPage, setShowMyFunctionPage] = useState(false);

  const pressMyFunctionPage = () => {
    setShowMyFunctionPage(!showMyFunctionPage);
  };

  return (
    <View style={styles.container}>
      <Button title={showMyFunctionPage ? 'Hide' : 'Show'} onPress={pressMyFunctionPage} />
      {showMyFunctionPage && <MyFunctionPage />}
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
    backgroundColor: 'red',
    color: 'white',
  },
  text: {
    fontFamily: 'times new roman',
    fontSize: 20,
    color: 'black',
  },
});

export default Task21;
