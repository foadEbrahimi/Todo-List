import React from 'react';

export default function Todo() {
  return (
    <div className="flex ">
      <div>
        <div class="flex items-center gap-x-2">
          <input type="radio" className="radio radio-success" />
          <p className="pb-1">gym</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
