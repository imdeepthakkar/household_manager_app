// src/components/Tasks/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <div>
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
