import { addToCart } from "@/toolkit/slices/cart/addToCartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementCount = () => {
    setQuantity(quantity + 1);
  };

  const decrementCount = () => {
    if (count !== 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="grid grid-cols-[40px_1fr_40px] text-lg font-bold rounded-md overflow-hidden w-full">
      <button
        className="flex justify-center items-center bg-primary text-white py-2"
        onClick={decrementCount}
      >
        -
      </button>
      <span className="text-center text-primary bg-[#eee] py-2">
        {quantity}
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
