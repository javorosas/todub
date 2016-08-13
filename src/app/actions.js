import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from './actionTypes';

export const addTask = (text, id) => {
  return {
    type: ADD_TASK,
    text,
    id
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    id
  };
};
