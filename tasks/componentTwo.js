
import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import TextContext from './textContext';
import ComponentOne from './componentOne';

const ComponentTwo = () => {
    const { text, setText } = useContext(TextContext);

    return (
        <View>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="text input"
            />
            <ComponentOne />
        </View>
    );
};

export default ComponentTwo;
