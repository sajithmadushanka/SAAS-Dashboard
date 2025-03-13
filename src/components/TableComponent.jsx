import React, { useState } from "react";

const TableComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }
  const itemsPerPage = 10;

  // Calculate the starting and ending index for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <table className="w-full -collapse  border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className=" p-2">Image</th>
            <th className=" p-2">Item</th>
            <th className=" p-2">Customer Name</th>
            <th className=" p-2">Total Amount</th>
            <th className=" p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((order, index) => (
            <tr key={index} className="text-center">
              <td className=" p-2">
                {order.ProductImage ? (
                  <img
                    src={order.ProductImage}
                    alt="Product"
                    className="w-20 h-16 object-cover rounded-lg"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td className=" p-2">{order.OrderItems}</td>
              <td className=" p-2">{order.CustomerName}</td>
              <td className=" p-2">${order.TotalAmount.toFixed(2)}</td>
              <td className=" p-2 text-center">
                <span
                  className="px-2 py-1 text-xs font-semibold text-white rounded-md"
                  style={{ backgroundColor: order.StatusBg }}
                >
                  {order.Status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="px-4 py-1 bg-blue-500 text-white rounded-full disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage * itemsPerPage >= data.length}
          className="px-4 py-1 bg-blue-500 text-white rounded-full disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
