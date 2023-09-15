// src/components/TaskItem.js
import React from "react";
import useTasks from "../hooks/useTasks";

const TaskItem = ({ task }) => {
  const { edit, remove } = useTasks();

  const handleToggleComplete = () => {
    edit({ ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    remove(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleToggleComplete}>
        {task.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
