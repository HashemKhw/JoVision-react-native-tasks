import React, { Component, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.text}>MyClassPage content</Text>
      </View>
    );
  }
}

const Task20 = () => {
  const [showMyClassPage, setShowMyClassPage] = useState(false);

  const pressMyClassPage = () => {
    setShowMyClassPage(!showMyClassPage);
  };

  return (
    <View style={styles.container}>
      <Button title={showMyClassPage ? 'Hide' : 'Show'} onPress={pressMyClassPage} />
      {showMyClassPage && <MyClassPage />}
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

export default Task20;
