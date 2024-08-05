import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const background = require('../assets/video.mp4');
const pew = require('../assets/1.png');

const Task32 = () => {

  return (
      <View style={styles.container}>
        <Video
          source={background}
          poster={pew}
          resizeMode="contain"
          style={styles.backgroundVideo}
          posterResizeMode={'cover'}
          controls={true}
        />
      </View>
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

export default Task32;
