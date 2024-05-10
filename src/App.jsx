import React from 'react';
import Header from './components/Header';
import Todos from './components/Todo/Todos';
import Form from './components/Form';
export default function App() {
  return (
    <div className="h-screen flex flex-col items-center pt-40 gap-y-6">
      <Header />
      <Form />
      <Todos />
    </div>
  );
}
