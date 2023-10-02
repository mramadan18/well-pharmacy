import CategoryItemMobile from "@/components/Mobile/Category/CategoryItemMobile";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import ExploreProducts from "@/components/Utilities/ExploreProducts";
import { getCategories } from "@/toolkit/slices/categories/categoriesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const {
    loading,
    categories: categoriesData,
    error,
  } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [loading]);

  return (
    <div>
      <HeaderMobile bg="#0F4392" title="Categories" btnBack={true} />
      <div className="container mt-6">
        <ExploreProducts />
        <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
          {categoriesData.map((category) => (
            <CategoryItemMobile key={category.id} data={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
