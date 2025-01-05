import React from "react";
import InputsComp from "./InputsComp";
import { IoMdPeople } from "react-icons/io";

const InputField = () => {
  return (
    <div className="max-w-lg mx-auto space-y-6 mt-24 mb-12 flex flex-col">
      <div className="flex items-center">
        <InputsComp
          style="border-b-2 placeholder-gray-400 border-gray-400 mr-3"
          placeholder="Regular"
        />
      </div>
      <div className="flex items-center">
        <InputsComp
          style="border-b-2 placeholder-gray-400 border-gray-400 mr-3"
          placeholder="With Floating Label"
        />
      </div>
      {/* Success Input */}
      <div className="flex items-center">
        <InputsComp
          style="border-b-2 placeholder-green-500 border-gray-400 mr-3 "
          placeholder="Success input"
        />
      </div>

      <div className="flex items-center">
        <InputsComp
          style="border-b-2 placeholder-red-500 border-gray-400 mr-3"
          placeholder="Error input"
        />
      </div>
      <div className="flex items-center">
        <InputsComp
          style="border-b-2 placeholder-gray-500 border-gray-400 mr-3 "
          placeholder=" With material Icons"
          icon={<IoMdPeople />}
        />
      </div>
      <div className="flex items-center">
        <InputsComp
          style="border-b-2 placeholder-gray-500 border-gray-400 mr-3"
          placeholder="With Font Awesome Icons"
          icon={<IoMdPeople />}
        />
      </div>
    </div>
  );
};

export default InputField;
