import { connect } from 'react-redux';
import { addTask } from '../app/actions';
import TaskInput from './TaskInput';

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdd: (text, id) => {
      dispatch(addTask(text, id));
    }
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
