import React, { useState } from 'react';
import api from './api';

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/tasks', { title })
       .then(res => {
         onAdd(res.data);
         setTitle('');
       })
       .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="New task" 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
