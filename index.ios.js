import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './src/app/App';
import tasks from './src/app/reducer';

const loggerMiddleware = createLogger();
let store = createStore(tasks, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
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
