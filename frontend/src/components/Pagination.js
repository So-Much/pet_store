import React, { useState } from "react";

export default function Pagination({
  totalPages = 0,
  currentPage = 0,
  handlePagination = () => {},
}) {
  return (
    <div>
      {/* Hiển thị nút phân trang */}
      <div className="flex items-center justify-center gap-2 my-2">
        {/* Nút Previous */}
        <button
          className="px-4 py-1 rounded-md border-opacity-50 border border-collapse border-solid border-gray-800 hover:bg-slate-300"
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
        >
          Previous
        </button>
        <div className="flex items-center justify-center gap-2 my-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                style={{
                  backgroundColor: page === currentPage ? "#E3E1D9" : "#ffffff",
                }}
                className="px-4 py-1 rounded-md border-opacity-50 border border-collapse border-solid border-gray-800 hover:bg-slate-300"
                key={page}
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            )
          )}
          <button
            className="px-4 py-1 rounded-md border-opacity-50 border border-collapse border-solid border-gray-800 hover:bg-slate-300"
            disabled={currentPage === totalPages}
            onClick={() => handlePagination(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
