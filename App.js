import React, { Component } from 'react';
import Appp from './components/Appp';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import store from './redux/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Appp />
      </Provider>
    );
  }
}