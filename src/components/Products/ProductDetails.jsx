import Button from "../Utilities/Button";
import Quantity from "../Utilities/Quantity";

const ProductDetails = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 lg:pr-10">
      <h5 className="text-sm">Product category</h5>
      <h4>Panadol Extra XX mg</h4>
      <p className="text-[#828282]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <Quantity />
      {/* <Button className="w-full">Make a request</Button> */}
      <div className="mt-3 text-[#585859] font-semibold">
        <h5 className="text-primary mb-4">Product details</h5>
        <p className="mb-1">
          Brand:
          <span className="text-[#4F4F4F] font-normal"> Lorem Ipsum</span>
        </p>
        <p className="mb-1">
          Active ingredients:
          <span className="text-[#4F4F4F] font-normal"> Lorem Ipsum</span>
        </p>
        <p className="mb-1">
          Use: <span className="text-[#4F4F4F] font-normal"> Lorem Ipsum</span>
        </p>
        <p className="mb-1">
          Russian similar:
          <span className="text-[#4F4F4F] font-normal"> Lorem Ipsum</span>
        </p>
        <p className="mb-1">
          Description:{" "}
          <span className="text-[#4F4F4F] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
