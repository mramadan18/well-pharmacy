import HeaderMobile from "@/components/Mobile/HeaderMobile";
import ReviewForm from "@/components/Utilities/WriteReview/ReviewForm";

const Review = () => {
  return (
    <div>
      <HeaderMobile bg="#0f4392" title="Write a review" btnBack={true} />
      <div className="container mt-3">
        <ReviewForm />
      </div>
    </div>
  );
};

export default Review;
