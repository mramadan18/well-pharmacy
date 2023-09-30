import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// Components
import Button from "../Utilities/Button";
import Quantity from "../Utilities/Quantity";
import { addToCart } from "@/toolkit/slices/cart/addToCartSlice";
import { useState } from "react";
import Loading from "../Utilities/Loading";

const ProductCard = ({ data }) => {
  const [isRequest, setIsRequest] = useState(false);
  const { loading, product, error } = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  const formData = {
    product: data.id,
    quantity: 1,
  };

  const handleRequest = () => {
    setIsRequest(true);
    dispatch(addToCart(formData));
  };

  return (
    <div className="max-w-xs p-2 lg:p-4 bg-white border border-gray-200 rounded-lg">
      <Link
        href={`/products/${data.id}`}
        className="w-full mx-auto flex justify-center items-center shadow-secondShadow h-[170px] rounded-md overflow-hidden"
      >
        <img
          className="rounded-t-lg"
          src={data.home_image}
          alt={data.name_en}
        />
      </Link>
      <div className="pt-5 px-0 pb-0">
        <h5 className="mb-2 text-base font-bold tracking-tight">
          {data.name_en.length <= 30
            ? data.name_en
            : `${data.name_en.slice(0, 30)}...`}
        </h5>

        <p className="mb-3 text-[#828282]">
          {data.description_en.length <= 80
            ? data.description_en
            : `${data.description_en.slice(0, 80)}...`}
        </p>
        {isRequest ? (
          <>
            <Quantity />
          </>
        ) : (
          <>
            <Button className="w-full" onClick={handleRequest}>
              {loading ? <Loading size={22} /> : "Make a request"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
