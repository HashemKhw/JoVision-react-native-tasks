import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setText } from './actions';

class ComponentOne extends Component {
  handleChange = (input) => {
    this.props.setText(input);
  };

  render() {
    const { text } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={this.handleChange}
          placeholder="text input"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  text: state.text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentOne);
