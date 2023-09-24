import OfferItemMobile from "./OfferItemMobile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SubTitle from "../../Utilities/SubTitle";

const OfferListMobile = () => {
  return (
    <section className="offer-mob mt-6 lg:hidden">
      <div className="container">
        <SubTitle title="Big deals" link="Check offers" className="my-2" />

        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <OfferItemMobile />
          </SwiperSlide>
          <SwiperSlide>
            <OfferItemMobile />
          </SwiperSlide>
          <SwiperSlide>
            <OfferItemMobile />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OfferListMobile;
