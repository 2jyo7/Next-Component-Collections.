import React from "react";

interface BTNprops {
  title: string;
  btnStyle: string;
}

const ButtonComponent: React.FC<BTNprops> = ({ title, btnStyle }) => {
  return (
    <button
      className={`border text-white shadow-md ${btnStyle}`}
      aria-label={title} // Added for accessibility
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
