import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 1</Text>
      <View style={styles.button}>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 3"
          onPress={() => navigation.navigate('3')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 4"
          onPress={() => navigation.navigate('4')}
        />
      </View>
    </View>
  );
};

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      <View style={styles.button}>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('1')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 3"
          onPress={() => navigation.navigate('3')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 4"
          onPress={() => navigation.navigate('4')}
        />
      </View>
    </View>
  );
};

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
      <View style={styles.button}>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('1')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 4"
          onPress={() => navigation.navigate('4')}
        />
      </View>
    </View>
  );
};

const Screen4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 4</Text>
      <View style={styles.button}>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate('1')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('2')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Go to Screen 3"
          onPress={() => navigation.navigate('3')}
        />
      </View>
    </View>
  );
};

const Task42 = () => {
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
  button: {
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default Task42;
