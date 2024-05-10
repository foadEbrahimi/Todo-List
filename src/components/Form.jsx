import React from 'react';

export default function Form() {
  return (
    <form>
      <div className="flex gap-x-3 bg-gray-700 px-4 py-2 rounded-lg">
        <input
          type="text"
          className="bg-transparent text-white text-lg input input-bordered"
          placeholder="Task name"
        />
        <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-500">
          Add
        </button>
      </div>
    </form>
  );
}
