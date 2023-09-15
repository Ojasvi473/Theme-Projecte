// src/hooks/useTasks.js
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  editTask,
  deleteTask,
  filterTasks,
} from "../redux/actions/taskActions";

const useTasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const add = (task) => {
    // Generate a unique ID for the task
    const taskId = Date.now();
    dispatch(addTask({ ...task, id: taskId }));
  };

  const edit = (task) => {
    dispatch(editTask(task));
  };

  const remove = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const filterBy = (filter) => {
    dispatch(filterTasks(filter));
  };

  return { tasks, filter, add, edit, remove, filterBy };
};

export default useTasks;
