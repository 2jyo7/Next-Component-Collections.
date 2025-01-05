import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const getButtonStyles = (page: number) => {
    return `px-4 py-2 rounded-full border ${
      currentPage === page
        ? "bg-purple-600 text-white border-purple-600"
        : "bg-white text-gray-600 border-gray-300 hover:bg-purple-100"
    }`;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full border border-gray-300 ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-600 hover:bg-purple-100"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={getButtonStyles(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full border border-gray-300 ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-gray-600 hover:bg-purple-100"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
