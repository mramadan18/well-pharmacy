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
      {orders?.results?.map((order) => (
        <OrderItem key={order.id} data={order} />
      ))}
    </div>
  );
};

export default YourOrders;
