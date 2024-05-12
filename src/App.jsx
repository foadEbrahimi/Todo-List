import React, { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todo/Todos';
import Form from './components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
export default function App() {
  const [tasks, setTasks] = useState(null);
  const notify = (message, type) =>
    toast(message, {
      type: type,
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
    setTasks(tasks => {
      return tasks.filter(todo => todo.id !== id);
    });
    notify('Your task Deleted', 'error');
  }
  function handlerComplateTask(id) {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, complated: !task.complated } : task
      )
    );
    notify('Your task status has changed', 'info');
  }
  return (
    <div className="h-screen flex flex-col items-center pt-24 gap-y-6">
      <Header />
      <Form onAddTask={handlerAddTask} onNotify={notify} />
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
        transition={Flip}
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
