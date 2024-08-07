import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import store from '../components/store';
import MainComponent from '../components/mainComponent';

const task40 = () => (
  <Provider store={store}>
      <MainComponent />
  </Provider>
);

export default task40;
