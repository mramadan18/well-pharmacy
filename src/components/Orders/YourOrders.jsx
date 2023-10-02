import { useEffect } from "react";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "@/toolkit/slices/orders/ordersSlice";

const YourOrders = () => {
  const { loading, orders, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="mt-6">
      <h3 className="mb-4">Your orders</h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full flex flex-row flex-no-wrap bg-white rounded-lg overflow-hidden my-5">
          <thead className="text-white">
            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left" width="110px">
                Actions
              </th>
            </tr>
            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left" width="110px">
                Actions
              </th>
            </tr>
            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left" width="110px">
                Actions
              </th>
            </tr>
            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left" width="110px">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="flex-1 sm:flex-none">
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                John Covv
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                contato@johncovv.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                Michael Jackson
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                m_jackson@mail.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                Julia
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                julia@mail.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">
                Martin Madrazo
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                martin.madrazo@mail.com
              </td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YourOrders;
