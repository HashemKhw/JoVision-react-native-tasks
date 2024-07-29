import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const images = {
  1: require('../assets/1.png'),
  2: require('../assets/2.png'),
  3: require('../assets/3.png'),
  4: require('../assets/4.png'),
};

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonPress = () => {
    Alert.alert(
      "Choose Image",
      "Pick a number between",
      [
        { text: "1", onPress: () => setSelectedImage(images[1]) },
        { text: "2", onPress: () => setSelectedImage(images[2]) },
        { text: "3", onPress: () => setSelectedImage(images[3]) },
      ]
    );
  };

  return (
    <View style={styles.container}>

      {selectedImage && <Image source={selectedImage} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.text}>Choose Image</Text>
      </TouchableOpacity>

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
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    button: {
      backgroundColor: 'brown',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginHorizontal: 10,
      alignItems: 'center',
    },
    text: {
      fontFamily: 'times new roman',
      fontSize: 20,
      color: 'black',
      textAlign: 'center',
    },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Task27;
