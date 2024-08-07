import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ComponentOne from './compOne';
import { toggleComponentOne } from './actions';

const MainComponent = () => {
  const dispatch = useDispatch();
  const showComponentOne = useSelector((state) => state.showComponentOne);

  const handleToggle = () => {
    dispatch(toggleComponentOne());
  };

  return (
    <View style={styles.container}>
      <Button title={showComponentOne ? "Hide Component One" : "Show Component One"} onPress={handleToggle}   />
      {showComponentOne && <ComponentOne />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

export default MainComponent;
