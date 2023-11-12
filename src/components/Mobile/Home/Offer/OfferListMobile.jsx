import OfferItemMobile from "./OfferItemMobile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import SubTitle from "../../Utilities/SubTitle";
import { useTrans } from "@/locales/Helper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSliderOffers } from "@/toolkit/slices/sliderOffersSlice";
import Loading from "@/components/Utilities/Loading";

const OfferListMobile = () => {
  const t = useTrans();
  const { loading, offers } = useSelector((state) => state.sliderOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderOffers());
  }, []);

  return (
    <section className="offer-mob mt-6 lg:hidden">
      <div className="container">
        <SubTitle
          title={t["Big deals"]}
          link={t["Check offers"]}
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
          {loading && <Loading />}
          {offers?.map((offer) => (
            <SwiperSlide key={offer.id}>
              <OfferItemMobile data={offer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OfferListMobile;
