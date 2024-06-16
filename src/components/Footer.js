// components/Footer.js
import { useState } from "react";

const Footer = () => {
  const [displayCount, setDisplayCount] = useState(15);
  const totalItems = 104;
  const totalPages = Math.ceil(totalItems / displayCount);
  const [currentPage, setCurrentPage] = useState(2);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <span className="mr-2 text-xs">Displaying</span>
        <select
          value={displayCount}
          onChange={(e) => setDisplayCount(Number(e.target.value))}
          className="mr-2 border rounded text-xs"
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <span className="text-xs">out of {totalItems}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="p-2 border rounded text-xs"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`p-2 border rounded text-xs ${
              currentPage === number ? "bg-gray-300" : ""
            }`}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </button>
        ))}

        <button
          className="p-2 border rounded text-xs"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Footer;
