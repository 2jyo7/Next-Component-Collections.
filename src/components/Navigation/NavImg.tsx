import React from "react";

const NavImg = () => {
  return (
    <div
      className={
        " flex w-full text-black rounded-md my-4 py-4 px-6 justify-between items-center shadow-lg"
      }
    >
      {/* Title Section */}
      <div>
        <h2 className="text-lg font-sm">Navbar with Profile</h2>
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-4">
        {/* Button 1 */}
        <button
          className={
            " flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg"
          }
        >
          DISCOVER
        </button>

        {/* Button 2 */}
        <button
          className={
            "flex items-center space-x-2 px-4 py-2 rounded text-sm font-medium shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg"
          }
        >
          WISHLIST
        </button>

        {/* Button 3 */}
        <button
          className={
            "flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg bg-pink-600 text-white"
          }
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default NavImg;
