import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import styles from './styles';

export default class Task extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text onPress={this.props.onTextPress} style={[styles.text, this.props.isCompleted ? styles.completed : styles.todo]}>
          {this.props.children}
        </Text>
        <Button onPress={this.props.onDeletePress} style={styles.deleteButton}>
          &times;
        </Button>
      </View>
    );
  }
}
