import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}

export default TaskList;
