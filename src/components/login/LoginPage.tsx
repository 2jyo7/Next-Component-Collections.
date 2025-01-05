import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md">
        <div className="bg-purple-500 text-white text-center py-4 rounded-t-lg">
          <h2 className="text-lg font-bold">Login</h2>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="#" className="text-white text-2xl">
              <FaTwitter />{" "}
            </Link>
            <Link href="#" className="text-white text-2xl">
              <FaFacebookSquare />{" "}
            </Link>
            <Link href="#" className="text-white text-2xl">
              <FaGooglePlusG />{" "}
            </Link>
          </div>
        </div>
        <div className="p-6">
          <p className="text-center text-sm text-gray-500 mb-4">
            Or Be Classical
          </p>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name..."
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                <IoMdPerson />{" "}
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email..."
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                <MdEmail />{" "}
              </span>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                <RiLockPasswordFill />{" "}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
