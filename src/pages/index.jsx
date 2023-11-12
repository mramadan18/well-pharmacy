import Footer from "@/components/Footer";
import CategoriesList from "@/components/Home/Category/CategoriesList";
import Top50Drugs from  "@/components/Home/Top50Drugs/Top50DrugsList";

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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
 
const Home = () => {
 
  useEffect( () => {
    // console.log( lang,"getLang");
if( !localStorage.getItem("lang")){
  localStorage.setItem("lang",'en')

}

  }, [])
  
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
      <Top50Drugs />

      <ServicesList />
      <TestimonialsSection />
      <Footer />
      <WriteReview />
    </>
  );
};

export default Home;

export async function getStaticProps(context) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
