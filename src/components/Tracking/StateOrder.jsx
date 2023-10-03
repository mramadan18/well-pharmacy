import { useRouter } from "next/router";
import Delivered from "./Delivered";
import OnItsWay from "./OnItsWay";
import Prepared from "./Prepared";
import Received from "./Received";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "@/toolkit/slices/orders/orderSlice";
import Loading from "../Utilities/Loading";

const StateOrder = () => {
  const { query } = useRouter();
  const { orderId } = query;

  const { loading, order } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleShowState = () => {
    if (order.status === "Received") {
      return <Received />;
    }
    if (order.status === "Prepared") {
      return <Prepared />;
    }
    if (order.status === "ON_ITS_WAY") {
      return <OnItsWay />;
    }
    if (order.status === "Delivered") {
      return <Delivered />;
    }
  };

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [query]);

  return (
    <div className="state-tracking text-center mt-8 mx-auto lg:bg-white p-6 rounded-lg max-w-xl lg:shadow-secondShadow">
      <h2 className="text-primary mb-6 hidden lg:block">Order Tracking</h2>
      {loading ? (
        <div className="text-center">
          <Loading />
        </div>
      ) : (
        <>{handleShowState()}</>
      )}
    </div>
  );
};

export default StateOrder;
