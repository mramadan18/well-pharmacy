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
// import FilterTagsList from "@/components/Products/Filter/FilterTagsList";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/toolkit/slices/products/productsSlice";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import NavBarMobile from "@/components/Mobile/NavBarMobile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTrans } from "@/locales/Helper";

const Products = () => {
  const t = useTrans();
  const router = useRouter();
  const [uses, setuses] = useState("");
  const { page } = router.query;
  const { loading, products, pagesCount } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setActivePage(selected);
    router.push(`/products?page=${selected + 1}`);
  };

  useEffect(() => {
    dispatch(getProducts({ page: activePage, uses }));
  }, [activePage, page, uses]);

  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile
        bg="#0f4392"
        btnBack={true}
        setuses={setuses}
        title={t["Our products"]}
        search={true}
      />
      <NavBarMobile />

      <div className="container mt-5 lg:mt-36">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">{t["Home"]}</BreadcrumbLink>
          <BreadcrumbActive href="/products?page=1">
            {t["Our products"]}
          </BreadcrumbActive>
        </BreadcrumbsList>
        <div className="hidden lg:block">
          <h2 className="text-primary text-center my-5">{t["Our products"]}</h2>
          <SearchInput />
        </div>
        <CategoriesTagsList />
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 mt-6">
          <div className="hidden lg:block">
            <Filter setuses={setuses} />
          </div>
          <div>
            {/* <FilterTagsList /> */}
            <ExploreProducts />

            <ProductsList loading={loading} products={products} />
            {/* Pagination */}
            {!loading ? (
              <div className="mx-auto w-full px-6">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel={t["Next"]}
                  onPageChange={handlePageClick}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={1}
                  pageCount={pagesCount}
                  initialPage={page - 1}
                  disabledClassName={"opacity-50"}
                  previousLabel={t["Previous"]}
                  containerClassName={
                    "flex justify-center items-center gap-2 shadow-mainShadow mt-8 rounded-md h-[60px] select-none"
                  }
                  pageClassName={
                    "border border-primary rounded-md w-[50px] h-[40px] flex justify-center items-center"
                  }
                  // pageLinkClassName={"w-full h-full"}
                  // previousClassName={"bg-primary text-white py-2 px-4 rounded-md"}
                  // nextClassName={"bg-primary text-white py-2 px-4 rounded-md"}
                  previousLinkClassName={
                    "bg-primary text-white py-3 px-4 rounded-md h-full"
                  }
                  nextLinkClassName={
                    "bg-primary text-white py-3 px-4 rounded-md h-full"
                  }
                  breakClassName={
                    "border border-primary rounded-md w-[30px] h-[40px] flex justify-center items-center"
                  }
                  breakLinkClassName={"w-full h-full text-center text-lg"}
                  activeClassName={
                    "bg-second text-white border-none w-[34px] h-[40px]"
                  }
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
