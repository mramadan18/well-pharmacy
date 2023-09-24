import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import Footer from "@/components/Footer";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import StateOrder from "@/components/Tracking/StateOrder";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";

const Tracking = () => {
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile btnBack={true} bg="#0F4392" title="Order Tracking" />
      <div className="container mt-5 lg:mt-32">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbLink href="/products">Our products</BreadcrumbLink>
          <BreadcrumbLink href="/orders">My orders</BreadcrumbLink>
          <BreadcrumbLink href="/confirmation">Confirmation</BreadcrumbLink>
          <BreadcrumbActive href="/tracking">Order tracking</BreadcrumbActive>
        </BreadcrumbsList>

        <StateOrder />
      </div>

      <Footer />
    </div>
  );
};

export default Tracking;
