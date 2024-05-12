import React, { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todo/Todos';
import Form from './components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom, ToastContainer, toast } from 'react-toastify';
export default function App() {
  const [tasks, setTasks] = useState(null);
  const notify = () =>
    toast('Your task Deleted', {
      type: 'error',
      className: '',
    });
  const notifyComplate = message =>
    toast(message, {
      type: 'info',
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
  function handlerComplateTask(id) {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, complated: !task.complated } : task
      )
    );
    notifyComplate('Your task status has changed');
  }
  return (
    <div className="h-screen flex flex-col items-center pt-24 gap-y-6">
      <Header />
      <Form onAddTask={handlerAddTask} />
      <Todos
        tasks={tasks}
        onDelete={handlerDeleteTask}
        onComplated={handlerComplateTask}
      />
      <ToastContainer
        position="top-left"
        closeButton={false}
        autoClose={1500}
        hideProgressBar={false}
        transition={Zoom}
        pauseOnHover={false}
      />

      <div className="absolute bottom-5 left-5">
        <a
          href="https://github.com/foadEbrahimi"
          className="text-white flex items-center"
          target="_blank"
        >
          <img src="logo2.png " alt="Logo" className="w-12" />
          Github | Foad Ebrahimi
        </a>
      </div>
    </div>
  );
}
