import thunkMiddleware from 'redux-thunk';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './src/app/App';
import tasks from './src/app/reducer';

let store = createStore(tasks, applyMiddleware(
  thunkMiddleware
));

class todub extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('todub', () => todub);
