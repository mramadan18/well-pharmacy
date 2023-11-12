import Image from "next/image";
import { useState } from "react";
// Components
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";
import MediaContact from "@/components/ContactUs/MediaContact";
import RequestCall from "@/components/ContactUs/RequestCall";
import Footer from "@/components/Footer";
import Modal from "@/components/Utilities/Madal";
import RequestCallModal from "@/components/ContactUs/RequestCallModal";
import WriteReview from "@/components/Utilities/WriteReview/WriteReview";
import BottomModal from "@/components/Utilities/BottomModal";
// Images
import contactUs from "#/images/contact_us.png";
import NavBarMobile from "@/components/Mobile/NavBarMobile";
import { useTrans } from "@/locales/Helper";

const ContactUs = () => {
  const t=useTrans()
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile btnBack={true} bg="#0F4392" title={t['Contact us']} />
      <NavBarMobile />

      <div className="container mt-5 lg:mt-32">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">{t['Home']}</BreadcrumbLink>
          <BreadcrumbLink href="/products?page=1">{t['Our products']}</BreadcrumbLink>
          <BreadcrumbLink href="/orders"> {t['My orders']}</BreadcrumbLink>
          <BreadcrumbLink href="/confirmation">{t['Confirmation']} </BreadcrumbLink>
          <BreadcrumbActive href="/contact-us">{t['Contact us']}</BreadcrumbActive>
        </BreadcrumbsList>
        <h2 className="text-primary text-center mt-10 hidden lg:block">
          
          {t['Contact us']}
        </h2>
        <h2 className="text-second text-center mt-4 hidden lg:block">
          {t['We are here for you']}
        </h2>

        <Image
          src={contactUs}
          alt="Contact us"
          priority
          className="mx-auto mt-8 hidden lg:block"
        />

        <div className="block lg:grid lg:grid-cols-2 gap-6 mt-6 bg-white lg:bg-transparent p-3 rounded-lg">
          <h3 className="text-second text-center mt-4 lg:hidden">
            {t['We are here for you']}
          </h3>

          <Image
            src={contactUs}
            alt="Contact us"
            priority
            className="mx-auto mt-8 lg:hidden"
          />

          <MediaContact />
          <span className="w-[95%] h-[1px] bg-[#BDBDBD] block lg:hidden mx-auto"></span>
          <RequestCall setShowModal={setShowModal} setIsOpen={setIsOpen} />
        </div>
      </div>

      <Footer />
      <WriteReview />

      <BottomModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <RequestCallModal setIsOpen={setIsOpen} />
      </BottomModal>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RequestCallModal setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default ContactUs;
