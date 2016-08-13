/* global fetch */

import { connect } from 'react-redux';
import { addTask, updateTaskId } from '../app/actions';
import TaskInput from './TaskInput';
import routes from '../app/routes';

const onTaskAdd = (dispatch) => {
  return (text, id) => {
    dispatch(addTask(text, id));
    fetch(routes.postTask(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    })
      .then(response => response.json())
      .then(response => {
        dispatch(updateTaskId(id, response.task._id));
      });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdd: onTaskAdd(dispatch)
  };
};

const mapStateToProps = (state) => {
  return {};
};

const TaskInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskInput);

export default TaskInputContainer;
