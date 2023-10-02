import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import Footer from "@/components/Footer";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import ProductDetails from "@/components/Products/ProductDetails";
import SliderProduct from "@/components/Products/SliderProduct";
import PlaceOrder from "@/components/Products/PlaceOrder";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";
import SearchInput from "@/components/Utilities/SearchInput";
import { getProduct } from "@/toolkit/slices/products/productSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/components/Utilities/Loading";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  const { loading: addLoading, product: addProduct } = useSelector(
    (state) => state.addToCart
  );
  const [isLoading, setIsLoading] = useState(false);
  const { loading, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
  }, [productId]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [isLoading]);
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile bg="#0f4392" btnBack={true} title="Product details" />
      <div className="lg:hidden rounded-b-lg overflow-hidden">
        <PlaceOrder />
      </div>
      <div className="container mt-5 lg:mt-36">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbLink href="/poducts">Our products</BreadcrumbLink>
          <BreadcrumbActive href="/poducts/1">Product details</BreadcrumbActive>
        </BreadcrumbsList>
        <div className="hidden lg:block mt-5">
          <SearchInput />
          <h2 className="text-primary text-center mt-5 mb-12">
            Product details
          </h2>
          {isLoading && (
            <div className="bg-[#219653] py-2 px-3 rounded-md text-white flex justify-start items-center gap-4 my-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.99985 17.9998C6.86851 17.9999 6.73844 17.9741 6.61712 17.9238C6.49579 17.8736 6.38559 17.7998 6.29285 17.7068L0.292849 11.7068C0.200004 11.614 0.126356 11.5037 0.076109 11.3824C0.0258619 11.2611 1.95655e-09 11.1311 0 10.9998C-1.95655e-09 10.8685 0.0258619 10.7385 0.076109 10.6172C0.126356 10.4959 0.200004 10.3856 0.292849 10.2928C0.385694 10.2 0.495916 10.1263 0.617223 10.0761C0.738531 10.0258 0.868547 9.99996 0.999849 9.99996C1.13115 9.99996 1.26117 10.0258 1.38247 10.0761C1.50378 10.1263 1.614 10.2 1.70685 10.2928L6.94285 15.5288L18.2408 2.3488C18.4132 2.1475 18.6585 2.02293 18.9228 2.00249C19.187 1.98205 19.4485 2.06741 19.6498 2.2398C19.8511 2.4122 19.9757 2.65749 19.9962 2.92173C20.0166 3.18597 19.9312 3.4475 19.7589 3.6488L7.75885 17.6488C7.6693 17.7537 7.55903 17.839 7.43495 17.8992C7.31087 17.9594 7.17567 17.9933 7.03785 17.9988L6.99985 17.9998Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>
                {addProduct?.quantity} panadol Extra have been added to your
                requests
              </span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <Loading />
          ) : (
            <>
              <SliderProduct data={product} />
              <ProductDetails data={product} setIsLoadingBar={setIsLoading} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
