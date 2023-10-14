import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import NavBarMobile from "@/components/Mobile/NavBarMobile";
import PolicyList from "@/components/Policy/PolicyList";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";

const Policy = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile title="Our policy" />
      <NavBarMobile />

      <div className="container mt-5 lg:mt-32">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbActive href="/policy">Our policy</BreadcrumbActive>
        </BreadcrumbsList>
        <h2 className="text-primary text-center my-6 hidden lg:block">
          Our policy
        </h2>

        <PolicyList />
      </div>
    </>
  );
};

export default Policy;
