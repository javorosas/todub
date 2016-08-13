import { connect } from 'react-redux';
import { toggleTask, removeTask } from '../app/actions';
import TaskList from './TaskList';

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
    onTaskPress: (id) => {
      dispatch(toggleTask(id));
    },
    onDeletePress: (id) => {
      dispatch(removeTask(id));
    }
  };
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskListContainer;
