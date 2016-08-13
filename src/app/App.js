import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TaskInputContainer from '../taskInput/TaskInputContainer';
import TaskListContainer from '../taskList/TaskListContainer';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TaskListContainer />
        <TaskInputContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
