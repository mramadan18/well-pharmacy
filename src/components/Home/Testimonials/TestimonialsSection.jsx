import { useEffect } from "react";
import Link from "next/link";
// Components
import TestimonialsItem from "./TestimonialsItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";
// Git data with redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "@/toolkit/slices/reviews/reviewsSlice";

const TestimonialsSection = () => {
  const { loading, reviews, error } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, []);
  return (
    <>
      {reviews.length && (
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
              {reviews.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialsItem data={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Link
            href="/all-reviews"
            className="text-[#2c6ecb] text-center font-bold mt-8 block"
          >
            Check all reviews
          </Link>
        </section>
      )}
    </>
  );
};

export default TestimonialsSection;
