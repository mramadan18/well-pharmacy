import { useEffect, useState } from "react";
import Button from "../Utilities/Button";
import Quantity from "../Utilities/Quantity";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/toolkit/slices/cart/addToCartSlice";
import Loading from "../Utilities/Loading";
import { useRouter } from "next/router";

const ProductDetails = ({ data, setIsLoadingBar }) => {
  const router = useRouter();
  const { loading, product } = useSelector((state) => state.addToCart);
  // const [isRequest, setIsRequest] = useState(false);
  // const [count, setCount] = useState(product?.quantity);
  const [isLoading, setIsLoading] = useState(loading);
  const dispatch = useDispatch();

  const handleRequest = async () => {
    if (isLoading) {
      if (localStorage.getItem("token")) {
        const formData = {
          product: data.id,
          quantity: 1,
        };

        await dispatch(addToCart(formData));

        setIsLoading(loading);
        setIsLoadingBar(true);
      } else {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    handleRequest();
  }, [isLoading]);

  return (
    <div className="flex flex-col justify-start items-start gap-2 lg:pr-10">
      <h5 className="text-sm">{data?.category?.name_en}</h5>
      <h4>{data?.name_en}</h4>
      <p className="text-[#828282]">{data?.description_en}</p>

      {/* {isRequest ? (
        <Quantity
          id={data?.id}
          quantity={product?.quantity}
          count={+count}
          setCount={setCount}
          stock={data?.product?.stock}
        />
      ) : (
        <Button className="w-full" onClick={() => setIsLoading(true)}>
          {isLoading ? <Loading size={22} /> : "Make a request"}
        </Button>
      )} */}

      <Button className="w-full" onClick={() => setIsLoading(true)}>
        {isLoading ? <Loading size={22} /> : "Make a request"}
      </Button>

      <div className="mt-3 text-[#585859] font-semibold">
        <h5 className="text-primary mb-4">Product details</h5>
        <p className="mb-1">
          Brand:
          <span className="text-[#4F4F4F] font-normal"> Lorem Ipsum</span>
        </p>
        <p className="mb-1">
          Active ingredients:
          <span className="text-[#4F4F4F] font-normal">
            {" "}
            {data?.active_ingredient_en}
          </span>
        </p>
        <p className="mb-1">
          Use: <span className="text-[#4F4F4F] font-normal"> Lorem Ipsum</span>
        </p>
        <p className="mb-1">
          Russian similar:{" "}
          <span className="text-[#4F4F4F] font-normal">
            {data.russian_similar || ""}
          </span>
        </p>
        <p className="mb-1">
          Description:{" "}
          <span className="text-[#4F4F4F] font-normal">
            {data?.description_en}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
