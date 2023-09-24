import CategoryItem from "./CategoryItem";
import SubTitle from "@/components/Mobile/Utilities/SubTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";

const categories = [
  {
    id: 1,
    img: "category-2.png",
    title: "All medicines",
  },
  {
    id: 2,
    img: "category-1.png",
    title: "Top 50 medicines",
  },
  {
    id: 3,
    img: "category-3.png",
    title: "Natural oils and herbs",
  },
  {
    id: 4,
    img: "category-4.png",
    title: "Cosmetics",
  },
  {
    id: 5,
    img: "category-5.png",
    title: "Vitamins",
  },
  {
    id: 6,
    img: "category-6.png",
    title: "Skin care",
  },
  {
    id: 7,
    img: "category-2.png",
    title: "All medicines",
  },
  {
    id: 8,
    img: "category-1.png",
    title: "Top 50 medicines",
  },
  {
    id: 9,
    img: "category-3.png",
    title: "Natural oils and herbs",
  },
  {
    id: 10,
    img: "category-4.png",
    title: "Cosmetics",
  },
  {
    id: 11,
    img: "category-5.png",
    title: "Vitamins",
  },
  {
    id: 12,
    img: "category-6.png",
    title: "Skin care",
  },
];

const CategoriesList = () => {
  return (
    <section className="categories mt-[30px] lg:mt-[60px] text-center">
      <h2 className="text-primary tracking-[0.5px] mb-8 hidden lg:block">
        Categories
      </h2>
      <div className="container">
        <SubTitle title="Categories" link="View all" className="mb-7" />

        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6.5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryItem data={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategoriesList;
