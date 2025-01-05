import Link from "next/link";
import React from "react";
import { CgGirl } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";

const IconMenu = () => {
  return (
    <div className="w-full  bg-blue-500 text-white mx-2 px-2 py-2 rounded-md flex items-center justify-between ">
      <div>
        <h2 className="text-xl font-semibold mb-4">Icons</h2>
      </div>
      <div className="mb-8 px-2 my-2 mx-4 text-md flex">
        <button className="mr-6 font-bold hover:underline">
          <IoIosMail />
        </button>
        <button className="mr-6 hover:underline">
          <CgGirl />
        </button>
        <div className="relative group">
          <button className="hover:underline">Setting &#x25BC;</button>
          <div className="absolute hidden group-hover:block bg-white text-black shadow-lg rounded-lg mt-2 p-2">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Action
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Another Header
            </Link>
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Some other header.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconMenu;
