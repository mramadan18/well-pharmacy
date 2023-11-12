import HeaderMobile from "@/components/Mobile/HeaderMobile";
import NavBarMobile from "@/components/Mobile/NavBarMobile";
import ReviewForm from "@/components/Utilities/WriteReview/ReviewForm";
import { useState } from "react";

const Review = () => {
  const [showModal, setShowModal] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  return (
    <div>
      <HeaderMobile bg="#0f4392" title="Write a review" btnBack={true} />
      <NavBarMobile />

      <div className="container mt-3">
        <ReviewForm setShowModal={setShowModal} setThankYou={setThankYou} />
      </div>
    </div>
  );
};

export default Review;
