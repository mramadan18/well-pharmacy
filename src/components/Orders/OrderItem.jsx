import { useEffect, useState } from "react";
import Quantity from "../Utilities/Quantity";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "@/toolkit/slices/cart/updateCartSlice";

const OrderItem = ({ data }) => {
  const [count, setCount] = useState(data?.quantity);

  return (
    <div className="flex justify-start items-center gap-4 bg-white border rounded-lg p-2 lg:p-6 mb-4">
      <img
        className="object-cover md:h-auto w-[120px] md:w-48 md:rounded-none md:rounded-l-lg"
        src={data?.product?.home_image}
        alt={data?.product?.name_en}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 font-bold tracking-tight">
          {data?.product?.name_en}
        </h5>
        <p className="mb-3 font-normal text-sm text-[#828282]">
          {data?.product?.description_en}
        </p>
        <div className="w-full lg:w-[200px] mt-2">
          <Quantity
            id={data?.id}
            quantity={data?.quantity}
            setCount={setCount}
            stock={data?.product?.stock}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
