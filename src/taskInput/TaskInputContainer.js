import { connect } from 'react-redux';
import { createTask } from '../app/actions';
import TaskInput from './TaskInput';

const onTaskAdd = (dispatch) => {
  return (text, id) => {
    dispatch(createTask(text, id));
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
