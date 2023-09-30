import { useEffect, useState } from "react";
// Toolkit
import { useSelector } from "react-redux";
// Components
import Modal from "../Madal";
import ReviewForm from "./ReviewForm";
import ThankYouModal from "./ThankYouModal";

const WriteReview = () => {
  const [showModal, setShowModal] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const { loading, review, error } = useSelector((state) => state.addReview);
  return (
    <>
      <button
        className="fixed top-1/2 -right-[60px] -translate-y-1/2 -rotate-90 z-50 bg-second text-white active:bg-red-500 font-bold tracking-[1px] text-lg px-6 py-3 rounded ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Write Review
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ReviewForm setShowModal={setShowModal} setThankYou={setThankYou} />
      </Modal>

      <Modal showModal={thankYou} setShowModal={setThankYou}>
        <ThankYouModal setThankYou={setThankYou} />
      </Modal>
    </>
  );
};

export default WriteReview;
