import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useCurrentTime from './useCurrentTime';

const Task34 = () => {
  const [isTimeVisible, setIsTimeVisible] = useState(true);
  const { time, date } = useCurrentTime();

  const toggleTimeVisibility = () => {
    setIsTimeVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {isTimeVisible && (
        <>
          <Text style={styles.text}>Time: {time}</Text>
          <Text style={styles.text}>Date: {date}</Text>
        </>
      )}
      <Button
        title={isTimeVisible ? "hide the time" : "whats the time?"}
        onPress={toggleTimeVisibility}
      />
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
  item: {
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

});

export default Task34;

