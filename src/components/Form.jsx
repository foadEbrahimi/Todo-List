import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form() {
  const [task, setTask] = useState('');
  const notify = () =>
    toast('تسک شما با موفقیت ثبت شد', {
      type: 'success',
      isLoading: false,
    });
  function handlerAddTask(e) {
    e.preventDefault();
    // console.log('new task');

    if (!task) return;

    const id = crypto.randomUUID();
    const newTask = { task, id };
    console.log(newTask);
    setTask('');
    notify();
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
