import React from 'react';

function TaskList({ tasks, setTasks }) {
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 border rounded-lg"
        >
          <span>{task.name}</span>
          <button
            onClick={() => deleteTask(index)}
            className="bg-red-500 text-white px-2 py-1 rounded-lg"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
