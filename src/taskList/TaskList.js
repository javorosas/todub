/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React, { Component } from 'react';
import { ListView } from 'react-native';
import Task from '../task/Task';

export default class TaskList extends Component {
  constructor () {
    super();
    this.renderRow = this.renderRow.bind(this);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { source: ds.cloneWithRows([]) };
  }
  static get defaultProps () {
    return {
      tasks: []
    };
  }
  componentDidMount () {
    this.props.onMount();
  }
  componentWillReceiveProps (newProps, oldProps) {
    this.setState({ source: this.state.source.cloneWithRows(newProps.tasks) });
  }
  renderRow (task) {
    return (
      <Task isCompleted={task.isCompleted}
        onTextPress={() => this.props.onTaskPress(task.id, !task.isCompleted)}
        onDeletePress={() => this.props.onDeletePress(task.id)} >
        {task.text}
      </Task>
    );
  }
  render () {
    return (
      <ListView enableEmptySections dataSource={this.state.source} renderRow={this.renderRow} />
    );
  }
}
