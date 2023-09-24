import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "./Utilities/Button";

const EditForm = () => {
  return (
    <div className="text-center mt-8 mx-auto bg-white p-6 rounded-lg max-w-lg lg:shadow-secondShadow">
      <h2 className="text-primary">Edit info</h2>
      <form className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="name">Your Name*</label>
          <input
            id="name"
            type="text"
            placeholder="Write here"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
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
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="hotel">Select Hotel Name*</label>
          <select
            id="hotel"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
          >
            <option value="">Select here</option>
            <option value="1">Marina sharm</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 w-full">
          <label htmlFor="room">Room Number*</label>
          <input
            id="room"
            type="number"
            placeholder="Write here"
            required
            className="w-full py-2 px-3 border border-[#AEB4B9] shadow-inner rounded-sm text-[#8C9196] outline-none"
          />
        </div>

        <div className="flex justify-between items-center w-full gap-5">
          <button className="bg-transparent text-second py-2 rounded-md font-semibold tracking-[1px] border border-second w-1/2">
            Discard
          </button>
          <Button className="w-1/2">Save changes</Button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
