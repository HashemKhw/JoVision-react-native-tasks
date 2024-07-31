import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Pressable, FlatList, Modal, TextInput, Button } from 'react-native';

const imageData = [
  { id: '1', title: 'Image 1', image: require('../assets/1.png') },
  { id: '2', title: 'Image 2', image: require('../assets/2.png') },
  { id: '3', title: 'Image 3', image: require('../assets/3.png') },
  { id: '4', title: 'Image 4', image: require('../assets/4.png') },
  { id: '5', title: 'Image 5', image: require('../assets/5.png') },
  { id: '6', title: 'Image 6', image: require('../assets/6.png') },
  { id: '7', title: 'Image 7', image: require('../assets/7.png') },
  { id: '8', title: 'Image 8', image: require('../assets/8.png') },
  { id: '9', title: 'Image 9', image: require('../assets/9.png') },
  { id: '10', title: 'Image 10', image: require('../assets/10.png') },
];

const Item = ({ item, index, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(index)}
    style={[styles.item]}
  >
    <Image source={item.image} style={styles.image} />
  </TouchableOpacity>
);

const Task28 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputIndex, setInputIndex] = useState('');
  const flatListRef = useRef(null);

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };



  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={imageData}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            index={index}
            onPress={handleImagePress}
          />
        )}
        keyExtractor={item => item.id}
      />

      {selectedImage && <Image source={selectedImage} style={styles.image} />}

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

export default Task28;
