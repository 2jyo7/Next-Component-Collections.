import React from "react";
import { CiSearch } from "react-icons/ci";

const NavOne = () => {
  return (
    <div className="flex w-full bg-pink-600 text-white rounded-md m-4 py-4 px-6 justify-between items-center shadow-lg">
      {/* Left Section: Brand and Links */}
      <div className="flex items-center space-x-6">
        <button className="text-lg font-bold hover:underline">Brand</button>
        <button className="hover:underline">Link</button>
        <button className="hover:underline">Link</button>
      </div>

      {/* Right Section: Search Bar */}
      <div className="flex items-center bg-white text-gray-600 rounded-full px-4 py-2 space-x-2">
        <input
          type="search"
          placeholder="Search"
          className="outline-none border-none bg-transparent w-full text-sm"
        />
        <button className="text-gray-600">
          <CiSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default NavOne;
