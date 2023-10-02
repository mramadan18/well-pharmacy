import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import Filter from "@/components/Products/Filter/Filter";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";
import ExploreProducts from "@/components/Utilities/ExploreProducts";
import SearchInput from "@/components/Utilities/SearchInput";
import CategoriesTagsList from "@/components/Products/CategoriesTagsList";
import ProductsList from "@/components/Products/ProductsList";
import FilterTagsList from "@/components/Products/Filter/FilterTagsList";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoryProducts } from "@/toolkit/slices/categories/categoryProductsSlice";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const { loading, products } = useSelector((state) => state.categoryProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryProducts(categoryId));
  }, [categoryId]);
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile
        bg="#0f4392"
        btnBack={true}
        title="Our products"
        search={true}
      />
      <div className="container mt-5 lg:mt-36">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbActive href="/poducts">Our products</BreadcrumbActive>
        </BreadcrumbsList>
        <div className="hidden lg:block">
          <h2 className="text-primary text-center my-5">Our products</h2>
          <SearchInput />
        </div>
        <CategoriesTagsList />
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 mt-6">
          <div className="hidden lg:block">
            <Filter />
          </div>
          <div>
            <FilterTagsList />
            <ExploreProducts />

            <ProductsList loading={loading} products={products} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Category;
