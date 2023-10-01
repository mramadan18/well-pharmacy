import OrderItem from "../Orders/OrderItem";
import { getCart } from "@/toolkit/slices/cart/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Utilities/Loading";

const YourCart = () => {
  const { loading, cart, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cart_items } = cart;

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="mt-6">
      <h3 className="mb-4">Your items</h3>
      {loading ? (
        <div className="text-center">
          <Loading />
        </div>
      ) : (
        <>
          {cart_items?.map((item) => (
            <OrderItem key={item.id} data={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default YourCart;
