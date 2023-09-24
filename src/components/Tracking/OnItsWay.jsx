import Image from "next/image";
// Images
import onItsWay from "#/images/on_its_way.png";
import Button from "../Utilities/Button";

const OnItsWay = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto h-1 bg-[#ECC1C1] relative on-its-way">
        <span
          before="Received"
          className="absolute top-1/2 -left-[16px] -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full"
        ></span>
        <span
          before="Prepared"
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full"
        ></span>
        <span
          before="On its way"
          className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full active"
        ></span>
        <span
          before="Delivered"
          className="absolute top-1/2 left-full -translate-y-1/2 w-[16px] h-[16px] bg-[#ECC1C1] rounded-full"
        ></span>
      </div>

      <Image
        src={onItsWay}
        alt="On its way"
        priority
        className="mx-auto mt-20"
      />

      <p className="text-2xl mt-10 max-w-[400px] mx-auto tracking-[1px]">
        Your order is on its way to you now. Get ready!
      </p>

      <Button className="w-full mt-5">Back to our products</Button>
    </div>
  );
};

export default OnItsWay;
