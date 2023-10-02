import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Utilities/Button";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";
import { createOrder } from "@/toolkit/slices/orders/createOrderSlice";

const PlaceOrder = ({ className }) => {
  const { cart_items } = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(createOrder());
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <div className={`bg-white py-6 px-4 ${className}`}>
      <div className="flex justify-start items-center gap-2 mb-3">
        <span className="bg-primary text-white flex justify-center items-center w-[32px] h-[32px] rounded-full">
          {cart_items?.count}
        </span>
        <p className="text-primary text-lg">Products have been selected</p>
      </div>
      <Button className="w-full" onClick={handlePlaceOrder}>
        Place order
      </Button>
      <p className="text-second text-sm text-center mt-3">
        Note that: your order will not be confirmed before you receive a call
        from us to let you know your order price to confirm.
      </p>
    </div>
  );
};

export default PlaceOrder;
