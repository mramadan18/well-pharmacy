import { useDispatch, useSelector } from "react-redux";
import CategoryTagItem from "./CategoryTagItem";
import { getCategories } from "@/toolkit/slices/categories/categoriesSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CategoriesTagsList = () => {
  const router = useRouter();
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="mt-4 overflow-x-scroll select-none">
      <div className="flex justify-start items-center gap-2 w-max pb-3">
        <div
          className={`${
            router.pathname === "/products"
              ? "text-white bg-second"
              : "text-black bg-[rgba(221,23,23,0.20)]"
          } py-1 px-2 rounded-md tracking-[1px] cursor-pointer`}
        >
          <Link href="/products">All</Link>
        </div>

        {categories.map((category) => (
          <CategoryTagItem key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesTagsList;
