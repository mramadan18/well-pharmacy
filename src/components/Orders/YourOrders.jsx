import { useEffect } from "react";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "@/toolkit/slices/orders/ordersSlice";
import Loading from "../Utilities/Loading";

const YourOrders = () => {
  const { loading, orders, error } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div className="mt-6">
      <h3 className="mb-4">Your orders</h3>

      {loading ? (
        <div className="text-center mx-auto">
          <Loading />
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-primary">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Order_id
                </th>
                <th scope="col" className="px-6 py-3">
                  Date created
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  Active
                </th>
                <th scope="col" className="px-6 py-3">
                  Total price
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            {orders?.count === 0 ? (
              <p>There are no requests</p>
            ) : (
              <tbody>
                {orders?.results?.map((order) => (
                  <OrderItem key={order.id} data={order} />
                ))}
              </tbody>
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default YourOrders;
