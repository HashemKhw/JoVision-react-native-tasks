import React from 'react';
import { Provider,StyleSheet } from 'react-redux';
import store from '../components/store';
import MainComponent from '../components/mainComponent';

const Task39 = () => (
  <Provider store={store}>
    <MainComponent />
  </Provider>
);

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    padding: 1,
//    backgroundColor: '#dcdcdc',
//  },
//  header: {
//    width: '100%',
//    backgroundColor: '#dcdcdc',
//    paddingVertical: 20,
//    borderBottomWidth: StyleSheet.hairlineWidth,
//    alignItems: 'center',
//  },
//  title: {
//    fontSize: 22,
//    color: '#333',
//    fontWeight: 'bold',
//  },
//  panel: {
//    paddingTop: 10,
//  },
//  label: {
//    fontSize: 18,
//    marginVertical: 5,
//  },
//  inputField: {
//    backgroundColor: '#fff',
//    height: 44,
//    borderWidth: 1,
//    borderColor: '#333',
//    width: '100%',
//    padding: 10,
//    marginBottom: 12,
//  },
//  button: {
//    marginTop: 20,
//    padding: 10,
//    backgroundColor: 'orange',
//    justifyContent: 'center',
//    alignItems: 'center',
//    borderRadius: 4,
//  },
//  buttonText: {
//    fontSize: 18,
//    color: '#333',
//  },
//});
export default Task39;
