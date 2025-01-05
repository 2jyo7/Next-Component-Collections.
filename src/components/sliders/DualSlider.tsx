"use client";
import React, { useState } from "react";

const DualSlider: React.FC = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(70);

  // Handler for minimum value slider
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Prevent overlap

    setMinValue(value);
  };
  console.log(minValue, maxValue);

  // Handler for maximum value slider
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Prevent overlap
    setMaxValue(value);
  };

  console.log(minValue, maxValue);

  // Handler for manual input of minValue
  const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Prevent overlap
    setMinValue(value);
  };

  // Handler for manual input of maxValue
  const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Prevent overlap
    setMaxValue(value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full max-w-xl">
        {/* Track Background */}
        <div className="absolute h-2 w-full bg-gray-200 rounded"></div>

        {/* Active Range Track */}
        <div
          className="absolute h-2 bg-purple-500 rounded" // Active track color
          style={{
            left: `${(minValue / 100) * 100}%`,
            right: `${100 - (maxValue / 100) * 100}%`,
          }}
        ></div>

        {/* Range Inputs */}
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={minValue}
          onChange={handleMinChange}
          className="absolute z-20 h-2 w-full opacity-0 cursor-pointer"
        />
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute z-20 h-2 w-full opacity-0 cursor-pointer"
        />

        {/* Slider Thumbs */}
        <div
          className="absolute z-30 w-6 h-6 bg-blue-500 rounded-full -top-2 transform -translate-x-1/2"
          style={{
            left: `${(minValue / 100) * 100}%`,
          }}
        ></div>
        <div
          className="absolute z-30 w-6 h-6 bg-blue-500 rounded-full -top-2 transform -translate-x-1/2"
          style={{
            left: `${(maxValue / 100) * 100}%`,
          }}
        ></div>
      </div>

      {/* Input Fields for Manual Adjustment */}
      <div className="mt-4 flex space-x-4">
        <div className="flex flex-col items-center">
          {/* <label className="text-sm font-medium">Min Value</label> */}
          <input
            type="number"
            min={0}
            max={100}
            value={minValue}
            onChange={handleMinInput}
            className="w-16 px-2 py-1 border rounded text-center"
          />
        </div>
        <div className="flex flex-col items-center">
          {/* <label className="text-sm font-medium">Max Value</label> */}
          <input
            type="number"
            min={0}
            max={100}
            value={maxValue}
            onChange={handleMaxInput}
            className="w-16 px-2 py-1 border rounded text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default DualSlider;
