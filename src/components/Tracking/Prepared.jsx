import Image from "next/image";
// Images
import receivedImg from "#/images/receivedImg.png";
import Button from "../Utilities/Button";

const Prepared = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto h-1 bg-[#ECC1C1] relative prepared">
        <span
          before="Received"
          className="absolute top-1/2 -left-[16px] -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full "
        ></span>
        <span
          before="Prepared"
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[16px] h-[16px] bg-second rounded-full active"
        ></span>
        <span
          before="On its way"
          className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[16px] h-[16px] bg-[#ECC1C1] rounded-full"
        ></span>
        <span
          before="Delivered"
          className="absolute top-1/2 left-full -translate-y-1/2 w-[16px] h-[16px] bg-[#ECC1C1] rounded-full"
        ></span>
      </div>

      <Image
        src={receivedImg}
        alt="Prepared"
        priority
        className="mx-auto mt-20"
      />

      <p className="text-2xl mt-10 max-w-[400px] mx-auto tracking-[1px]">
        We are preparing your order now. Get well soon!
      </p>

      <Button className="w-full mt-5">Back to our products</Button>
    </div>
  );
};

export default Prepared;
