import React from "react";
import { FaTrash, FaPen } from "react-icons/fa";

export default function SampleTable() {
  const productsData = [
    {
      productName:
        "Apple MacBook Pro 17werqffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffewreghddddddddddddddddddddddddddddddddddddddddd",
      color:
        "Silverddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      category: "Laptop",
      price: "$2999",
    },
    {
      productName: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    // Add other products here
  ];

  return (
    <div className=" overflow-x-auto h-96">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Color</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="w-3/4">
          {productsData.map((product, index) => (
            <tr key={index}>
              <td className="whitespace-normal">{product.productName}</td>
              <td className="whitespace-normal">{product.color}</td>
              <td className="whitespace-normal">{product.category}</td>
              <td className="whitespace-normal">{product.price}</td>
              <td className="border px-4 py-2">
                <button>
                  <FaTrash />
                </button>
                <button>
                  <FaPen />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100">
            <th></th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Color</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
