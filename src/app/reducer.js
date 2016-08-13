import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, UPDATE_TASK_ID, SEED_TASKS } from './actionTypes';

const tasks = (state = [], action) => {
  switch (action.type) {
    case UPDATE_TASK_ID:
      let newList = state.slice();
      let taskToUpdate = newList.findIndex(t => t.id === action.oldId);
      taskToUpdate.id = action.newId;
      return newList;
    case SEED_TASKS:
      return action.tasks;
    case ADD_TASK:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          isCompleted: false
        }
      ];
    case REMOVE_TASK:
      let index = state.findIndex(t => t.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case TOGGLE_TASK:
      let newState = state.slice();
      let task = newState.find(t => t.id === action.id);
      task.isCompleted = !task.isCompleted;
      return newState;
    default:
      return state;
  }
};

export default tasks;
