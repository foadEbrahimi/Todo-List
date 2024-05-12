import React from 'react';
import Todo from './Todo';

export default function Todos({ tasks, onDelete, onComplated }) {
  return (
    <div className="space-y-2">
      {tasks ? (
        tasks.map((todo, index) => (
          <Todo
            key={index + 1}
            todo={todo}
            onDelete={onDelete}
            onComplated={onComplated}
          />
        ))
      ) : (
        <h1 className="text-2xl mt-5">You have no tasks yet :)</h1>
      )}
    </div>
  );
}
