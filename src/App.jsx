import React, { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todo/Todos';
import Form from './components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const init = [
  {
    task: 'foad',
    id: 9,
  },
  {
    task: 'miad',
    id: 10,
  },
];
export default function App() {
  const [tasks, setTasks] = useState(null);
  const notify = () =>
    toast('Your task Deleted', {
      type: 'error',
      className: '',
    });
  function handlerAddTask(newTask) {
    setTasks(tasks => {
      if (tasks) {
        return [...tasks, newTask];
      } else {
        return [newTask];
      }
    });
  }
  function handlerDeleteTask(id) {
    // console.log('delete', id);
    setTasks(tasks => {
      return tasks.filter(todo => todo.id !== id);
    });
    notify();
  }
  return (
    <div className="h-screen flex flex-col items-center pt-24 gap-y-6">
      <Header />
      <Form onAddTask={handlerAddTask} />
      <Todos tasks={tasks} onDelete={handlerDeleteTask} />
      <ToastContainer
        position="top-left"
        closeButton={false}
        autoClose={1500}
        hideProgressBar={false}
        transition={Bounce}
        pauseOnHover={false}
      />
    </div>
  );
}
