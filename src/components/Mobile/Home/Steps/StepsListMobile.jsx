import StepItemMobile from "./StepItemMobile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

const steps = [
  {
    id: 1,
    title: "Select your products",
    img: "step_1.png",
    desc: "You can contact our pharmacists for help and consultations",
  },
  {
    id: 2,
    title: "Confirm your order",
    img: "step_2.png",
    desc: "We will contact you with prices before we ship the order to you",
  },
  {
    id: 3,
    title: "Shipment and delivery",
    img: "step_3.png",
    desc: "After confirming your order price, we will deliver the order to your address",
  },
];

const StepsListMobile = () => {
  const { t } = useTranslation();
  const steps = [
    {
      id: 1,
      title: t["Select your products"],
      img: "step_1.png",
      desc: t["You can contact our pharmacists for help and consultations"],
    },
    {
      id: 2,
      title: t["Confirm your order"],
      img: "step_2.png",
      desc: t[
        "We will contact you with prices before we ship the order to you"
      ],
    },
    {
      id: 3,
      title: t["Shipment and delivery"],
      img: "step_3.png",
      desc: t[
        "After confirming your order price, we will deliver the order to your address"
      ],
    },
  ];
  return (
    <section className="steps lg:hidden mt-[30px]">
      <div className="container">
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
          {steps.map((step) => (
            <SwiperSlide key={step.id}>
              <StepItemMobile key={step.id} data={step} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StepsListMobile;
