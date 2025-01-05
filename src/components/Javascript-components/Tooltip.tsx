"use client";

type Position = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  position: Position;
}

const Tooltip = ({ position }: TooltipProps) => {
  // Classes for positioning the tooltip
  const positionClasses: Record<Position, string> = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  };

  return (
    <div className="relative group inline-block">
      {/* Tooltip Trigger */}
      <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
        {position.toUpperCase()}
      </button>

      {/* Tooltip Content */}
      <div
        className={`absolute ${positionClasses[position]} hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 shadow-lg`}
      >
        Tooltip on {position}
      </div>
    </div>
  );
};

export default function TooltipDemo() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      <Tooltip position="left" />
      <Tooltip position="top" />
      <Tooltip position="bottom" />
      <Tooltip position="right" />
    </div>
  );
}
