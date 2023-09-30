import { useState } from "react";
// react phone input
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Get data with redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "@/toolkit/slices/registerSlice";

const RegisterSection = () => {
  const router = useRouter();
  const [first_name, setFirst_name] = useState("");
  const [phone, setPhone] = useState("");
  const [passwoed, setPasswoed] = useState("");
  const [hotel_id, setHotel_id] = useState("");
  const [room_id, setRoom_id] = useState("");

  const formData = {
    first_name,
    phone,
    passwoed,
    hotel_id,
    room_id,
  };

  const { loading, message, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleRegister({ ...formData }));

    console.log("loading", loading);
    console.log("message", message);
    console.log("error", error);
  };

  return (
    <div className="flex flex-col justify-start items-center gap-8 pt-5 pb-10 lg:pb-0 lg:pt-20 bg-white">
      <div className="text-center tracking-[1px]">
        <h2 className="mb-3">Welcome to Well+ pharmacy</h2>
        <h4 className="text-second">live healthy … live well</h4>
      </div>
      <form
        className="bg-mainBg p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-[90%] lg:w-[440px]"
        onSubmit={handleSubmit}
      >
        <div className="text-center tracking-[1px]">
          <h2 className="text-primary mb-4">Sign up</h2>
          <span>
            Already have an account?
            <Link href="/login" className="text-[#2C6ECB] font-semibold ms-2">
              Sign in
            </Link>
          </span>
        </div>

        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="name">Your Name*</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="name"
            type="text"
            placeholder="Write here"
            required
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="phone">Your Phone*</label>
          <PhoneInput
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
            onChange={(e) => setPhone(e)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="password">Your Password*</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="password"
            type="password"
            placeholder="Write here"
            required
            value={passwoed}
            onChange={(e) => setPasswoed(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="hotel">Select Hotel Name*</label>
          <select
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="hotel"
            // required
            value={hotel_id}
            onChange={(e) => setHotel_id(e.target.value)}
          >
            <option>Select here</option>
            <option value="1">Marina sharm</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="room">Room Number*</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="room"
            type="number"
            placeholder="Write here"
            // required
            value={room_id}
            onChange={(e) => setRoom_id(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default RegisterSection;
