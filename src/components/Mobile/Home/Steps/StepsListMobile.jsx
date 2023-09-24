import StepItemMobile from "./StepItemMobile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

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
  return (
    <section className="steps lg:hidden mt-[30px]">
      <div className="container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
