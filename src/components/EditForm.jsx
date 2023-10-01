import { useEffect, useState } from "react";
import Button from "./Utilities/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "@/toolkit/slices/hotelsSlice";
import { getRooms } from "@/toolkit/slices/roomsSlice";
import { updateProfile } from "@/toolkit/slices/updateProfileSlice";
import Loading from "./Utilities/Loading";
import { useRouter } from "next/router";

const EditForm = () => {
  const router = useRouter();
  const [first_name, setFirst_name] = useState("");
  const [phone, setPhone] = useState("");
  const [hotel, setHotel] = useState("");
  const [room, setRoom] = useState("");

  const { hotels } = useSelector((state) => state.hotels);
  const { rooms } = useSelector((state) => state.rooms);
  const { loading } = useSelector((state) => state.upadteProfile);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      phone,
      hotel,
      room,
    };

    await dispatch(updateProfile(formData));
  };

  useEffect(() => {
    dispatch(getHotels());
    dispatch(getRooms());
  }, []);

  return (
    <div className="text-center mt-8 mx-auto bg-white p-6 rounded-lg max-w-lg lg:shadow-secondShadow">
      <h2 className="text-primary">Edit info</h2>
      <form
        className="flex flex-col justify-center items-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="name">Your Name*</label>
          <input
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="name"
            type="text"
            placeholder="Write here"
            // required
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
            onChange={(value) => setPhone(value)}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="hotel">Select Hotel Name*</label>
          <select
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
            id="hotel"
            required
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
          >
            <option defaultChecked>Select here</option>
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
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option defaultChecked>Select here</option>
            {rooms?.results?.map((room) => (
              <option key={room.id} value={room.id}>
                {room.room_number}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between items-center w-full gap-5">
          <button
            className="bg-transparent text-second py-2 rounded-md font-semibold tracking-[1px] border border-second w-1/2"
            type="button"
            onClick={() => router.push("/")}
          >
            Discard
          </button>
          <Button className="w-1/2" type="submit">
            {loading ? <Loading size={22} /> : "Save changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
