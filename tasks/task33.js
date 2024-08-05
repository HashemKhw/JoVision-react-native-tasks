import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';

const background = require('../assets/video.mp4');
const pew = require('../assets/1.png');

const Task33 = () => {
  const [paused, setPaused] = useState(false);

  const handlePress = () => {
    setPaused(!paused);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Video
          source={background}
          poster={pew}
          paused={!paused}
          controls={false}
          resizeMode="contain"
          style={styles.backgroundVideo}
          posterResizeMode={'cover'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Task33;
