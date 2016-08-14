/* globals fetch */

import { connect } from 'react-redux';
import { editCompleted, deleteTask, fetchTasks } from '../app/actions';
import TaskList from './TaskList';

const onTaskPress = (dispatch) => {
  return (id, isCompleted) => {
    dispatch(editCompleted(id, isCompleted));
  };
};

const onDeletePress = (dispatch) => {
  return (id) => {
    dispatch(deleteTask(id));
  };
};

const onMount = (dispatch) => {
  return () => {
    dispatch(fetchTasks());
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
