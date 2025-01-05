import React from "react";

const TypoGHeader = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Typography Showcase
      </h1>

      {/* Typography Examples */}
      <div className="space-y-8 text-gray-700">
        <h1 className="text-6xl  tracking-tight">The Life of Material Kit</h1>
        <h2 className="text-5xl  tracking-tight">The Life of Material Kit</h2>
        <h3 className="text-4xl ">The Life of Material Kit</h3>
        <h4 className="text-3xl ">The Life of Material Kit</h4>
        <h5 className="text-2xl ">The Life of Material Kit</h5>
        <h6 className="text-xl ">The Life of Material Kit</h6>
      </div>
    </div>
  );
};

export default TypoGHeader;
