import React, { Component, forwardRef, RefObject } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  updateText = (newText) => {
    this.setState({ text: newText });
  };

  render() {
    const { text } = this.state;

    return (
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

export default forwardRef((props, ref) => {
  const instanceRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    updateText: (newText) => {
      if (instanceRef.current) {
        instanceRef.current.updateText(newText);
      }
    },
  }));

  return <MyClassPage ref={instanceRef} {...props} />;
});

const styles = StyleSheet.create({
  innerContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    color: 'black',
  },
  text: {
    fontFamily: 'times new roman',
    fontSize: 20,
    color: 'black',
  },
});
