import { useState } from "react";
// Components
import Modal from "../Madal";
import ReviewForm from "./ReviewForm";

const WriteReview = () => {
  const [showModal, setShowModal] = useState(false);

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
        <ReviewForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default WriteReview;
