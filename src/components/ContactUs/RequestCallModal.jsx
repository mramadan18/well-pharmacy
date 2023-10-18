import { useState } from "react";
// Toolkit
import { useDispatch, useSelector } from "react-redux";
import { requestCall } from "@/toolkit/slices/contactusSlice";
// Conponets
import Loading from "../Utilities/Loading";
// Phone input
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// animate
import { motion } from "framer-motion";

const RequestCallModal = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);

  const { loading, contact, error } = useSelector((state) => state.contactus);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phone_number: phone,
    };
    dispatch(requestCall(formData));
  };

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      className="bg-white p-4 text-center rounded-lg max-w-2xl"
    >
      <h2 className="text-primary">Request a call</h2>
      <form
        className="p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-full lg:w-[600px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="name">Your Name*</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="name"
            type="text"
            placeholder="Write here"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="phone">Phone Number*</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="name"
            type="number"
            placeholder="000 000 000 00"
            value={phone}
            onChange={(value) => setPhone(value)}
            required
          />
          {/* <PhoneInput
            placeholder="000 000 000 00"
            country="eg"
            disableDropdown={true}
            disableCountryCode={true}
            autoFormat={true}
            inputProps={{
              id: "phone",
              required: true,
            }}
            inputStyle={{
              width: "100%",
              height: "42px",
              fontSize: "1rem",
              border: "1px solid var(#AEB4B9);",
              borderRadius: "2px",
            }}
            value={phone}
            onChange={(value) => setPhone(value)}
          /> */}
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
        >
          {loading ? <Loading size={22} /> : "Send the request"}
        </button>
      </form>
    </motion.div>
  );
};

export default RequestCallModal;
