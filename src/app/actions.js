import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, UPDATE_TASK_ID, SEED_TASKS } from './actionTypes';

export const updateTaskId = (oldId, newId) => {
  return {
    type: UPDATE_TASK_ID,
    oldId,
    newId
  };
};

export const seedTasks = (tasks) => {
  return {
    type: SEED_TASKS,
    tasks
  };
};

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
