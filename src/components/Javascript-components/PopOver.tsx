"use client";

import { useState } from "react";

// Define a type for allowed positions
type Position = "top" | "bottom" | "left" | "right";

const Popover = ({ position }: { position: Position }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Classes for positioning the popover content
  const positionClasses: Record<Position, string> = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  };

  return (
    <div className="relative inline-block">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        {position.toUpperCase()}
      </button>

      {/* Popover Content */}
      {isOpen && (
        <div
          className={`absolute ${positionClasses[position]} bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-48`}
        >
          <h3 className="text-sm font-bold text-gray-800">
            Popover {position}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            This is a {position} popover.Here will be some very useful
            information about his popover.
          </p>
        </div>
      )}
    </div>
  );
};

export default function PopoverDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      <Popover position="left" />
      <Popover position="top" />
      <Popover position="bottom" />
      <Popover position="right" />
    </div>
  );
}
