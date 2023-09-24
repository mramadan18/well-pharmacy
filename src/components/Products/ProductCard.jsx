import Image from "next/image";
import Link from "next/link";
// Images
import productImg from "#/images/product_img.png";
import Button from "../Utilities/Button";
import Quantity from "../Utilities/Quantity";

const ProductCard = () => {
  return (
    <div className="max-w-xs p-2 lg:p-4 bg-white border border-gray-200 rounded-lg">
      <Link
        href="/"
        className="w-full mx-auto flex justify-center items-center shadow-secondShadow h-[170px] rounded-md"
      >
        <Image className="rounded-t-lg" src={productImg} alt="product" />
      </Link>
      <div className="pt-5 px-0 pb-0">
        <a href="#">
          <h5 className="mb-2 text-base font-bold tracking-tight">
            Panadol Extra XX mg
          </h5>
        </a>
        <p className="mb-3 text-[#828282]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempo....
        </p>
        <Quantity />
        {/* <Button className="w-full">Make a request</Button> */}
      </div>
    </div>
  );
};

export default ProductCard;
