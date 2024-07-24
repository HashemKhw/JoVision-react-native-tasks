import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

const Task18 = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

  
    return () => clearTimeout(timer);
  }, []);

  const loadingIndc = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );

  return Loading ? loadingIndc() : (
    <View style={styles.container}>
      <Text style={styles.text}>Hashem Khw</Text>
     
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
    fontFamily: "times new roman",
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },
});

export default Task18;
