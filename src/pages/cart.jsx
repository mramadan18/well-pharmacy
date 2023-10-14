import { useRouter } from "next/router";
import { useEffect } from "react";
// Components
import YourCart from "@/components/Cart/YourCart";
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import Footer from "@/components/Footer";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import PromoCode from "@/components/Orders/PromoCode";
import YourInfo from "@/components/Orders/YourInfo";
import PlaceOrder from "@/components/Products/PlaceOrder";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";
import SearchInput from "@/components/Utilities/SearchInput";
import NavBarMobile from "@/components/Mobile/NavBarMobile";

const Cart = () => {
  const { push } = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      push("/login");
    }
  }, []);

  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile bg="#0F4392" btnBack={true} title="My cart" />
      <NavBarMobile />

      <PlaceOrder className="lg:hidden" />
      <div className="container mt-5 lg:mt-32">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbActive href="/cart">My cart</BreadcrumbActive>
        </BreadcrumbsList>
        <SearchInput className="mt-8 hidden lg:block" />
        <h2 className="text-primary text-center my-6 hidden lg:block">
          My cart
        </h2>

        <div className="grid grid-1 lg:grid-cols-[1fr_40%] lg:mt-10 gap-6">
          <div>
            <YourInfo />
            <YourCart />
          </div>
          <div className="lg:mt-11 hidden lg:block">
            <PromoCode />
            <PlaceOrder />
          </div>
          <PromoCode className="lg:hidden" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
