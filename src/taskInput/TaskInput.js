/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export default class TaskInput extends Component {
  constructor (props) {
    super(props);
    this.state = { text: '' };
    // Bind functions
    this.onTaskAdd = this.onTaskAdd.bind(this);
  }
  onTaskAdd () {
    const id = Date.now();
    this.props.onTaskAdd(this.state.text, id);
    this.setState({ text: '' });
  }
  render () {
    return (
      <View>
        <TextInput
          returnKeyType="done"
          onSubmitEditing={this.onTaskAdd}
          blurOnSubmit
          style={styles.input}
          placeholder="What do you want to remember?"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
      </View>
    );
  }
}
