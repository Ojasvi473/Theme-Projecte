// src/components/TaskList.js
import React from "react";
import TaskItem from "./TaskItem";
import useTasks from "../hooks/useTasks";

const TaskList = () => {
  const { tasks, filter } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
