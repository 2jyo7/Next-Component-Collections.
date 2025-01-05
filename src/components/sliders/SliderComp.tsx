"use client";
import React, { useState } from "react";

const Slider: React.FC = () => {
  const [value, setValue] = useState(50); // Initial value of the slider

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Slider */}
      <div className="w-full max-w-lg">
        <input
          type="range"
          min="0"
          max="100"
          step={1}
          value={value}
          onChange={handleChange}
          className="block w-full py-2 mt-2 text-purple-700 bg-purple-400 border border-purple-300 rounded-md focus:outline-none focus:ring"
        />
      </div>
    </div>
  );
};

export default Slider;
