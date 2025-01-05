import React from "react";

const Checkboxes = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold mb-2">Checkboxes</h2>
      {/* Checkbox with Label for better accessibility */}
      <label className="flex items-center gap-2">
        <input type="checkbox" value="Unchecked" className="cursor-pointer" />
        <span className="text-gray-500">Unchecked</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          value="Checked"
          className="cursor-pointer "
          defaultChecked
        />
        <span className="text-gray-500">Checked</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          value="Disabled Unchecked"
          disabled
          className="cursor-not-allowed"
        />
        <span className="text-gray-300">Disabled Unchecked</span>
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          value="Disabled Checked"
          disabled
          defaultChecked
          className="cursor-not-allowed"
        />
        <span className="text-gray-300">Disabled Checked</span>
      </label>
    </div>
  );
};

export default Checkboxes;
