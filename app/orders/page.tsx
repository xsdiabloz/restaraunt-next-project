import React from "react";

const CartOrders = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1124234</td>
            <td className="py-6 px-1">43</td>
            <td className="py-6 px-1">124</td>
            <td className="hidden md:block py-6 px-1">fghfgh</td>
            <td className="py-6 px-1">fhfh</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1124234</td>
            <td className="py-6 px-1">43</td>
            <td className="py-6 px-1">124</td>
            <td className="hidden md:block py-6 px-1">fghfgh</td>
            <td className="py-6 px-1">fhfh</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1124234</td>
            <td className="py-6 px-1">43</td>
            <td className="py-6 px-1">124</td>
            <td className="hidden md:block py-6 px-1">fghfgh</td>
            <td className="py-6 px-1">fhfh</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartOrders;
