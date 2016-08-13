/*eslint jsx-quotes: ["error", "prefer-double"]*/

import React, { Component } from 'react';
import { ListView } from 'react-native';
import Task from '../task/Task';

export default class TaskList extends Component {
  constructor () {
    super();
    this.renderRow = this.renderRow.bind(this);
  }
  static get defaultProps () {
    return {
      tasks: []
    };
  }
  componentDidMount () {
    this.props.onMount();
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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.props.tasks);
    return (
      <ListView enableEmptySections dataSource={dataSource} renderRow={this.renderRow} />
    );
  }
}
