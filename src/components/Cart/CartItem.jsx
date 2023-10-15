import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "@/toolkit/slices/cart/deleteFromCartSlice";
import { getCartItems } from "@/toolkit/slices/cart/cartItemsSlice";
import Quantity from "../Utilities/Quantity";

const CartItem = ({ data }) => {
  const [count, setCount] = useState(+data?.quantity);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFromCart(data.id));
    setTimeout(() => {
      dispatch(getCartItems());
    }, 500);
  };

  return (
    <div className="flex justify=-start items-center gap-4 bg-white border rounded-lg p-2 lg:p-6 mb-4 relative">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C3.582 0 0 3.582 0 8C0 12.419 3.582 16 8 16C12.418 16 16 12.419 16 8C16 3.582 12.418 0 8 0ZM5.70711 4.29329C5.31658 3.90277 4.68342 3.90277 4.29289 4.29329C3.90237 4.68381 3.90237 5.31698 4.29289 5.7075L6.58579 8.0004L4.29289 10.2933C3.90237 10.6838 3.90237 11.317 4.29289 11.7075C4.68342 12.098 5.31658 12.098 5.70711 11.7075L8 9.41461L10.2929 11.7075C10.6834 12.098 11.3166 12.098 11.7071 11.7075C12.0976 11.317 12.0976 10.6838 11.7071 10.2933L9.41421 8.0004L11.7071 5.7075C12.0976 5.31698 12.0976 4.68381 11.7071 4.29329C11.3166 3.90277 10.6834 3.90277 10.2929 4.29329L8 6.58618L5.70711 4.29329Z"
            fill="#DD1717"
          />
        </svg>
      </div>
      <img
        className="object-cover md:h-auto w-[120px] md:w-48 md:rounded-none md:rounded-l-lg"
        src={data?.product?.home_image}
        alt={data?.product?.name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 font-bold tracking-tight">{data?.product?.name}</h5>

        <div className="w-full lg:w-[200px] mt-2">
          <Quantity
            id={data?.id}
            quantity={data?.quantity}
            count={+count}
            setCount={setCount}
            stock={data?.product?.stock}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
