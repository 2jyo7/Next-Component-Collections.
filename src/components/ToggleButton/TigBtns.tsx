import React from "react";

const TigBtns = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Toggle Buttons</h2>
      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <span className="relative inline-block w-10 h-6 bg-purple-400 rounded-full cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
          </span>
          <span className="text-gray-500">Toggle is on</span>
        </label>

        <label className="flex items-center gap-2">
          <span className="relative inline-block w-10 h-6 bg-gray-300 rounded-full cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-4"></span>
          </span>
          <span className="text-gray-500">Toggle is off</span>
        </label>
      </div>
    </div>
  );
};

export default TigBtns;
