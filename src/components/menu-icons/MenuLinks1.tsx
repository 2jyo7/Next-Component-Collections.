import Link from "next/link";
import React from "react";

const MenuLinks1 = () => {
  return (
    <div className="w-full bg-purple-700 text-white mx-2 px-2 py-2 rounded-md">
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
      </div> */}
      <div className="mb-8 flex items-center justify-start px-2 my-2 mx-4 text-md">
        <button className="mr-6 font-bold hover:underline">Menu</button>
        <button className="mr-6 hover:underline">Link</button>
        <button className="mr-6 hover:underline">Link</button>{" "}
        <div className="relative group">
          <button className="hover:underline">Dropdown &#x25BC;</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg mt-2 p-2">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Action
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Write
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Reading
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks1;
