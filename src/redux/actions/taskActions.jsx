// src/redux/actions/taskActions.js
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const editTask = (task) => ({
  type: "EDIT_TASK",
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});

export const filterTasks = (filter) => ({
  type: "FILTER_TASKS",
  payload: filter,
});
