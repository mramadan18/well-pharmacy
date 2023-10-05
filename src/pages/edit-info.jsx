import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import EditForm from "@/components/EditForm";
import Footer from "@/components/Footer";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";

const EditInfo = () => {
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile bg="#0F4392" btnBack={true} title="Edit info" />
      <div className="container mt-5 lg:mt-32">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbLink href="/products?page=1">Our products</BreadcrumbLink>
          <BreadcrumbLink href="/orders">My orders</BreadcrumbLink>
          <BreadcrumbActive href="/edit-info">Edit info</BreadcrumbActive>
        </BreadcrumbsList>
        <EditForm />
      </div>

      <Footer />
    </div>
  );
};

export default EditInfo;
