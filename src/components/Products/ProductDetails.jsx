import { useState } from "react";
import Button from "../Utilities/Button";
import Quantity from "../Utilities/Quantity";

const ProductDetails = ({ data }) => {
  const [isRequest, setIsRequest] = useState(false);

  const handleRequest = () => {
    setIsRequest(true);
    dispatch(addToCart(formData));
  };
  return (
    <div className="flex flex-col justify-start items-start gap-2 lg:pr-10">
      <h5 className="text-sm">{data?.category?.name_en}</h5>
      <h4>{data?.name_en}</h4>
      <p className="text-[#828282]">{data?.description_en}</p>

      {isRequest ? (
        <Quantity />
      ) : (
        <Button className="w-full" onClick={handleRequest}>
          Make a request
        </Button>
      )}
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
