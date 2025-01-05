"use client";

import React, { useState } from "react";
import Pagination from "./Pazination";

const MainPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    console.log(`Page changed to: ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="p-4 ">
      <h1 className="text-center text-xl font-bold mb-4">Pagination Example</h1>
      <div className="py-4">
        {/* Page Numbers */}
        {[...Array(12)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === index + 1
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-600 border-gray-300 hover:bg-purple-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Pagination
        totalPages={12} // Adjust the total number of pages
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainPagination;
