import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RequestCallModal = () => {
  return (
    <div className="bg-white p-4 text-center rounded-lg max-w-2xl">
      <h2 className="text-primary">Request a call</h2>
      <form className="p-6 rounded-lg flex flex-col justify-center items-center gap-6 w-full lg:w-[600px]">
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
          <label htmlFor="phone">Phone Number*</label>
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

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-sm font-semibold tracking-[1px]"
        >
          Send the request
        </button>
      </form>
    </div>
  );
};

export default RequestCallModal;
