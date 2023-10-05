import { useEffect, useState } from "react";
// react phone input
import Link from "next/link";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// Get data with redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/toolkit/slices/registerSlice";
import { getHotels } from "@/toolkit/slices/hotels/hotelsSlice";
import { getRooms } from "@/toolkit/slices/rooms/roomsSlice";
import Loading from "../Utilities/Loading";
import EyeIcon from "../Utilities/EyeIcon";

const RegisterSection = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [hotel_id, setHotel_id] = useState("");
  const [room_id, setRoom_id] = useState("");

  const { hotels } = useSelector((state) => state.hotels);
  const { rooms } = useSelector((state) => state.rooms);
  const { loading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      first_name,
      phone,
      password,
      hotel_id,
      room_id,
    };

    await dispatch(register(formData));

    if (!loading && JSON.stringify(error) === "{}") {
      router.push("/login");
    }
  };

  useEffect(() => {
    dispatch(getHotels());
    dispatch(getRooms());
  }, [loading]);

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
              border: "1px solid #AEB4B9",
              borderRadius: "2px",
            }}
            value={phone}
            onChange={(e) => setPhone(e)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="password">Your Password*</label>
          <div className="w-full relative">
            <input
              className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
              id="password"
              type="password"
              placeholder="Write here"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <EyeIcon show={showPassword} setShow={setShowPassword} />
          </div>
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
            <option defaultValue>Select here</option>
            {hotels?.results?.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="room">Room Number*</label>
          <select
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="room"
            type="number"
            placeholder="Write here"
            required
            value={room_id}
            onChange={(e) => setRoom_id(e.target.value)}
          >
            <option defaultChecked>Select here</option>
            {rooms?.results?.map((room) => (
              <option key={room.id} value={room.id}>
                {room.room_number}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
        >
          {loading ? <Loading size={22} /> : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterSection;
