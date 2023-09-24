import Link from "next/link";
import TestimonialsItem from "./TestimonialsItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const testimonials = [
  {
    id: 1,
    img: "testimonials-1.png",
    name: "User name",
    rate: 5,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 2,
    img: "testimonials-1.png",
    name: "User name",
    rate: 3,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 3,
    img: "testimonials-1.png",
    name: "User name",
    rate: 4,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 4,
    img: "testimonials-1.png",
    name: "User name",
    rate: 1,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 5,
    img: "testimonials-1.png",
    name: "User name",
    rate: 2,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 6,
    img: "testimonials-1.png",
    name: "User name",
    rate: 4,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials mt-[30px] lg:mt-[80px]">
      <h2 className="text-primary mb-8 text-center">Testimonials</h2>
      <div className="container relative h-[210px] text-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialsItem data={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Link
          href="/all-reviews"
          className="text-[#2c6ecb] font-bold mt-4 block"
        >
          Check all reviews
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsSection;
