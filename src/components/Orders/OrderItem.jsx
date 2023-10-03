import { deleteOrder } from "@/toolkit/slices/orders/deleteOrderSlice";
import { getOrders } from "@/toolkit/slices/orders/ordersSlice";
import moment from "moment";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const OrderItem = ({ data }) => {
  const { loading, order } = useSelector((state) => state.deleteOrder);
  const dispatch = useDispatch();

  const handleDeleteOrder = () => {
    dispatch(deleteOrder(data.id));

    setTimeout(() => {
      dispatch(getOrders());
    }, 700);
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Link href="/" className="underline">
          {data?.id}
        </Link>
      </th>
      <td className="px-6 py-4">{moment(data?.created).format("LLL")}</td>
      <td className="px-6 py-4">{data?.status}</td>
      <td className="px-6 py-4">{data?.active ? "Yes" : "No"}</td>
      <td className="px-6 py-4">{data?.total_price || "No price"}</td>
      <td className="px-6 py-4">
        <Link
          href={`/tracking/?orderId=${data.id}`}
          className="font-medium text-primary hover:underline"
        >
          View
        </Link>
      </td>
    </tr>
  );
};

export default OrderItem;
