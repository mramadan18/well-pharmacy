import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "@/toolkit/slices/cart/updateCartSlice";
import Loading from "./Loading";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";

const Quantity = ({ id, quantity, stock, count, setCount }) => {
  const { loading } = useSelector((state) => state.updateCart);
  const dispatch = useDispatch();

  const incrementCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(+count - 1);
    }
  };

  const handleUpadateCart = () => {
    const formData = {
      params: {
        quantity: +count,
      },
      id,
    };

    dispatch(updateCart(formData));
  };

  useEffect(() => {
    if (count !== quantity) {
      handleUpadateCart();
      setTimeout(() => {
        dispatch(getCartItems());
      }, 400);
    }
  }, [count]);

  return (
    <div className="grid grid-cols-[40px_1fr_40px] text-lg font-bold rounded-md overflow-hidden w-full">
      <button
        className="flex justify-center items-center bg-primary text-white py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={decrementCount}
        disabled={count === 1}
      >
        -
      </button>
      <span className="text-center text-primary bg-[#eee] py-2">
        {loading ? <Loading size={22} /> : <>{count}</>}
      </span>
      <button
        className="flex justify-center items-center bg-primary text-white py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={incrementCount}
        disabled={count === stock}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
