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
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-50">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="border-b bg-gray-50">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Google Pixel Phone
              </th>
              <td class="px-6 py-4">Gray</td>
              <td class="px-6 py-4">Phone</td>
              <td class="px-6 py-4">$799</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600">
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Apple Watch 5
              </th>
              <td class="px-6 py-4">Red</td>
              <td class="px-6 py-4">Wearables</td>
              <td class="px-6 py-4">$999</td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YourOrders;
