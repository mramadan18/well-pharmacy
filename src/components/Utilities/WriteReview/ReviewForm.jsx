import { useEffect, useState } from "react";
// Components
import Rates from "./Rates";
import UploadFile from "../UploadFile";
import Button from "../Button";
import Loading from "../Loading";
// Get data with redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "@/toolkit/slices/reviews/addReviewSlice";
// animate
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ReviewForm = ({ setShowModal, setThankYou }) => {
  const { t } = useTranslation();
  const [rate, setRate] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState(null);

  const { loading, review, error } = useSelector((state) => state.addReview);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file !== null) {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("file", file);
      formData.append("rate", rate);
      formData.append("user", 1);
      dispatch(addReview(formData));
    } else {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("rate", rate);
      formData.append("user", 1);
      dispatch(addReview(formData));
    }
  };

  useEffect(() => {
    if (JSON.stringify(review) !== "{}") {
      setShowModal(false);
      setThankYou(true);
    }
  }, [loading]);

  return (
    <>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        className="p-6 bg-white rounded-lg flex flex-col justify-center items-center gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="text-primary tracking-[1px]">{t("Write a review")}</h3>
        <h5 className="text-sm tracking-[0.5px]">
          {t("Rate your experience")}
        </h5>
        <Rates rate={rate} setRate={setRate} />
        <form className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="w-full flex flex-col justify-start items-start">
            <label className="mb-2 fs-5" htmlFor="note">
              {t("Leave your message*")}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="note"
              rows={4}
              className="border border-[#AEB4B9] shadow-inner w-full"
            ></textarea>
          </div>

          <p className="text-start w-full">{t("Upload a file")}</p>
          <UploadFile setFile={setFile} />

          {JSON.stringify(error) !== "{}" ? (
            <p className="text-second text-center w-full">
              Error, check the data and try again
            </p>
          ) : null}

          <Button type="submit" className="w-full">
            {loading ? <Loading size={22} /> : t("Submit")}
          </Button>
        </form>
      </motion.div>
    </>
  );
};

export default ReviewForm;
