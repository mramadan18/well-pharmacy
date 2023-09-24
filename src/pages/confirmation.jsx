import Image from "next/image";
import Link from "next/link";
// Components
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import Button from "@/components/Utilities/Button";
// Images
import right from "#/images/right_img.png";
import Footer from "@/components/Footer";
import Modal from "@/components/Utilities/Madal";

const Confirmation = () => {
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile bg="#0F4392" title="Confirmation" btnBack={true} />
      <div className="flex flex-col justify-center items-center gap-6 lg:bg-white p-4 rounded-lg w-auto lg:w-[500px] mx-4 lg:mx-auto mt-5 lg:mt-32 lg:shadow-secondShadow text-center">
        <h1 className="text-primary">Thank you</h1>
        <Image src={right} alt="Thank you" />
        <p className="px-10 text-lg">
          Your order has been placed successfully, you will receive a call to
          confirm.
        </p>
        <p className="text-lg">Get well soon!</p>
        <div className="flex justify-between items-center w-full gap-5">
          <button className="bg-transparent text-second py-2 rounded-md font-semibold tracking-[1px] border border-second w-1/2">
            Cancel order
          </button>
          <Button className="w-1/2">Go it</Button>
        </div>
        <p className="text-[#2C6ECB] font-bold">Track your order</p>
      </div>

      <Footer />

      <Modal showModal={false}>
        <div className="p-4 bg-white text-center rounded-lg w-auto lg:w-[600px]">
          <h3 className="text-primary">Order cancellation</h3>
          <p className="mt-4 mb-3 text-lg">
            Are you sure you want to cancel your order?
          </p>

          <div className="flex justify-between items-center w-full gap-5">
            <button className="bg-transparent text-second py-2 rounded-md font-semibold tracking-[1px] border border-second w-1/2">
              Yes, cancel
            </button>
            <Button className="w-1/2">Keep it</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Confirmation;
