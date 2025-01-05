import React from "react";

interface ProgressBarProps {
  value: number; // Progress percentage (0 to 100)
  bgCol: string;
  bgColLight: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  bgCol,
  bgColLight,
}) => {
  return (
    <div className={`w-full h-4 ${bgColLight}  rounded-full`}>
      <div
        className={`${bgCol} h-4 rounded-full transition-all duration-300`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
