import React from "react";

interface inputComponent {
  style: string;
  placeholder: string;
  icon?: React.ReactNode; // Optional prop for including an icon
}

const InputsComp = ({ style, placeholder, icon }: inputComponent) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          {icon}
        </div>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          icon ? "pl-10" : ""
        } ${style}`}
      />
    </div>
  );
};

export default InputsComp;
