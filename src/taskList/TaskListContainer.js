/* globals fetch */

import { ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { toggleTask, removeTask, seedTasks } from '../app/actions';
import TaskList from './TaskList';
import routes from '../app/routes';

const jsonBodyHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const onTaskPress = (dispatch) => {
  return (id, isCompleted) => {
    dispatch(toggleTask(id));
    fetch(routes.markCompleted(id), {
      method: 'PUT',
      headers: jsonBodyHeaders,
      body: JSON.stringify({isCompleted})
    });
  };
};

const onDeletePress = (dispatch) => {
  return (id) => {
    dispatch(removeTask(id));
    fetch(routes.removeTask(id), {
      method: 'DELETE'
    });
  };
};

const onMount = (dispatch) => {
  return () => {
    fetch(routes.getAllTasks())
      .then(response => response.json())
      .then(response => {
        dispatch(seedTasks(response.tasks.map(({text, isCompleted, _id}) => {
          return {
            text,
            isCompleted,
            id: _id
          };
        })));
        ToastAndroid.show('Success', ToastAndroid.SHORT);
      });
  };
};

const mapStateToProps = (state) => {
  return {
    tasks: [
      ...state.filter(t => !t.isCompleted),
      ...state.filter(t => t.isCompleted)
    ]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskPress: onTaskPress(dispatch),
    onDeletePress: onDeletePress(dispatch),
    onMount: onMount(dispatch)
  };
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
