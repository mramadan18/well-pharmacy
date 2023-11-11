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
import { useState } from "react";
import { useRouter } from "next/router";
import NavBarMobile from "@/components/Mobile/NavBarMobile";
import { useTrans } from "@/locales/Helper";
import baseUrl from "@/baseURL";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const t=useTrans()
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { query } = useRouter();
  const  orderId  = query;

   const CancelOrder = 
    async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await baseUrl.patch(`/order/${orderId?.orderId}/`, {canseld:true},config);
        router.push('orders')

        return data;

      } catch (error) {
        
      }
   
    }
  

  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile bg="#0F4392" title="Confirmation" btnBack={true} />
      <NavBarMobile />

      <div className="flex flex-col justify-center items-center gap-6 lg:bg-white p-4 rounded-lg w-auto lg:w-[550px] mx-4 lg:mx-auto mt-5 lg:mt-32 lg:shadow-secondShadow text-center">
        <h1 className="text-primary">{t['Thank you']} </h1>
        <Image src={right} alt="Thank you" />
        <p className="px-10 text-lg">
          {t['Your order has been placed successfully, you will receive a call to confirm.']}
         
        </p>
        <p className="text-lg">{t['Get well soon!']} </p>
        <div className="flex justify-between items-center w-full gap-5">
          <button
            className="bg-transparent text-second py-2 rounded-md font-semibold tracking-[1px] border border-second w-1/2"
            onClick={() => setShowModal(true)}
          >
            {t['Cancel order']}
          </button>
          <Button className="w-1/2" onClick={() => router.push("/")}>
            {t['Go it']}
          </Button>
        </div>
        <Link href="/tracking" className="text-[#2C6ECB] font-bold">
          {t['Track your order']}
        </Link>
      </div>

      <Footer />

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="p-4 bg-white text-center rounded-lg w-auto lg:w-[600px]">
          <h3 className="text-primary">{t['Order cancellation']} </h3>
          <p className="mt-4 mb-3 text-lg">
            {t['Are you sure you want to cancel your order?']}
          </p>

          <div className="flex justify-between items-center w-full gap-5">
            <button
              className="bg-transparent text-second py-2 rounded-md font-semibold tracking-[1px] border border-second w-1/2"
              onClick={() => {
                CancelOrder()
                setTimeout(() => {
                  setShowModal(false)

                }, 2000);
              }}
            >
              {t['Yes, cancel']}
            </button>
            <Button className="w-1/2" onClick={() => setShowModal(false)}>
              {t['Keep it']}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Confirmation;
