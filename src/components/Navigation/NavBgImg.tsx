import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const NavBgImg = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center px-8 h-96"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1735181056575-1f05648efbad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8ZW58fDB8fHx8")',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar Content */}
      <div className="relative flex items-center justify-between w-full">
        {/* Title Section */}
        <h2 className="text-xl font-bold">Transparent Navbar</h2>

        {/* Links Section */}
        <div className="flex space-x-6">
          {/* Twitter */}
          <Link
            href="#home"
            className="flex items-center space-x-2 text-white text-lg font-medium transition duration-300 ease-in-out hover:underline"
          >
            <FaTwitter />
            <span>Twitter</span>
          </Link>

          {/* Facebook */}
          <Link
            href="#about"
            className="flex items-center space-x-2 text-white text-lg font-medium transition duration-300 ease-in-out hover:underline"
          >
            <FaFacebook />
            <span>Facebook</span>
          </Link>

          {/* Instagram */}
          <Link
            href="#contact"
            className="flex items-center space-x-2 text-white text-lg font-medium transition duration-300 ease-in-out hover:underline"
          >
            <FaInstagram />
            <span>Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBgImg;
