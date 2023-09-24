import Image from "next/image";
// Images
import order from "#/images/order_1.png";
import Quantity from "../Utilities/Quantity";

const OrderItem = () => {
  return (
    <div
      href="#"
      className="flex justify-center items-center bg-white border rounded-lg p-2 lg:p-6 mb-4"
    >
      <Image
        className="object-cover md:h-auto w-[120px] md:w-48 md:rounded-none md:rounded-l-lg"
        src={order}
        alt=""
        priority
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 font-bold tracking-tight ">Telfast 180mg</h5>
        <p className="mb-3 font-normal text-sm text-[#828282]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempo Lorem ipsum dolor sit amet, co....
        </p>
        <div className="w-full lg:w-[200px] mt-2">
          <Quantity />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
