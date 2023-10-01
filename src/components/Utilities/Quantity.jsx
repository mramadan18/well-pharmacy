import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { updateCart } from "@/toolkit/slices/cart/updateCartSlice";
import { useEffect, useState } from "react";

const Quantity = ({ id, quantity, stock }) => {
  const [count, setCount] = useState(quantity);
  const { loading } = useSelector((state) => state.updateCart);
  const dispatch = useDispatch();

  const incrementCount = () => {
    console.log(count, quantity);
    if (count < stock) {
      setCount(1 + count);
      +handleUpadateCart();
      console.log(count, quantity);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      handleUpadateCart();
    }
  };

  const handleUpadateCart = () => {
    const formData = {
      params: {
        quantity: count,
      },
      id,
    };
    dispatch(updateCart(formData));
  };

  useEffect(() => {}, [count]);

  return (
    <div className="grid grid-cols-[40px_1fr_40px] text-lg font-bold rounded-md overflow-hidden w-full">
      <button
        className="flex justify-center items-center bg-primary text-white py-2"
        onClick={decrementCount}
      >
        -
      </button>
      <span className="text-center text-primary bg-[#eee] py-2">
        {loading ? <Loading size={22} /> : <>{count || quantity}</>}
      </span>
      <button
        className="flex justify-center items-center bg-primary text-white py-2"
        onClick={incrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
