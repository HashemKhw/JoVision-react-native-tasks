import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, Pressable, FlatList, TextInput, Button } from 'react-native';

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


const removeIcon = require('../assets/remove-icon.png');

const Task30 = () => {
  const [images, setImages] = useState(imageData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputIndex, setInputIndex] = useState('');
  const [showInput, setShowInput] = useState(false);
  const flatListRef = useRef(null);

  const handleImagePress = (index) => {
    Alert.alert(`You have selected image: ${index + 1}`);
  };

  const handleScrollToIndex = () => {
    setShowInput(true);
  };

  const handleConfirm = () => {
    const index = parseInt(inputIndex, 10) - 1;

    if (index >= 0 && index < images.length) {
      flatListRef.current.scrollToIndex({ index, animated: true });
      setShowInput(false);
      setInputIndex('');
    } else {
      Alert.alert('Invalid Index');
    }
  };

  const removeItem = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const Item = ({ item, index, onPress, onRemove }) => (
    <View style={styles.item}>



      <TouchableOpacity
        style={styles.item}
        onPress={() => handleImagePress(index)}
      >
        <Image source={item.image} style={styles.image} />

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(index)}
      >
        <Image source={removeIcon} style={styles.removeIcon} />

      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            index={index}
            onPress={handleImagePress}
            onRemove={removeItem}
          />
        )}
        keyExtractor={item => item.id}
      />

      <Pressable onPress={handleScrollToIndex} style={styles.button}>
        <Text style={styles.buttonText}>Scroll to Image</Text>
      </Pressable>

      {selectedImage && <Image source={selectedImage} style={styles.image} />}

      {showInput && (
        <View style={styles.inputContainer}>

          <Text style={styles.inputLabel}>Enter Image Index:</Text>

          <TextInput
            style={styles.textInput}

            value={inputIndex}
            onChangeText={setInputIndex}
            placeholder='Index'
          />

          <Button title="Confirm" onPress={handleConfirm} color='brown'/>
          <Button title="Cancel" onPress={() => setShowInput(false)} color='brown'/>

        </View>
      )}
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
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 15,
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Task30;
