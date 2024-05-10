import React from 'react';

export default function Form() {
  return (
    <form className="flex gap-x-5 px-4 py-2 rounded-lg">
      <input
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
