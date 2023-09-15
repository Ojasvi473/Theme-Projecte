// src/redux/reducers/taskReducer.js
const initialState = {
  tasks: [
    // ... other tasks
  ],
  filter: "All",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        tasks: filteredTasks,
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
