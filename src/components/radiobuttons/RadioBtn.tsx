import React from "react";

const RadioBtn = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Radio Buttons</h2>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="radio"
          className="cursor-pointer h-5 w-5 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-purple-300"
        />
        <span className="text-gray-500">First Radio</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="radio"
          defaultChecked
          className="cursor-pointer h-5 w-5 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-purple-300"
        />
        <span className="text-gray-500">Second Radio</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="radio"
          defaultChecked
          disabled
          aria-disabled="true"
          className="cursor-pointer h-5 w-5 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-purple-300"
        />
        <span className="text-gray-500">Disabled checked Radio</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="radio"
          name="radio"
          disabled
          aria-disabled="true"
          className="cursor-pointer h-5 w-5 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-purple-300"
        />
        <span className="text-gray-500">Disabled unchecked Radio</span>
      </label>
    </div>
  );
};

export default RadioBtn;
