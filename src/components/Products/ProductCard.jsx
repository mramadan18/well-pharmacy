import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
// Components
import Button from "../Utilities/Button";
import { addToCart } from "@/toolkit/slices/cart/addToCartSlice";
import Loading from "../Utilities/Loading";
import { useEffect, useState } from "react";
import { getNotifications } from "@/toolkit/slices/notifications/notificationsSlice";
import { useRouter } from "next/router";
import { useTrans } from "@/locales/Helper";

const ProductCard = ({ data }) => {
const t=  useTrans()
  const router = useRouter();
  const { loading } = useSelector((state) => state.addToCart);
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
        dispatch(getNotifications());
      } else {
        router.push("/login");
      }
    }
  };

  useEffect(() => {
    handleRequest();
  }, [isLoading]);

  return (
    <div className="max-w-xs p-2 lg:p-4 bg-white border border-gray-200 rounded-lg">
      <Link
        href={`/products/${data.id}`}
        className="w-full mx-auto flex justify-center items-center shadow-secondShadow h-[170px] rounded-md overflow-hidden"
      >
        <img
          className="rounded-t-lg"
          src={data.home_image || "/images/not_found.png"}
          alt={data.name}
        />
      </Link>
      <div className="pt-5 px-0 pb-0">
        <h5 className="mb-2 text-base font-bold tracking-tight h-6 overflow-hidden">
          {data.name.length <= 30 ? data.name : `${data.name.slice(0, 20)}...`}
        </h5>

        {/* <p
          className="mb-3 text-[#828282] h-12 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: data.description_en }}
        /> */}
        <Button className="w-full" onClick={() => setIsLoading(true)}>
          {isLoading ? <Loading size={22} /> : t["Make A Request"]}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
