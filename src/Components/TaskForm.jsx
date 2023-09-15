// src/components/TaskForm.js
import React, { useState } from "react";
import useTasks from "../hooks/useTasks";

const TaskForm = () => {
  const { add } = useTasks();

  const [task, setTask] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (task.title.length > 0 && task.description.length > 0) {
      add(task);
      setTask({ title: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={task.title}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Task description"
        value={task.description}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
