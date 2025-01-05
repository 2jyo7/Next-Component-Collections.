import React from "react";

const Badges1 = () => {
  return (
    <div className="flex space-x-5 m-10 justify-between items-center text-white">
      <span className="border rounded-full px-2 bg-gray-500 ">DEFAULT</span>
      <span className="border rounded-full px-2 bg-purple-500 ">PRIMARY</span>
      <span className="border rounded-full px-2 bg-blue-400 ">INFO</span>
      <span className="border rounded-full px-2 bg-green-500 ">SUCCESS</span>
      <span className="border rounded-full px-2 bg-yellow-500 ">WARNING</span>
      <span className="border rounded-full px-2 bg-red-500 ">DANGER</span>
      <span className="border rounded-full px-2 bg-pink-500 ">ROSE</span>
    </div>
  );
};

export default Badges1;
