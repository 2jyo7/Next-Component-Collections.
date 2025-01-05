import React from "react";
import ButtonComponent from "./Button";
import { IoHeartCircleSharp } from "react-icons/io5";

const ButtonFieldsN = () => {
  return (
    <div className="p-4 ">
      {/* Button Component */}
      <div className="flex flex-wrap">
        <ButtonComponent
          btnStyle="bg-purple-700 m-2 px-6 py-3 rounded-md"
          title="DEFAULT"
        />

        <ButtonComponent
          btnStyle="bg-purple-700 m-2 px-8 py-3 rounded-3xl"
          title="Round"
        />

        <ButtonComponent
          btnStyle="bg-purple-700 m-2 px-8 py-3 rounded-lg"
          title="🤍With Icon"
        />

        <button
          className="bg-purple-600 p-3 rounded-full m-2"
          title="Heart Button"
          aria-label="Heart Button"
        >
          <IoHeartCircleSharp size={30} color="white" />
        </button>

        <button className="text-purple-800 m-2" title="Simple Button">
          SIMPLE
        </button>
      </div>
    </div>
  );
};

export default ButtonFieldsN;
