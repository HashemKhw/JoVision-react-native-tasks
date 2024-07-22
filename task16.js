import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Task16 = () => {
  const [Visible, setVisible] = useState(false);

  const Visibility = () => {
    setVisible(!Visible);
  };

  return (
    <View style={styles.container}>
      <Button 
        title='Show'
        onPress={Visibility}
        color="red"
      />
      {Visible && <Text style={styles.text}>Hashem</Text>}
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
  text: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },
});

export default Task16;
