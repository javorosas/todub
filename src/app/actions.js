/* globals fetch */

import routes from './routes';
import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK, UPDATE_TASK_ID, SEED_TASKS } from './actionTypes';

const jsonBodyHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

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

export const fetchTasks = () => {
  return function (dispatch) {
    return fetch(routes.getAllTasks())
      .then(response => response.json())
      .then(response => {
        dispatch(seedTasks(response.tasks.map(({text, isCompleted, _id}) => {
          return {
            text,
            isCompleted,
            id: _id
          };
        })));
      });
  };
};

export const deleteTask = (id) => {
  return function (dispatch) {
    dispatch(removeTask(id));
    fetch(routes.removeTask(id), {
      method: 'DELETE'
    });
  };
};

export const editCompleted = (id, isCompleted) => {
  return function (dispatch) {
    dispatch(toggleTask(id));
    fetch(routes.markCompleted(id), {
      method: 'PUT',
      headers: jsonBodyHeaders,
      body: JSON.stringify({isCompleted})
    });
  };
};

export const createTask = (text, id) => {
  return function (dispatch) {
    dispatch(addTask(text, id));
    fetch(routes.postTask(), {
      method: 'POST',
      headers: jsonBodyHeaders,
      body: JSON.stringify({text})
    })
      .then(response => response.json())
      .then(response => {
        dispatch(updateTaskId(id, response.task._id));
      });
  };
};
