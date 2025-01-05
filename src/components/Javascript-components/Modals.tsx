"use client";
// components/Modal.jsx
import { useState } from "react";
import { MdLibraryBooks } from "react-icons/md";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-purple-600 text-white text-xl px-4 py-2 rounded flex justify-between items-center gap-2"
      >
        <MdLibraryBooks /> Classic
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-80 p-4 rounded shadow-lg">
            {/* Modal Title */}
            <h3 className="text-lg font-bold">Modal Title</h3>

            {/* Modal Content */}
            <p className="text-sm text-gray-700 mt-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

            {/* Modal Actions */}
            <div className="flex justify-end mt-4 space-x-4">
              <button className=" text-black hover:text-white px-4 py-2 rounded hover:bg-gray-500">
                Nice Button
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
