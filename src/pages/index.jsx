import Footer from "@/components/Footer";
import CategoriesList from "@/components/Home/Category/CategoriesList";
import ServicesList from "@/components/Home/Services/ServicesList";
import TestimonialsSection from "@/components/Home/Testimonials/TestimonialsSection";
import SearchInput from "@/components/Utilities/SearchInput";
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import OfferDesktop from "@/components/Desktop/Home/OfferSection/OfferDesktop";
import StepsListDesktop from "@/components/Desktop/Home/Steps/StepsListDesktop";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import OfferListMobile from "@/components/Mobile/Home/Offer/OfferListMobile";
import StepsListMobile from "@/components/Mobile/Home/Steps/StepsListMobile";
import NavBarMobile from "@/components/Mobile/NavBarMobile";
import WriteReview from "@/components/Utilities/WriteReview/WriteReview";
import Support from "@/components/Utilities/Support";

const Home = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile logo={true} bg="#EDEDED" />
      <NavBarMobile />
      <div className="container mt-5 lg:mt-32">
        <SearchInput />
      </div>
      <StepsListDesktop />
      <StepsListMobile />
      <OfferDesktop />
      <OfferListMobile />
      <CategoriesList />
      <ServicesList />
      <TestimonialsSection />
      <Footer />
      <WriteReview />
      <Support />
    </>
  );
};

export default Home;
