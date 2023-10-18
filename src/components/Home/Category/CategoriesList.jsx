import { useEffect } from "react";
// Components
import CategoryItem from "./CategoryItem";
import SubTitle from "@/components/Mobile/Utilities/SubTitle";
import Loading from "@/components/Utilities/Loading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper";

// Get data with redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/toolkit/slices/categories/categoriesSlice";
import { useTranslation } from "react-i18next";
import { useTrans } from "@/locales/Helper";

const CategoriesList = () => {
  const t=useTrans()

  // const { t } = useTranslation();
  const { loading, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <section className="categories mt-[30px] lg:mt-[60px] text-center">
      <h2 className="text-primary tracking-[0.5px] mb-8 hidden lg:block">
        {t["Categories"]}
      </h2>
      <div className="container">
        <SubTitle
          title={t["Categories"]}
          href="categories"
          link={t["View all"]}
          className="mb-7"
        />

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
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {loading && <Loading />}
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
