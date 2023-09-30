import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderDesktop from "@/components/Desktop/Header/HeaderDesktop";
import TestimonialsItem from "@/components/Home/Testimonials/TestimonialsItem";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import BreadcrumbActive from "@/components/Utilities/Breadcrumbs/BreadcrumbActive";
import BreadcrumbLink from "@/components/Utilities/Breadcrumbs/BreadcrumbLink";
import BreadcrumbsList from "@/components/Utilities/Breadcrumbs/BreadcrumbsList";
// Toolkit
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "@/toolkit/slices/reviews/reviewsSlice";
import Loading from "@/components/Utilities/Loading";
import WriteReview from "@/components/Utilities/WriteReview/WriteReview";

const AllReviews = () => {
  const { loading, reviews } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, []);

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
        {loading ? (
          <Loading />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {reviews.map((review) => (
              <TestimonialsItem key={review.id} data={review} />
            ))}
          </div>
        )}
      </div>
      <WriteReview />
    </div>
  );
};

export default AllReviews;
