import React from "react";
import ButtonComponent from "./Button";

const ButtonVariants = () => {
  return (
    <div>
      {" "}
      {/* Button Variants */}
      <div className="flex flex-wrap mt-24">
        <ButtonComponent
          btnStyle="bg-gray-700 m-2 px-6 py-3 rounded-md"
          title="DEFAULT"
        />
        <ButtonComponent
          btnStyle="bg-purple-700 m-2 px-6 py-3 rounded-md"
          title="PRIMARY"
        />
        <ButtonComponent
          btnStyle="bg-blue-500 m-2 px-6 py-3 rounded-md"
          title="INFO"
        />
        <ButtonComponent
          btnStyle="bg-green-500 m-2 px-6 py-3 rounded-md"
          title="SUCCESS"
        />
        <ButtonComponent
          btnStyle="bg-orange-500 m-2 px-6 py-3 rounded-md"
          title="WARNING"
        />
        <ButtonComponent
          btnStyle="bg-red-500 m-2 px-6 py-3 rounded-md"
          title="DANGER"
        />
        <ButtonComponent
          btnStyle="bg-pink-500 m-2 px-6 py-3 rounded-md"
          title="ROSE"
        />
      </div>
    </div>
  );
};

export default ButtonVariants;
