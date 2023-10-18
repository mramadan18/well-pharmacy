import OfferItemMobile from "./OfferItemMobile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import SubTitle from "../../Utilities/SubTitle";
import { useTranslation } from "react-i18next";

const OfferListMobile = () => {
  const { t } = useTranslation();

  return (
    <section className="offer-mob mt-6 lg:hidden">
      <div className="container">
        <SubTitle
          title={t("Big deals")}
          link={t("Check offers")}
          className="my-2"
        />

        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
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
