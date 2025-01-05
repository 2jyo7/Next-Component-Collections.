"use client";
import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressCol = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ">Progress Bar Example</h1>
      <div className="space-y-3">
        <ProgressBar value={70} bgCol="bg-blue-500" bgColLight="bg-blue-200" />
        <ProgressBar
          value={40}
          bgCol="bg-purple-500"
          bgColLight="bg-purple-200"
        />
        {/* progress bar with 3 colors */}

        <div className="w-full h-4 rounded-full ">
          <div
            className=" h-4 rounded-full transition-all duration-300"
            style={{
              width: "100%", // Adjust this based on your progress value
              background: `linear-gradient(to right, green 50%, orange 50% 75%, red 75%)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCol;
