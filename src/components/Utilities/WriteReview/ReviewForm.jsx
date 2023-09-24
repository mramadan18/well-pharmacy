import { useState } from "react";

// Components
import Rates from "./Rates";
import UploadFile from "../UploadFile";
import ThankYouModal from "./ThankYouModal";
import Modal from "../Madal";
import Button from "../Button";

const ReviewForm = ({ setShowModal }) => {
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [thankYou, setThankYou] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setThankYou(true);
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg flex flex-col justify-center items-center gap-4 w-full">
        <h3 className="text-primary tracking-[1px]">Write a review</h3>
        <h5 className="text-sm tracking-[0.5px]">Rate your experience</h5>

        <Rates rate={rate} setRate={setRate} />

        <form className="flex flex-col justify-start items-start gap-5 w-full">
          <div className="w-full flex flex-col justify-start items-start">
            <label className="mb-2 fs-5" htmlFor="note">
              Leave your message*
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              id="note"
              rows={4}
              className="border border-[#AEB4B9] shadow-inner w-full"
            ></textarea>
          </div>

          <p className="text-start w-full">Upload a file</p>
          <UploadFile setFile={setFile} />

          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
      <Modal showModal={thankYou}>
        <ThankYouModal />
      </Modal>
    </>
  );
};

export default ReviewForm;
