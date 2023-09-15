// src/components/TaskManager.js
import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";

const TaskManager = () => {
  return (
    <div className="task-manager">
      <TaskForm />
      <FilterButtons />
      <TaskList />
    </div>
  );
};

export default TaskManager;
