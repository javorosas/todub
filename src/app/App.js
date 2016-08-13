/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import TaskInputContainer from '../taskInput/TaskInputContainer';
import TaskListContainer from '../taskList/TaskListContainer';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <TaskListContainer />
        <TaskInputContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});
