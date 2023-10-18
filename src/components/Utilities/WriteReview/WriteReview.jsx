import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// Components
import Modal from "../Madal";
import ReviewForm from "./ReviewForm";
import ThankYouModal from "./ThankYouModal";
import { useTranslation } from "react-i18next";

const WriteReview = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setDisabled(false);
    }
  }, []);

  return (
    <>
      <button
        className="fixed top-1/2 -right-[60px] -translate-y-1/2 -rotate-90 z-50 bg-second text-white active:bg-red-500 font-bold tracking-[1px] text-lg px-6 py-3 rounded ease-linear transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
        disabled={disabled}
        onClick={() => {
          if (innerWidth <= 991) {
            router.push("review");
          } else {
            setShowModal(true);
          }
        }}
      >
        {t("Write Review")}
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
