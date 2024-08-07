
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TextContext from './textContext';

class ComponentOne extends Component {
    static contextType = TextContext;

    render() {
        const { text } = this.context;
        return (
            <View>
                <Text>{text}</Text>
            </View>
        );
    }
}

export default ComponentOne;
