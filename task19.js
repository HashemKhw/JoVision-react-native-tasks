import React, { Component, useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class MyClassPage extends Component {
  render() {
    return (
      <View style={styles.innerContainer}>
        <Text style={styles.text}>MyClassPage content</Text>
      </View>
    );
  }
}

const Task19 = () => {
  const [showMyClassPage, setShowMyClassPage] = useState(false);

  const pressMyClassPage = () => {
    setShowMyClassPage(!showMyClassPage);
  };

  return (
    <View style={styles.container}>
      <Button title='Show' onPress={pressMyClassPage} />
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

export default Task19;
