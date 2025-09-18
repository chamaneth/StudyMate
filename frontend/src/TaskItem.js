import React, { useState } from 'react';

function TaskItem({ task, index, setTasks }) {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  const toggleComplete = async () => {
    const res = await fetch(`/api/tasks/${index}/complete`, { method: 'PUT' });
    const data = await res.json();
    setTasks(prev => prev.map((t, i) => i === index ? data : t));
  };

  const deleteTask = async () => {
    await fetch(`/api/tasks/${index}`, { method: 'DELETE' });
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  const toggleTimer = () => {
    setRunning(!running);
    if (!running) {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      task.interval = interval;
    } else {
      clearInterval(task.interval);
      // Update backend
      fetch(`/api/tasks/${index}/studyTime?seconds=${timer}`, { method: 'PUT' });
      setTimer(0);
    }
  };

  const formatTime = (sec) => `${Math.floor(sec/60)}:${sec%60 < 10 ? '0' : ''}${sec%60}`;

  return (
    <div className={`p-3 rounded-lg flex justify-between items-center ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
      <div>
        <h2 className={`font-bold ${task.completed ? 'line-through' : ''}`}>{task.name}</h2>
        <p>⏱️ {formatTime(task.studyTimeSeconds + timer)}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={toggleComplete} className="bg-blue-500 text-white px-3 py-1 rounded-lg">✔️</button>
        <button onClick={toggleTimer} className="bg-yellow-500 text-white px-3 py-1 rounded-lg">{running ? '⏹️ Stop' : '▶️ Start'}</button>
        <button onClick={deleteTask} className="bg-red-500 text-white px-3 py-1 rounded-lg">🗑️</button>
      </div>
    </div>
  );
}

export default TaskItem;
