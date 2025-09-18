import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask) return;
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newTask })
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setNewTask('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 p-8">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">📚 StudyMate</h1>
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          />
          <button onClick={addTask} className="bg-purple-500 text-white px-4 rounded-lg">Add</button>
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
