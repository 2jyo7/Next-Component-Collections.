import React from "react";
import ButtonComponent from "./Button";

const ButtonSizes = () => {
  return (
    <div>
      {/* Button Sizes */}
      <div className="flex flex-wrap mt-24">
        <ButtonComponent
          btnStyle="bg-gradient-to-r from-purple-600 to-purple-800 rounded-md my-8 px-7 py-2 text-sm shadow-lg"
          title="SMALL"
        />
        <ButtonComponent
          btnStyle="bg-purple-700 px-8 py-2 my-6 rounded-lg"
          title="REGULAR"
        />
        <ButtonComponent
          btnStyle="bg-purple-700 px-10 py-2 my-5 rounded-lg"
          title="LARGE"
        />
      </div>
    </div>
  );
};

export default ButtonSizes;
