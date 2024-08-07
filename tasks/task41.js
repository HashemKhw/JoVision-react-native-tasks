import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 1</Text>
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 2</Text>
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 3</Text>
    </View>
  );
};

const Screen4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page 4</Text>
    </View>
  );
};

const task41 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'white',
            paddingBottom: 5,
          },
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'brown',
        }}
      >
        <Tab.Screen name="1" component={Screen1} />
        <Tab.Screen name="2" component={Screen2} />
        <Tab.Screen name="3" component={Screen3} />
        <Tab.Screen name="4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default task41;
