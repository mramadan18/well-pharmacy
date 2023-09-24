import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import TestimonialsItem from "@/components/Home/Testimonials/TestimonialsItem";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";

const reviews = [
  {
    id: 1,
    img: "testimonials-1.png",
    name: "User name",
    rate: 5,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 2,
    img: "testimonials-1.png",
    name: "User name",
    rate: 3,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 3,
    img: "testimonials-1.png",
    name: "User name",
    rate: 4,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 4,
    img: "testimonials-1.png",
    name: "User name",
    rate: 1,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 5,
    img: "testimonials-1.png",
    name: "User name",
    rate: 2,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
  {
    id: 6,
    img: "testimonials-1.png",
    name: "User name",
    rate: 4,
    desc: "“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”",
  },
];

const AllReviews = () => {
  return (
    <div className="all-reviews">
      <HeaderDesktop />
      <HeaderMobile title="Testimonials" />
      <div className="container mt-4 lg:mt-32 text-center">
        <BreadcrumbsList>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <BreadcrumbActive href="/all-reviews">All reviews</BreadcrumbActive>
        </BreadcrumbsList>
        <h2 className="text-primary hidden lg:block">All reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {reviews.map((review) => (
            <TestimonialsItem key={review.id} data={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
