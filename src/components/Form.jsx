import React, { useState } from 'react';

export default function Form({ onAddTask, onNotify }) {
  const [task, setTask] = useState('');
  function handlerAddTask(e) {
    e.preventDefault();
    // console.log('new task');

    if (!task) return;
    const id = crypto.randomUUID();
    const newTask = { task, id, complated: false };
    onAddTask(newTask);
    setTask('');
    onNotify('Your task added ❤', 'success');
  }
  return (
    <form
      className="flex gap-x-5 px-4 py-2 rounded-lg"
      onSubmit={handlerAddTask}
    >
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        type="text"
        className="bg-transparent text-white text-lg input input-bordered"
        placeholder="Task name"
      />
      <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-transparent hover:border-2 hover:text-black transition-all duration-500">
        Add
      </button>
    </form>
  );
}
