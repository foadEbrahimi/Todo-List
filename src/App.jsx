import React from 'react';
import Header from './components/Header';
import Todos from './components/Todo/Todos';
import Form from './components/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
export default function App() {
  return (
    <div className="h-screen flex flex-col items-center pt-24 gap-y-6">
      <Header />
      <Form />
      <Todos />

      <ToastContainer
        position="top-right"
        closeButton={false}
        rtl={true}
        autoClose={3000}
        hideProgressBar={false}
        transition={Bounce}
        pauseOnHover={false}
      />
    </div>
  );
}
