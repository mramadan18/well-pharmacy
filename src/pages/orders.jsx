import { useRouter } from "next/router";
import { useEffect } from "react";
// Components
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import Footer from "@/components/Footer";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import YourInfo from "@/components/Orders/YourInfo";
import YourOrders from "@/components/Orders/YourOrders";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";
import SearchInput from "@/components/Utilities/SearchInput";
import NavBarMobile from "@/components/Mobile/NavBarMobile";

const Orders = () => {
  const { push } = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      push("/login");
    }
  }, []);

  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile bg="#0F4392" btnBack={true} title="My orders" />
      <NavBarMobile />

      <div className="container mt-5 lg:mt-32">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbLink href="/products?page=1">Our products</BreadcrumbLink>
          <BreadcrumbActive href="/orders">My orders</BreadcrumbActive>
        </BreadcrumbsList>
        <SearchInput className="mt-8 hidden lg:block" />
        <h2 className="text-primary text-center my-6 hidden lg:block">
          My orders
        </h2>

        <div className="lg:mt-10 gap-6">
          <div>
            <YourInfo />
            <YourOrders />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
