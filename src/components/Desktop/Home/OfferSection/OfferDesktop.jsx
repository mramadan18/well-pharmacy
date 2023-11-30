import Image from "next/image";
// Import components
import OfferItemDesktop from "./OfferItemDesktop";
// Import Images
import bgOffer from "#/images/bg_offer.png";
import offerIcon1 from "#/images/icons/offer_icon-1.png";
import offerImg from "#/images/offer-1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import baseUrl from "@/baseURL";
import { useEffect, useState } from "react";

const OfferDesktop = () => {
  const [data, setdata] = useState([]);
  const GetSlides = async () => {
    const { data } = await baseUrl.get("/settings/sliders/", {
      headers: { "Accept-Language": localStorage.getItem("lang") },
    });
    setdata(data?.results);
  };
  useEffect(() => {
    GetSlides();
  }, []);

  return (
    <section className="offer hidden lg:flex justify-between items-center mt-[60px] w-full h-[355px] bg-[#f5b9b9]">
      <div className="relative flex justify-center items-center w-[60%] h-[315px] ml-[2%]">
        <div className="absolute -left-[20px] z-10">
          <Image
            src={offerIcon1}
            style={{ width: "100%", height: "100%" }}
            alt="Next.js Logo"
            height={50}
            width={50}
            priority
          />
        </div>
        <div style={{ width: "100%", height: "95%" }} className="absolute">
          <Image
            src={bgOffer}
            style={{ width: "100%", height: "100%" }}
            alt="Next.js Logo"
            priority
          />
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-[60px]"
        >
          {data?.map((item) => (
            <SwiperSlide>
              <OfferItemDesktop item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mr-[12rem]">
        <Image
          src={offerImg}
          alt="Next.js Logo"
          width={200}
          height={180}
          priority
        />
      </div>
    </section>
  );
};

export default OfferDesktop;

export function getStaticPath() {}
